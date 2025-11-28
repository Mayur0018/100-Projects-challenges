const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.get("/api/contacts", (req, res) => {
  res.status(200).json({mesagge : "Mayur Best Hai Or Rahega"});
});
app.listen(port, () => {
  console.log(`Server  Started On ${port}`);
});
