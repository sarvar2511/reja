console.log("Web Serverni boshlash");
/*const express = require("express");
//express package node.js da backend serverni qurishda yodam beradi
const app = express();
//expressning app objectidan backend serverni qurishda foydalanamiz
const http = require("http");
//http core package. bu serverni ishlatish uchun hizmat qiladigan object
const fs = require("fs");
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
}); //fs dan fodalanib user.json malumotimizni oqiydi/ suniy databaseni oqidi.

/*
.ejs - backenddan kelyotgan maumotlarni joylashtirish uchun til/tool 
Pattern (qolip) - ARCHITECTURE & DESIGN(Middlaware)
ARCHITECTURE patern - Backendni 90%ni qurib beradiga qolip
MVC => client=>CONTROLLER=>Model=>Database=>Model=>CONTROLLER=>View(.ejs)=>CONTROLLER=>client

DESIGN(Middlaware)- pattern - malum bir oddiy ishlarni qiladigan qolip
Kirish kodlari misol bola oladi

(B)SSR & SPA 
(B)SSR -Backend Site Server Rendering- Backend va frontend bir joyda boladi
(Doim browser update bolishi kerak ozgarishlarni olish uchun)

SPA - Single Page Application- Backend va frontend alohida boladi.
( browser update bolishi kerak emas ozgarishlarni olish uchun)


API REQUESTS:
    1) TYPE       => Traditional api | Rest api | GraphQL api
    2) METHOD     => GET | POST
    3) STRUCTURE  => header | body

    (B)SSR da traditional api va rest api lar ishlatiladi
    Rest API ozi SPA lar uchun ishlab chiqilgan

// GET- data basedan malumot olish uchun ishlaydi
//POST esa malumotni ozi bn olib keladi va database usha malumotni yozadi


  Backend server bir marta quriladi boldi, requestlar API larga kealdi
 */
/*//1.Kirish code
app.use(express.static("public")); //Publicni ochib beradi=>
//Bu mantiq backenddagi turgan malum bir fayl(public)ni frontendga ochib beradi.
// Boshqa fayllar frontendga yopiq boladi
app.use(express.json()); //REST-API ga kirish imkonini beradi=>
// frontend kelyotgan json fayl datalarini objectga aylantirib beradi
//json formatdagi datani serverga kiritib beradi
app.use(express.urlencoded({ extended: true })); //Traditional API ni qabul qilish uchun hizmat qiladi=>
//nested objectlar kelsa qabul qil degan kod

//2. Session codes => Authentication=>Log in/Sing up jarayonlari

//3. Views codes
app.set("views", "views");
//ejs ni qaysi fayldan izlay degan code
app.set("view engine", "ejs");
//ejs ni ishlatish uchun xizmat qiladigan code

// //4.Routing codes => API lar
console.log("Passed A");

//1-API
app.post("/create-item", (req, res) => {
  console.log("Step-2: Backendga keldim");
  console.log("Step-2: Frontenddan qabul qilgan malumotlarim");
  console.log(req.body);
  console.log("Step-4: Backenddan chiqib Frontedga ketyapman");
  //post sorovlarimiz doim API larimizni body qismidan keladi
  res.json({ test: "succes" });
});
//2-API
app.get("/", function (req, res) {
  //Bu function qachonki get method request amalga oshirilganda ishga tushadi
  console.log("BU API DOIM ISHGA TUSHADI");
  res.render("harid");
  // render - ejs formatdagi malumotni frontendga uzatish
});
//API-3
app.get("/author", (req, res) => {
  res.render("author", { user: user });
  //author.ejs ga usedan kelgan malumotni kiritish
});
console.log("Passed B");

const server = http.createServer(app);
//http objectini .createServer methodiga argument sifatida app ni pass qilsak bizga backend serverni qurib beradi
let PORT = 3000;
//serverni olib listen qiladigan bolsak server port larimiz ishga tushayapti
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
*/

const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
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
  res.render("harid");
});
app.get("/author", (req, res) => {
  res.render("author", { user: user });
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
