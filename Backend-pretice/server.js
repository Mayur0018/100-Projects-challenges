const express = require("express");
const app = express();
const movieRouter = require("./routes/moviesRoutes.js");

app.use("/movies",movieRouter);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started On ${PORT}`);
});
