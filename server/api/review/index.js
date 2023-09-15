import express from "express";
import passport from "passport";
import { ReviewModal } from "../../database/allModels";
const Router = express.Router();

/*
Route:  /:resId
Des:    get all reviews of a restaurent by restaurent id
params: resId
access: public
method: get
*/

Router.get("/:resId", async (req, res) => {
  try {
    const { resId } = req.params;
    const reviews = await ReviewModal.find({ restaurant: resId }).sort({
      createdAt: -1,
    });

    if (reviews.length == 0) {
      return res
        .status(404)
        .json({ message: "no reviews for this restaurant" });
    }

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route:  /new
Des:    create a new review 
params: none
access: private
method: post
*/

Router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.user;
      const { newReview } = req.body;
      console.log(newReview);
      console.log(_id);
      const getNewReview = await ReviewModal.create({
        ...newReview,
        user: _id,
      });
      return res.status(200).json({ review: getNewReview });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

/*
Route:  /delete/:id
Des:    delete a review
params: id (id of review)
access: private
method: delete
*/

Router.delete("/delete/:id" ,passport.authenticate("jwt", { session: false }) ,async (req,res)=>{
  try{
    const {id}=req.params;
    const {user}=req;

    const data=await ReviewModal.findOneAndDelete({
      _id: id,
      user : user._id
    });

    if(!data){
      return res.status(404).json({message : "review not deleted !!"});
    }

    return res.status(200).json({message : "review deleted successfully !!",
    data
  });

  } catch(error){
    res.status(500).json({error : error.message});
  }
})

export default Router;
