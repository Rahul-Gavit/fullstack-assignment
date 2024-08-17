const express = require("express");
const app = express();
const port = 8080;
const cardRoutes = require("./routes/cards");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/db");

// CORS Middleware
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true,
};
app.use(cors(corsOptions));

//Routes
app.use("/api/cards", cardRoutes);

// Connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
