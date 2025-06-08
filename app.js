console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB chaqiramish
const db = require("./server").db();
/*ushbu ozgaruvchi mongodb instanceni qolga olib beradi
bu orqali databasega turli malumotlarni
yozish/ochirish/oqish... */
//1.Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2. Session codes
//3. Views codes
app.set("views", "views");
app.set("view engine", "ejs");

//4.Routing codes
app.post("/create-item", (req, res) => {
  // console.log(req.body);
  res.json({ test: "succes" }); // va json shaklida malumotni qabul qilmoqchiman
});
app.get("/", function (req, res) {
  res.render("reja");
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
