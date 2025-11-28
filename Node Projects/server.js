const express = require("express");
const dotenv = require("dotenv").config();
const contactsRotes = require("./routes/contactRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use("/api/contacts", contactsRotes);
app.listen(port, () => {
  console.log(`Server  Started On ${port}`);
});
