const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
