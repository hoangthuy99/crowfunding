require("dotenv").config();
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const jsonServer = require("json-server");
const app = express();
app.use(express.json());
app.use(cors());
// app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));
const PORT = 5000;
app.get("/api/test", (req, res) => {
  // res.json(database.campaigns);
  res.send('hello')
});
app.get('api/vinh',(req,res)=> {
  res.send('hello world...')
})

app.listen(PORT, () => console.log("Server started on port" + PORT));
