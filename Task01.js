/**
 *
 * 1. Buat function untuk menghitung luas area lingkaran
 * adalah area = π * radius2 , dimana Π = 3.14159.
 *
 */

function getAreaCircle(radius) {
  //const phi = 3.14159;
  let areaCircle;

  if (radius >= 0) {
    areaCircle = Math.PI * Math.pow(radius, 2);
    return areaCircle;
  } else if (radius < 0) {
    return `radius -1 <= 0, try higher`;
  } else if (typeof radius != Number) {
    return `Inputan harus dalam angka`;
  }
}

console.log(getAreaCircle("-1")); //return radius -1 <= 0, try higher
console.log(getAreaCircle("a")); //return Inputan harus dalam angka
console.log(getAreaCircle(5)); //retun 78.53975

/**
 *
 * 2. Buat function untuk menghitung jarak antar
 * kota A dan B, jika diketahui rumus jarak : S = 1/2*a*t^2
 *
 */

function calculateDistance(a, t) {
  let S;

  if (a >= 0 && t >= 0) {
    S = (1 / 2) * a * Math.pow(t, 2);
    return `Jarak yang ditempuh adalah ${S} meter/s`;
  } else if (a < 0 || t < 0) {
    return `Accelaration or time must be >= 0`;
  } else if (typeof radius != Number) {
    return `input must an number`;
  }
}

console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50, 60)); //Jarak yang ditempuh adalah 90000 meter/s

/**
 *
 * 3. Buat function untuk konversi suhu
 *    dari Fareinheit ke Kelvin dengan rumus : Kelvin = (Fareinheit + 459.67)/1.8
 *
 */

function fareinheitToKelvin(Fareinheit) {
  let Kelvin;

  if (Fareinheit >= 0) {
    Kelvin = Math.round((Fareinheit + 459.67) / 1.8);
    return `Convert Fareinheit (${Fareinheit}) to Kelvin = ${Kelvin}`;
  } else {
    return `Fareinheit must an number`;
  }
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number

/**
 * 
 * 4. Buat function getSalesTax(price,tax) untuk menghitung pajak 
 *    dari total penjualan, dengan inputan paremeter :
            - price : total harga yang harus dibayar
            - tax : pajak dalam prosen
 * 
 */

function getSalesTax(harga, pajak) {
  let taxtax;

  if (harga >= 0 && pajak >= 0) {
    taxtax = harga + harga * (pajak / 100);
    return `\t
                      Total Sales         : Rp.${harga}
                      Pajak               : ${pajak / 100}
                      Total Harga + Pajak : Rp.${taxtax}`;
  } else if (typeof harga != Number) {
    return `Price harus dalam angka`;
  } else if (typeof harga == Number && typeof pajak == string) {
    return `Pajak harus dalam angka`;
  } else if (typeof harga == String && typeof pajak == String) {
    return `Price & Pajak harus dalam angka`;
  }
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**Contoh output dibawah
 * Total Sales : Rp.4500
 * Pajak : 0.5
 * TotalHarga+Pajak : Rp.4505
 */

/**
 *
 * 5. Buat function getSalesDiscount(price,tax,discount)
 *    untuk menghitung total belanja yang sudah ditambahkan diskon dan pajak.
 *
 */

function getSalesDiscount(harga, pajak, discount) {
  let disc, priceAfterDisc, taxPriceAfterDisc, totalPayment;

  if (harga >= 0 && pajak >= 0 && discount >= 0) {
    disc = harga * (discount / 100);
    priceAfterDisc = harga - disc;
    taxPriceAfterDisc = priceAfterDisc * (pajak / 100);
    totalPayment = priceAfterDisc + taxPriceAfterDisc;

    return `\t
      Total Sales        : Rp.${harga}
      Discount (${discount}%)      : Rp.${disc}
      PriceAfterDiscount : Rp.${priceAfterDisc}
      Pajak (${pajak}%)        : Rp.${taxPriceAfterDisc}
      ----------------------------------
      TotalPayment       : Rp.${totalPayment}
      `;
  } else if (typeof harga != Number) {
    return `Price harus dalam angka`;
  } else if (typeof pajak != Number) {
    return `Pajak harus dalam angka`;
  } else if (
    typeof harga != Number &&
    typeof pajak != Number &&
    typeof discount != Number
  ) {
    return `Price, Tax & Discount harus dalam angka`;
  }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angka
console.log(getSalesDiscount(4500, 10, 5));
/**
   Total Sales : Rp.4500
   Discount (5%) : Rp.225
   PriceAfterDiscount : Rp.4275
   Pajak (10%) : Rp.427.5
   ----------------------------------
   TotalPayment : Rp.4702.5
*/

/**
 *
 * 6. Buat function getCordinat(x1,y1,x2,y2) untuk
 * menghitung jarak kordinat dalam cartesius, jika
 * diketahui rumus kordinat : 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 *
 */

function getCordinat(x1, y1, x2, y2) {
  let d;

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return `input kordinat dalam angka`;
  } else {
    d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return `${d}`;
  }
}

console.log(getCordinat(3, 4, -4, -5)); //9
console.log(getCordinat("1", "2", "-1", "-2")); //1
console.log(getCordinat("x", "2", "-y", "-2")); //input kordinat dalam angka
console.log(getCordinat(3.2, 4.5, -4.4, -5)); //13.695801445917125

/**
 * 
 * 7. Buat function sumDigit(n) untuk menghitung jumlah angka yang diinput. 
 * Contoh jika angka yang diinput adalah 1234 maka output yang dihasilkan adalah 1+2+3+4 = 10.

 */

function sumDigit(num) {
  let sum;
  const listSum = String(num).split("");

  if (num < 10000) {
    sum = listSum[0] + listSum[1] + listSum[2] + listSum[3];
    return sum;
  } else if (num >= 10000) {
    return `${num} harus lebih kecil dari 10000`;
  } else {
    return `${num} is not number, try again...`;
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...

/**
 * 
 * 8. Buat function elapsedTime(seconds) untuk menkoversi jumlah detik ke hari, jam, menit dan 
detik. Contoh jika inputan adalah 700005 detik, maka output nya : 8 hari 2 jam 26 menit 45 detik

 */

function getPeriodTimes(seconds) {
  let hari, jam, menit, detik, sisa;

  if (isNaN(seconds)) {
    return `${seconds} is not number`;
  } else {
    hari = parseInt(seconds / (3600 * 24));
    sisa = seconds % (3600 * 24);

    jam = parseInt(sisa / 3600);
    sisa = sisa % 3600;

    menit = parseInt(sisa / 60);
    detik = sisa % 60;

    return `${hari} hari  ${jam} jam ${menit} menit ${detik} detik`;
  }
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik

/**
 * 
 * 9. Buat function getRandomPassword(s) untuk generate karakter random password.

 */

function getRandomPassword(s) {
  if (s) {
    const randpass = s;
    const random = Math.random() * 10;

    const password =
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length) +
      randpass.charAt(Math.random() * randpass.length);

    return password;
  } else if (s.length < 6) {
    return `Length must more than 6`;
  } else {
    return `Value must be character`;
  }
}

console.log(getRandomPassword("123465")); //Value must be character
console.log(getRandomPassword(3422)); //Value must be character
console.log(getRandomPassword("code")); //Length must more than 6
console.log(getRandomPassword("codeid")); //doed3726

/**
 * 
 *10.Buat function convertToRupiah(value, currencyType) untuk konversi mata uang dollar, US dan 
euro ke dalam rupiah.
 */

function convertToRupiah(value, currencyType) {
  let curr;

  if (currencyType == "yen") {
    curr = (value / 1000) * 130120;
    return `Rp.${curr}`;
  } else if (currencyType == "usd") {
    curr = (value / 100) * 1438250;
    return `Rp.${curr}`;
  } else if (currencyType == "euro") {
    curr = (value / 100) * 1600000;
    return `Rp.${curr}`;
  } else {
    return "no match type currency";
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency

/**
 * 
 *11.Buat function getHeavier(w1,w2,w3) untuk hitung siapa yang paling berat dengan inputan 3 
angka. Tidak diperbolehkan menggunakan function max().
 */

function getHeavier(w1, w2, w3) {
  if (w1 > w2) {
    if (w1 > w3) {
      return w1;
    }
  } else if (w2 > w1) {
    if (w2 > w3) {
      return w2;
    }
  } else if (w3 > w1) {
    if (w3 > w2) {
      return w3;
    }
  }
}

console.log(getHeavier(12, 45, 70)); //70

/**
 * 
 * 12. Buat function getDays(month,year) untuk menghasilkan output total hari dalam bulan dan tahun 
tertentu. 
 */

function getDays(month, year) {
  if (typeof month != number) {
    return "inputan bulan harus dalam integer";
  } else if (typeof year != number) {
    return "inputan tahun harus dalam integer";
  } else if (typeof year != number && typeof month != number) {
    return "inputan bulan & tahun harus dalam integer";
  } else if (month == 2) {
    return "This month has 29 days";
  } else if (year == 2000) {
    return " 2000 adalah tahun kabisat";
  }
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari

/**
 * 13. Buat function isPalindrome(angka) untuk men-cek apakah 4digit inputan angka palindrome atau 
tidak, Hint : charAt.

 * 
 */

function isPalindrome(angka) {
  const angst = String(angka);

  if (isNaN(angst)){
    return `${angka} is not an number`;

  } else if (angst.charAt(0)==angst.charAt(3) && angst.charAt(1)==angst.charAt(2)){
    return `${angka} is palindrome`;
  } else {
    return `${angka} is not palindrome`;
  }

}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome



/**
 * 
 * 14.Buat function getProsentase(income1,income2) untuk menghitung prosentase income1 dan 
income2.
 */

function getProsentase(income1,income2) {
  let proc;

  if ( isNaN(income1) || isNaN(income2)) {
    return `${income1} or ${income2} harus dalam angka`;
    
  } else if (income2 > income1) {
    proc = ((income2 - income1) / income1)* 100;
    return `Total kenaikan income ${Math.round(proc)}%`;
  } else if (income1 > income2) {
    proc = ((income2 - income1) / income1) * 100;
    return `Total penurunan income ${Math.round(proc)}%`;
  }
  
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%




/**
 * 15.Buat function untuk menghitung totalGaji(gaji1,gaji2,gaji3) yang harus dibayarkan ke 3 karyawan 
nya. Dan tentukan juga gaji + pajak tiap karyawan.

 * 
 */

const totalGaji = (gaji1, gaji2, gaji3) => {
  const pajak1 = gaji1 * 0.02;
  const pajak2 = gaji2 * 0.05;
  const pajak3 = gaji3 * 0.1;
  const total = gaji1 + pajak1 + (gaji2 + pajak2) + (gaji3 + pajak3);

  return `\t
  Total gaji yang harus dibayar : 
 Emp1 : Rp.${gaji1} + Pajak(2%)=Rp.${gaji1 + pajak1}
 Emp1 : Rp.${gaji2} + Pajak(5%)=Rp.${gaji2 + pajak2}
 Emp1 : Rp.${gaji3} + Pajak(10%)=Rp.${gaji3 + pajak3}
 Total : Rp.${total}
`;
};

console.log(totalGaji(500, 2000, 12000));
/**Total gaji yang harus dibayar : 
 Emp1 : Rp.500 + Pajak(2%)=Rp.510
 Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
 Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
 Total : Rp.15810*/
