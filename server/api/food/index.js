import express from "express";
import {FoodModel} from "../../database/allModels"

const Router=express.Router();

/**
 * Route     /:_id
 * Des       Create New Food Item
 * Params    none
 * Access    Public
 * Method    POST
 *  Homework//
 */
// -----------------------------
/* 
Route:  /:_id
Des:    get food based on id
params: _id
access: public
method: get 
*/
Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const foods=FoodModel.findById(_id)
        return res.json({foods})
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
});

/* 
Route:  /r/:_id
Des:    get food based on particular restaurant
params: _id
access: public
method: get 
*/

Router.get("/r/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const foods=await FoodModel.find({restaurent:_id})
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})

/* 
Route:  /:_id
Des:    create new food item
params: _id
access: public
method: post
*/

/* 
Route:  /c/:catagory
Des:    get all the food based on a particular catagory
params: catagory
access: public
method: get
*/

Router.get("/c/:catagory",async(req,res)=>{
    try{
        const {catagory} =req.params;
        const foods=await FoodModel.find({catagoty:{$regex:catagory,$options:"i"}})

        if (!foods){
            return res.status(404).json({
                error:`No food matched with ${catagory}`
            })
        }

        return res.json({foods});
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})
export default Router;
