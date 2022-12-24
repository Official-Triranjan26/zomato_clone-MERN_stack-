import mongoose from "mongoose";

const InageSchema= new mongoose.Schema({
    images:[
        {
            location:{type:String,required:true},
        },
    ],
}
,{
    timestamps:true,
})

export const ImageModel=mongoose.model("images",InageSchema)