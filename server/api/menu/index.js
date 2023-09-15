import express from "express";
import {MenuModel,ImageModel} from "../../database/allModels" ;
const Router=express.Router();

/*
Route:  /list/:_id
Des:    get menuse based on menu id
params: _id
access: public
method: get
*/

Router.get("/list/:_id", async (req,res)=>{
    try{
        const {_id}=req.params;
        const menus= await MenuModel.findById({_id});
        if(!menus){
            return res.status(404).json({error: `menu with ${_id} not found !!`});
        }
        return res.status(200).json({menues : menus})


    }catch(error){
        return res.status(500).json({reeor : error.message})
    }
})

/*
Route:  /image/:_id
Des:    get menu images with id
params: _id
access: public
method: get
*/

Router.get("/image/:_id", async (req,res)=>{
    try{
        const {_id}=req.params;
        const menuImages=await ImageModel.findById(_id);

        if(! menuImages){
            return res.status(404).json({error : "menu imagrs not found !!"});
        }

        return res.status(200).json({menuImages : menuImages});

    }catch(error){
        return res.status(500).json({reeor : error.message})
    }
})
export default Router;