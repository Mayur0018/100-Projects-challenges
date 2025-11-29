const express = require("express");
const dotenv = require("dotenv").config();
const contactsRotes = require("./routes/contactRoutes");
const errorHndler = require("./middleware/errorhandle");
const connectDb = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
connectDb();
const app = express();
const port = process.env.PORT || 5000;

// middlewere 
app.use(express.json());
app.use("/api/contacts", contactsRotes);
app.use("/api/users", userRoutes);
app.use(errorHndler)
app.listen(port, () => {
  console.log(`Server  Started On ${port}`);
});
