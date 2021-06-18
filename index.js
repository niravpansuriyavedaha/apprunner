const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 80;

app.use(express.static(path.join(__dirname, "build")));

app.get("/test", (req, res) => {
  return res.status(200).send("Hey Buddy!!!");
});

app.get("/env", (req, res) => {
  return res.status(200).send(process.env);
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
