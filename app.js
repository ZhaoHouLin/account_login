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
  const keyinData = req.body;
  const verifyResults = verification(keyinData);

  if (typeof verifyResults === "object") {
    res.render("login_success", { verifyResults });
  } else {
    res.render("index", { verifyResults, option: keyinData });
  }
  // console.log(verifyResults);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
