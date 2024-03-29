const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/viewsgit co/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let items = [];
let workItems = [];
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItems: items });
});
app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work List", newListItems: workItems });
});

app.listen(3000, function () {
  console.log("Server is live now !");
});
