const express = require("express");

const app = express();

app.use(express.json());
/** Routes */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8082, () => {
  console.log("Server is running at port 8082");
});
