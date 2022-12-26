import express from "express";
import {RestaurantModel} from "../../database/allModels"

const Router=express.Router();
/*
Route:  /
Des:    get all the restaurents on basis of a city
params: none
access: public
method: get
*/

Router.get("/",async(req,res)=>{
    try{
        //http://localhost:4000/restaurent/?city=kolkata
        const {city}=req.query;
        const restaurants = await RestaurantModel.find({city})

        if(restaurants.length==0){
            return res.json({error:"No restaurant found in this city"})
        }

        return res.status(200).json({restaurants})
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})


/*
Route:  /:_id
Des:    get the rastaurant based on it's id
params: _id
access: public
method: get
*/

Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const restaurant = await RestaurantModel.findById({_id});

        if(!restaurant){
            return res.json({error:"Restaurant with this id not found!!"});
        }

        return res.status(200).json({restaurant})
        }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})

/*
Route:  /search/:searchString
Des:    get restaurent details based on searchString
params: searchString
access: public
method: get
*/

Router.get("/search/:searchString",async(req,res)=>{
    try{
        const {searchString}=req.params;
        const restaurants=RestaurantModel.find({
            name:{$regex:searchString ,$options:"i"}
        });
        if(!restaurants){
            return res.status(400).json({error:`No restaurant matched with ${searchString}`})
        }

        return res.json({restaurants});
    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})

/*
Route:  /
Des:    create a new restaurant
params: none
access: public
method: post
homework
*/

export default Router;