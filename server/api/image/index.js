import express from "express";
import AWS from "aws-sdk";
import multer from "multer";  

import {FoodModel, ImageModel} from "../../database/allModels";

import {s3Upload} from "../../utill/s3";

const Router = express.Router();

//  multer configure
const storage = multer.memoryStorage();
const upload= multer({storage});

/*
 * Route     /:_id
 * Des       get image details
 * Params    _id
 * Access    Public
 * Method    get
 */

Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}= req.params;
        const image = await ImageModel.findById({_id});
        return res.status(200).json({image});
    }catch(error){
        return res.status(500).json({error: error.message});
    }
})
/*
 * Route     /
 * Des       upload given image to s3 bucket and save file link to mongodb
 * Params    none
 * Access    Public
 * Method    post
 */

Router.post("/",upload.single('file'),async(req,res)=>{
    try{
        const file =req.file;
        const bucketOptions={
            Bucket : "zomato26",
            Key : file.originalname,
            Body : file.buffer,
            ContentType : file.mimetype,
            ACL : "public-read" //accesss control list
        }
        const uploadImage = await s3Upload(bucketOptions);

        const dbUpload = await ImageModel.create({
            images: [
                {
                location: uploadImage.Location,
                },
            ],
        });
        return res.status(200).json({dbUpload});

    }catch(error){
        return res.status(500).json({error : error.message});
    }
})

export default Router;