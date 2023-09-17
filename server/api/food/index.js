import express from "express";
import { FoodModel } from "../../database/allModels";
import { validateCategory, validateId } from "../../validation/commomValidation";

const Router = express.Router();

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
Router.get("/:_id", async (req, res) => {
  try {
    await validateId(req.params);
    const { _id } = req.params;
    const food = await FoodModel.findById(_id);
    if (!food) {
      return res.status(404).json({ error: "food with this id not found" });
    }
    return res.json({ food });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* 
Route:  /r/:_id
Des:    get food based on particular restaurant
params: _id
access: public
method: get 
*/
//
Router.get("/r/:_id", async (req, res) => {
    try {
      await validateId(req.params);
      const { _id } = req.params;
      const foods = await FoodModel.find({
        restaurant: _id,
      });
      console.log(foods);
      return res.json({ foods : foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

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

Router.get("/c/:catagory", async (req, res) => {
  try {
    await validateCategory(req.params);
    const { catagory } = req.params;
    const foods = await FoodModel.find({
      catagoty: { $regex: catagory, $options: "i" },
    });

    if (foods.length==0) {
      return res.status(404).json({
        error: `No food matched with ${catagory}`,
      });
    }

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
