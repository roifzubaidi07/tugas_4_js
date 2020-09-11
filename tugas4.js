var a = 180;
var b = 185;
var c = 172;

if (a > b) {
  if (a > c) {
    tertinggi = a;
    if (b > c) {
      sedang = b;
      terpendek = c;
    } else {
      sedang = c;
      terpendek = b;
    }
  } else {
    tertinggi = c;
    sedang = a;
    terpendek = b;
  }
} else {
  if (b > c) {
    tertinggi = b;
    if (c > a) {
      sedang = c;
      terpendek = a;
    } else {
      sedang = a;
      terpendek = c;
    }
  } else {
    tertinggi = c;
    sedang = b;
    terpendek = a;
  }
}
console.log("Tertinggi : " + tertinggi);
console.log("Kedua : " + sedang);
console.log("Terpendek : " + terpendek);
