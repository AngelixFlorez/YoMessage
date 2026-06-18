import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },

}, { timestamps: true });
// Para que guarde la fecha y la hora de creacion y actualizacion

const User = mongoose.model("User", userSchema);

export default User;
