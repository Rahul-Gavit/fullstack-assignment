const express = require("express");
const router = express.Router();
const cardController = require("../controller/cards");

// Create a new card
router.post("/", cardController.createCard);

// Get all cards
router.get("/", cardController.getCards);

// Get a card by title
router.get("/:title", cardController.getCardByTitle);

module.exports = router;
