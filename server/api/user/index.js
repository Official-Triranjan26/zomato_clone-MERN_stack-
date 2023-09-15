import express from "express";
import passport from "passport";
import { UserModel } from "../../database/user";
const Router = express.Router();

/*
Route:  /
Des:    get authorized user data
params: none
access: public
method: get
*/

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } = req.user;

      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/*
Route:  /:_id
Des:    get a user by id
params: :_id
access: public
method: get
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById({ _id });
    if (!getUser) {
      return res.status(404).json({ error: "User not found !!" });
    }
    const { fullName } = getUser;

    return res.json({ user: { fullName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route:  /update/:_id
Des:    update a user details by id
params: :_id
access: private
method: put
*/

Router.put(
  "/update/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const {_id} = req.params;
      const { userData } = req.body;

      userData.password=undefined;

      const updatedData = await UserModel.findByIdAndUpdate(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );
      if(!updatedData){
        return res.status(400).json({error : `user with this id : ${_id} not found !!`});
      }
      return res.status(200).json({ user: updatedData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);
export default Router;
