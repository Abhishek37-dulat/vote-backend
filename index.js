const express = require("express");
const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(PORT, () => {
  console.log("listening to PORT: ", PORT);
});
