const mongoose = require("mongoose");
require("dotenv").config();

const Srs = require("./models/Srs");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new instance of a cat object and add to the DB
  await Srs.create({
    question: "1+1",
    answer: "2",
    interval: 1,
  });
  console.log("Created a new Srs Card");

  mongoose.disconnect();
}

seed();
