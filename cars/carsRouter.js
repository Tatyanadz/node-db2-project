const express = require("express");
const db = require("../data/dbconfig");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      const cars = await db("cars");
      res.json(cars);
    } catch (err) {
      next(err);
    }
  });
  
  // get by id
  router.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const car = await db("cars").where({ id });
  
      res.json(car);
    } catch (err) {
      next(err);
    }
  });
  
  // update
  router.put("/:id", async (req, res, next) => {
    try {
      const payload = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage
      }

      await db("cars")
        .where("id", req.params.id)
        .update(payload);
      const updateCar = await db("cars")
        .where("id", req.params.id)
        .first()
      res.json(updateCar)
    } catch (err) {
      next(err)
    }
  })


  // Create
  router.post("/", async (req, res, next) => {
    try {
      const carsData = req.body;
      const [id] = await db("cars").insert(carsData);
      const newCar = await db("cars").where({ id });
  
      res.status(201).json(newCar);
    } catch (err) {
      next(err);
    }
  });
  
  //delete
  router.delete("/:id", async (req, res, next) => {
    try {
      await db("cars")
        .where("id", req.params.id)
        .del();
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;