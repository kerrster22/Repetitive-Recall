require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Srs = require("./models/Srs");
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json()); // allows us access to the request.body

// connect to the database (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

// READ
app.get("/Card", async (request, response) => {
  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const cards = await Srs.find(request.query); // e.g. { location: "Liverpool" }
    response.status(200).json(cards);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// CREATE
app.post("/Card", async (request, response) => {
  try {
    console.log(request.body);
    const newCard = await Srs.create(request.body);
    response.status(200).json(newCard);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// DELETE e.g localhost:8080/Card/90869868728729
app.delete("/Card/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedCard = await Srs.findByIdAndDelete(id);
    response.status(200).send(deletedCard);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// UPDATE
app.put("/Card/:id", async (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  try {
    const updatedCard = await Srs.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.status(200).json(updatedCard);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
