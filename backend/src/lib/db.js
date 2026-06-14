import mongoose from "mongoose";

async function connectDB(){
    try {
        const mongoUri = process.env.MONGO_URI;

        if(!mongoUri){
            throw new Error("MONGO_URI is not defined");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error: " + error.message);
        process.exit(1);
        // 1 = Error y se detiene la aplicacion
        // 0 = Todo correcto
    }
}

export default connectDB;
