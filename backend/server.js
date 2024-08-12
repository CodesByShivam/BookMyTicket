const express = require("express");

const app = express();

require("dotenv").config(); // loads the environment variables from a .env file into process.env
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");

connectDB();


app.use(express.json());
app.use("/api/users", userRouter);
/** Routes */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8082, () => {
  console.log("Server is running at port 8082");
});
