console.log("TRAIN AREA");
/*
TASK-C

Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
*/
const moment = require("moment");
class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  getTime() {
    return moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.getTime()}da ${this.non}ta non, ${
        this.lagmon
      }ta lag'mon va ${this.cola}ta cola mavjud`
    );
  }

  sotish(tovar, soni) {
    if (this[tovar] !== undefined) {
      this[tovar] -= soni;
    } else {
      console.log(`Bunday mahsulot yo‘q: ${tovar}`);
    }
  }

  qabul(tovar, soni) {
    if (this[tovar] !== undefined) {
      this[tovar] += soni;
    } else {
      console.log(`Bunday mahsulot yo‘q: ${tovar}`);
    }
  }
}
const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

/*B-TASK

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

//First version
function countDigits(numberQuantity) {
  let count = 0;

  for (let i of numberQuantity) {
    if (i >= "0" && i <= "9") {
      count++;
    }
  }

  return count;
}
const count = countDigits("ad2a54y79wet0sfgb9");
console.log(count);

//Second version
function sort(text) {
  const result = text.split("");
  // console.log(result);
  const lastResult = result.filter((ele) => {
    return ele >= 0 && ele !== " ";
  });
  console.log(lastResult.length);
}
sort("ad2 a54f0       y79  w");
 */
/*TASK A

Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi

function countLetter(harf, soz) {
  const result = soz.split("");
  const lastResult = result.filter((i) => i === harf);
  console.log(
    `${soz} ning ichida ${harf} dan ${lastResult.length}ta miqdorda bor`
  );
}
countLetter("a", "Sarvarbek");
*/

//21. NodeJS event loop va Callback functionlarni o'rganamiz
const list = [
  "Be a good student", //0-20
  "Choose the right boss who can teach you and make many mistakes", //20-30
  "Work for yoursef. Start your own business", //30-40
  "Do what you are good at", //40-50
  "Invest the young generation", //50-60
  "Spend your time with grandchildren", //60-end
];

//Callback function and  Asychroous function
/*
Asynchronous: CALLBACK, ASYNC && PROMISE

callback      >   callback
async/await   >   then/catch || async/await
promise       >   then/catch || async/await
*/

//Callback function
{
  /*
  function maslahatByJack(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    //callback("ERROR nomi", Biz qaytarmoqchi bolgan data);
    else if (a <= 20) {
      setTimeout(function () {
        callback(null, list[0]);
      }, 2000);
    } else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
      setTimeout(function () {
        callback(null, list[5]);
      }, 5000);
    }
  }
  /* Shu callback functonni foydali tomini shu yerda,
  setTimeOut qatnashgan awerni ishga tushidi lekin natijasini kutib otirmasdan
  pastidagi boshqa functonni shga tushirdi, vaqti kelganidan song keyin TipByJack ishga tushdi

Yani NODE.JS quyidagicha ishlaydi=>   NODES.JS=> sync => async
birinchi sync lar keyin async lar  ishga tushadi 

  // single thread degani shu yerda namoyon
  console.log("Passed here 0");
  maslahatByJack(70, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
      console.log("TipByJack:", data);
    }
  });
  maslahatByJack(18, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
      console.log("TipByJack:", data);
    }
  });
  console.log("Passed here 1");

  // DEFINE
  function qoldiqliBolish(a, b, callback) {
    if (b === 0) {
      callback("Mahraj nolga teng", null); //,false....
    } else {
      callback(null, a % b); //,true...
    }
  }

  // CALL callback fuctionni oqilishi(yozilishi) call qismidan boshlanadi
  qoldiqliBolish(10, 3, (err, data) => {
    //,data1,data2...
    if (err) console.log("Error:", err);
    else {
      console.log("data:", data); // ,data1,data2... qilib qoshsa boladi
    }
  });
  */
}

//22. Asychroous function
{
  /*async function maslahatByJack(a) {
    if (typeof a !== "number") throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
      setTimeout(() => {
        resolve(list[5]);
      }, 2000); 
    }
   
  }*/
  // Promise function
  // promise da set intervalni bir marta log qiladi. Agarrda callback functionda bolsa qayta qayta ishga tushadi
  //Promise function ni ishlatsak, SetTimeout ni ishlatsak boladi, bunda await bilan call qilinganda
  //avval promise call qilingan function ishga tushadi, qolgan functionlar kutib turadi
  // async function maslahatByJack(a) {
  //   return new Promise((resolve, reject) => {
  //     if (typeof a !== "number") reject("insert a number");
  //     else if (a <= 20) resolve(list[0]);
  //     else if (a > 20 && a <= 30) resolve(list[1]);
  //     else if (a > 30 && a <= 40) resolve(list[2]);
  //     else if (a > 40 && a <= 50) resolve(list[3]);
  //     else if (a > 50 && a <= 60) resolve(list[4]);
  //     else {
  //    setInterval(() => {
  //         resolve(list[5]);
  //       }, 2000);
  //     }
  //   });
  // }
  //calling by then().catch()
  /*
synchronous functionlar ishga tushganidan keyin asychronous functionlar ishga tushishni boshlaydi
shuning uchun ham asychronous funtion single thread ni band qilmaydi
*/
  // console.log("Passed here 0");
  // maslahatByJack(95)
  //   .then((data) => {
  //     console.log("Jack says:", data);
  //   })
  //   .catch((err) => {
  //     console.log("ERROR:", err);
  //   });
  // console.log("Passed here 1");
  //Avval [1]ni keyin [2]ni... besin desak bir async yasab olamiz, kak maydoncha vazifasini bajaradi
  //CALL async/await
  // async function run() {
  //   try {
  //     // try {} catch () {} ni ishlatadigan bolsak loyihamizni crash bolishini oldini olgan bolamiz
  //     //run() ichida string call qilinib qolsa crash boladi, shu narsani oldini oladi bu try catch
  //     let javob = await maslahatByJack(20);
  //     console.log(javob);
  //     javob = await maslahatByJack(65);
  //     console.log(javob);
  //     javob = await maslahatByJack(41);
  //     console.log(javob);
  //   } catch (err) {
  //     console.log("Error:", err);
  //   }
  // }
  // run();
}

//23. MongoDB password:    d3zmLMbURQZLBHnJ
{
  /*
 Cloud databasedan foydalanamiz. Mongodb atlasdan foydalanamiz,
 loyihani qayerda run qilinsa ishlashi kerak. Local mashinaga instal qiladigan bolsam
 kompyuterimdan boshqa joyda ishlata olmayman

 MongoDB ning database clienti MongoDB compass
 SQL(MongoDB) => CLUSTER => DATABASE => TABLE => ROW => COLUMN
 NoSQL(MongoDB) => CLUSTER => DATABASE => COLLECTION => DOCUMENT => DATASET
 Cluster => Bolim
 Database => malum proyekga tegishli malumotlar bazasi
 Collection => databseni ichidagi malumot bolinmalari
 Document => collection ichidagi bitta document-_id document malumotlari
 dataset=> shu yerdagi bir qator malumot

 */
  //Server.js =>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  /*const http = require("http");
const mongodb = require("mongodb");
//  Database bilan connection qurish va CRUD operatsiyasini bajarishga kerak

let db;

const connectionString =
  "mongodb+srv://sarvar2511:d3zmLMbURQZLBHnJ@cluster0.cpy8hmv.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";
//qaysi databasega ulanay degan code.
mongodb.connect(
MongoDB 3 ta narsa qabul qiladi:
1. connectionString database biloan boglaydi 

  connectionString,
  { 2. qoshimcha optionlar
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  3. callback
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client; //=> bu aoo.js dagi client.db() bn connect qiladi
      vasivasi CRUD operatsiyasini bajarish mkonini beradi

      //Bu yerda dastlab MongoDB ga connection quramiz agarda connection bolmasa 
      //serverni ishga tushirib ovora qilmaymiz
      //console.log(client);// database connection object
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
*/
}

//CRUD => Create Read Update Delete
