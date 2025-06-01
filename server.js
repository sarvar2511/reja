console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
//express dan app objectini yuboradi, va bu orqali express web server quramiz: 4 bosqichda:

//1.Kirish code
// expreessga kirib kelayotgan  malumotlarga bogliq kodlar yoziladi
app.use(express.static("public")); //=> Bu har qanday browserdan kirib kelayotgan zaproslar uchun public folder ochiq degani.
//  Public folderni userlaga ochib beramiz. css styling va imagelar shuni ichida boaldi
app.use(express.json()); //bu kirib kelayotgan .json formatdagi malumotni object holatiga ogirib beadi
app.use(express.urlencoded({ extended: true })); // HTML form dan traditional request qilish elementi.
//  formdan biror nasa post qilsak bu narsa serverga kiritib beradi=>express qabul qiladi

//2. Session codes

//3. Views codes
// Backend da HTML yasaymiz.
app.set("views", "views"); //views folderdan oqiydi
app.set("view engine", "ejs"); //ejs orqali backend ni ichida front-end ni yasaymiz

//4.Routing codes
//  Routerlarga moljallangan.
app.get("/hello", function (req, res) {
  // localhost:3000/hello deb google gilsak ochib beradi
  res.end("<h1 >HELLO MIT by LEO </h1>"); //super string bilan style bersayam boladi htmlga
});

app.get("/gift", function (req, res) {
  res.end("<h1 > Siz sovgalar bolimidasiz </h1>"); // localhost:3000/gift deb google gilsak ochib beradi
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
}); // serverga yukladik

// express framework orqali web server ni qurib oldik
/* 
1. BSSR=> backendda front end ni render qilib olish/ qurib olish va browserga yuborish
2. react da quramiz(keyinroq organamiz)

loyihani boshqa qurulmada ham korinishi uchun guthub dan foydalanamiz
git branch=> develop => da ishlab keyin masterga merge qilinadi.
git branch=> master da qilamiz hozircha
*/
