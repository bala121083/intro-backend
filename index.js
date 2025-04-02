const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Insta API1!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Global BigInt-safe JSON.stringify override
BigInt.prototype.toJSON = function () {
  return this.toString();
};
