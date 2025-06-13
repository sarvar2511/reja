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

//MongoDB chaqiramiz
const db = require("./server").db(); //...CRUD
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
  console.log("STEP-2: FrontEnd da backendga keldi");
  console.log(req.body);
  const new_reja = req.body.reja;
  console.log("STEP-3: BACKEND => DATABASE ");
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.end("succesfully added");
    }
  });
});
app.get("/", function (req, res) {
  console.log("STEP-1: BACKENDga kirish");

  console.log("STEP-2: BACKEND => DATABASE"); //backenddan databasega borib yana qaytib keladi

  db.collection("plans") //plans degan collectionni ushla
    .find() // unidagi hamma malumotlarni ol
    .toArray((err, data) => {
      console.log("STEP-3: DATABASE => BACKEND");
      console.log(data);
      // va shu malumotlarni array ga otkaz

      console.log("STEP-3: BACKEND HTML => FRONTEND");
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
