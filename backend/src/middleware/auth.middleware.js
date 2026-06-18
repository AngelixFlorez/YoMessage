import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";

export async function protectRoute(req, res, next) {
    try {
        const { userId } = getAuth(req);
        console.log("protectRoute - userId from Clerk:", userId);

        if(!userId) {
            console.log("No userId found - Clerk session missing");
            res.status(401).json({message: "Unauthorized"});
            return;
        }

        let user = await User.findOne({clerkId: userId});
        if(!user) {
            let clerkUser;

            try {
                const resp = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
                    headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
                });
                if (resp.ok) clerkUser = await resp.json();
                else console.error("Clerk API error:", resp.status, await resp.text().catch(() => ""));
            } catch (apiErr) {
                console.error("Clerk API fetch failed:", apiErr.message);
            }

            const email = clerkUser?.email_addresses?.find(
                (e) => e.id === clerkUser.primary_email_address_id
            )?.email_address ?? clerkUser?.email_addresses?.[0]?.email_address ?? `${userId}@placeholder.com`;

            const fullName = clerkUser
                ? [clerkUser.first_name, clerkUser.last_name].filter(Boolean).join(" ") || clerkUser.username || email?.split("@")[0]
                : "New User";

            user = await User.create({
                clerkId: userId,
                email,
                username: clerkUser?.username || fullName,
                fullName,
                profilePic: clerkUser?.image_url || "",
            });
            console.log("Created user in MongoDB for Clerk ID:", userId, "email:", email);
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error protectRoute middleware", error.message);
        res.status(500).json({message: "Internal server error"});
        return;
    }
}