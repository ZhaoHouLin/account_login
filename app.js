const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const verification = require("./verification.js");
const port = 3000;
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password;
  const keyinData = req.body;
  const verifyResults = verification(keyinData);
  res.render("index");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
