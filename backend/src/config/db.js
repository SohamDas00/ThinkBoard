import mongoose from "mongoose"

export const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB connected Successfully!");
        
    } catch (error) {
        console.error("Error in connecting MONGODB",error);
        process.exit(1);
    }
}