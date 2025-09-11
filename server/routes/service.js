const express = require("express");
const Service = require("../models/service");

const serviceRouter = express.Router();

//add service
serviceRouter.post("/add", async (req, res) => {
  try {
    let newservice = new Service(req.body);
    let result = await newservice.save();
    res.send({ service: result, msg: "service is added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});
//get all services
serviceRouter.get("/", async (req, res) => {
  try {
    let result = await Service.find();
    res.send({ services: result, msg: "all services" });
  } catch (error) {
    console.log(error);
  }
});

//get service by id

serviceRouter.get("/:id", async (req, res) => {
  try {
    let result = await Service.findById(req.params.id);
    res.send({ service: result, msg: "one service" });
  } catch (error) {
    console.log(error);
  }
});

//delete service
serviceRouter.delete("/:id", isAuth(), async (req, res) => {
  try {
    let result = await Service.findByIdAndDelete(req.params.id);
    res.send({ msg: "service is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update service
serviceRouter.put("/:id", async (req, res) => {
  try {
    let result = await Service.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ service: "result", msg: "service is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = serviceRouter;