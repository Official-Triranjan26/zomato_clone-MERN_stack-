import mongoose from "mongoose";
mongoose.set('strictQuery', true);

export default async()=>{
    return mongoose.connect(process.env.MONGO_URL);
};