console.log("TRAIN AREA");
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
//Callback function
{
  //   function maslahatByJack(a, callback) {
  //     if (typeof a !== "number") callback("insert a number", null);
  //     //callback("ERROR nomi", Biz qaytarmoqchi bolgan data);
  //     else if (a <= 20) {
  //       setTimeout(function () {
  //         callback(null, list[0]);
  //       }, 2000);
  //     } else if (a > 20 && a <= 30) callback(null, list[1]);
  //     else if (a > 30 && a <= 40) callback(null, list[2]);
  //     else if (a > 40 && a <= 50) callback(null, list[3]);
  //     else if (a > 50 && a <= 60) callback(null, list[4]);
  //     else {
  //       setTimeout(function () {
  //         callback(null, list[5]);
  //       }, 5000);
  //     }
  //   }
  //   /* Shu callback functonni foydali tomini shu yerda,
  // setTimeOut qatnashgan awerni ishga tushidi lekin natijasini kutib otirmasdan
  // pastidagi boshqa functonni shga tushirdi, vaqti kelganidan song keyin TipByJack ishga tushdi
  // single thread degani shu yerda namoyon*/
  //   console.log("Passed here 0");
  //   maslahatByJack(70, (err, data) => {
  //     if (err) console.log("ERROR:", err);
  //     else {
  //       console.log("TipByJack:", data);
  //     }
  //   });
  //   maslahatByJack(18, (err, data) => {
  //     if (err) console.log("ERROR:", err);
  //     else {
  //       console.log("TipByJack:", data);
  //     }
  //   });
  //   console.log("Passed here 1");
}

//22. Asychroous function
{
  /*
  async function maslahatByJack(a) {
    if (typeof a !== "number") throw new Error("insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(list[5]);
        }, 2000); // promise da set intervalni bir marta log qiladi. Agarrda callback functionda bolsa qayta qayta isga tushadi
      });
    } /*Promise function ni ishlatsak, SetTimeout ni ishlatsak boladi, bunda await bilan call qilinganda
  avval promise call qilingan function ishga tushadi, qolgan functionlar kutib turadi
    */
  //}
  //calling by then().catch()
  /*
synchronous functionlar ishga tushganidan keyin asychronous functionlar ishga tushishni boshlaydi
shunign uchun ham asychronous funtion single thread ni band qilmaydi
*/
  /*console.log("Passed here 0");
  maslahatByJack(25)
    .then((data) => {
      console.log("Jack says:", data);
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
  console.log("Passed here 1");
  /*Avval [1]ni keyin [2]ni... besin desak bir async yasab olamiz, kak maydoncha vazifasini bajaradi */
  //async/await
  /*async function run() {
    let javob = await maslahatByJack(20);
    console.log(javob);
    javob = await maslahatByJack(65);
    console.log(javob);
    javob = await maslahatByJack(41);
    console.log(javob);
  }
  run();
}
//23. MongoDB password:    d3zmLMbURQZLBHnJ
/**
 Cloud databasedan foydalanamiz. Mongodb atlasdan foydalanamiz,
 lyihani qayerda run qilinsa ishlashi kerak. Local mashinaga instal qiladigan bolsam
 kompyuterimdan oshqa joyda ishlata olmayman

 MongoDB da cluster deyiladi. 
 ichidagi birlik database deyiladi
 database ichidagi birlik collection deyiladi
 collection ichidagi birlik document lardan iborat

 MongoDB ning database clienti MongoDB compass
 */
}
