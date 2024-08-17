const Card = require("../model/Card");

// Create a new card
const createCard = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newCard = new Card({
      title,
      description,
    });
    await newCard.save();
    res.json(newCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all cards
const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a card by title
const getCardByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const card = await Card.find({ title: { $regex: title, $options: "i" } }); // Case-insensitive search
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCard,
  getCards,
  getCardByTitle,
};
