const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  question: String,
  answer: String,
  interval: Number,
  nextAsk: Date,
});

const Srs = mongoose.model("Card", cardSchema);

module.exports = Srs;
