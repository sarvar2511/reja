console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");
//CRUD ishlashi uchun Mongodb ni require qilib olamiz
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB chaqiramiz
const db = require("./server").db();
//server.js dan client.db() chaqirish orqali connection quramiz
//va natijada CRUD amallarini bajarish imkonini yaratamiz
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
  //console.log("CRUD => CREATE ")
  // console.log("STEP-2: FrontEnd da backendga kirish");
  console.log(req.body);
  const new_reja = req.body.reja;
  // console.log("STEP-3: BACKEND => DATABASE ");
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // console.log("STEP-4: DATABASE => BACKEND");
    //modern post uchun yozamiz
    // console.log(data.ops);
    // console.log("STEP-5: BACKEND => FRONTEND ");
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  //console.log("CRUD => DELETE ")
  const id = req.body.id;
  console.log(id);
  //db ga kirib malumotni ochirish =>
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.get("/", function (req, res) {
  //console.log("CRUD => READ ")
  // console.log("STEP-1: Browserda Localhost:3000 ga enter bosib kirilganda FRONTENDda boshlanadi");
  // console.log("STEP-2: BACKENDga kirish");
  // console.log("STEP-3: BACKEND => DATABASE jonash");

  db.collection("plans") //plans degan collectionni ushla
    .find() // unidagi hamma malumotlarni ol
    .toArray((err, data) => {
      // va shu malumotlarni array ga otkaz
      // console.log("STEP-4: DATABASE => BACKEND ga qaytib keladi data ni olib keladi");
      console.log(data);
      res.render("reja", { items: data });
      //Backendda DB dan kelgan datani olib reja.ejs ga berayapti va bu orqali HTML ni qurayapti
      //va FRONTENDga yuborayapti
      // console.log("STEP-5: BACKEND HTML => FRONTEND ga javob yuboradi");
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
