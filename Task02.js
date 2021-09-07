// 1

function strToDate(mmddyyyy) {
  mdy = mmddyyyy.split("/");

  const resdate = new Date(mdy[2] + "-" + mdy[0] + "-" + mdy[1] + "T00:00:00Z");
  console.log(`${resdate}`);
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date

// 2

function tagihanKomik(tglPinjam, tglKembali, komik) {
  const tPj = tglPinjam.split("-");
  const tKm = tglKembali.split("-");

  const tanggPj = new Date(tPj[2], tPj[0], tPj[1]);
  const tanggKm = new Date(tKm[2], tKm[0], tKm[1]);

  const selisih = tanggKm - tanggPj;

  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  let countDay = selisih / milliSecondPerDay;

  if (countDay >= 0) {
    return `\t
        Total Hari = ${countDay}
        Total Komik = ${komik} x 2500
        ------------------------
        Total Tagihan =Rp.${countDay * komik * 2500}
        
        `;
  }
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021", 4)); //Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021", 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021", 4));
/**
Total Hari = 3
Total Komik = 4 x 2500
------------------------
Total Tagihan =Rp.30000
*/

// 3

function payment(tglBayar, tglJatuhTmep, cicil) {
  const angsuran = 3500000;

  const tBy = tglBayar.split("/");
  const tJT = tglJatuhTmep.split("/");

  const tanggBay = new Date(tBy[2], tBy[0], tBy[1]);
  const tanggJaTe = new Date(tJT[2], tJT[0], tJT[1]);

  const selisih = tanggJaTe - tanggBay;
  const milliSecondPerDay = 1000 * 60 * 60 * 24;
  let countDay = selisih / milliSecondPerDay;

  const denda = angsuran * (2 / 1000) + countDay;

  if (countDay == 0 && cicil == angsuran) {
    return `\t
            --------------------------
            Tanggal Bayar : ${tglBayar}
            Jatuh Tempo : ${tglJatuhTmep}
            --------------------------
            Tagihan bulan ${tBy[0]},${tBy[2]} = Rp.${cicil}
            Denda = Rp.0 (terlambat ${countDay} hari)
            Total = Rp.${cicil} (lunas)
            --------------------------
            Kwitansi ini sebagai alat bukti pembayaran
            
            `;
  } else if (cicil == angsuran && countDay <= 7) {
    return `Tagihan bulan ${tBy[0]} belum tersedia`;
  } else if (cicil < 3500000 && countDay <= 7) {
    return `Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran`;
  } else if (countDay > 7) {
    return `\t
            --------------------------
            Tanggal Bayar : ${tglBayar}
            Jatuh Tempo : ${tglJatuhTmep}
            --------------------------
            Tagihan bulan ${tBy[0]},${tBy[2]} = Rp.${cicil}
            Denda = Rp.${denda} (terlambat ${countDay} hari)
            Total = Rp.${cicil + denda} (lunas)
            --------------------------
            Kwitansi ini sebagai alat bukti pembayaran
            
            `;
  }
}

console.log(payment("09/30/2021", "09/27/2021", 50000));
//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021", "09/27/2021", 3500000));
//Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021", "09/27/2021", 3500000));

// 4

function howManyKabisat(yearA, yearB) {
  const kabisat = [];
  for (let i = yearA; i <= yearB; i++) {
    if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) {
      kabisat.push(i);
    }
  }
  return `Total tahun kabisat : ${kabisat.length} tahun = ${kabisat}`;
}

console.log(howManyKabisat(1997, 2021));
//Total tahun kabisat : 6 tahun = 2000 2004 2008 2012 2016 2020

// 5

let p = "";
for (let i = 6; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    p = i + " " + p;
  }
  return p + "\t";
}

let q = "";
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < i; j++) {
    q = q + " " + (5 - i);
  }
  return q + "\t";
}

// 6

function showPrimeNumber(n) {
  let prime = 0,
    count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i)) {
      prime = count % 5 === 0 ? prime + "\n " + i : prime + "\t" + i;
      count++;
    }
  }
  return prime;
}

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(showPrimeNumber(100));

// 7

function isCharsUnique(phrase) {
  const phr = phrase.split("");
  for (let i = 0; i < phr.length; i++) {
    for (let j = 0; j < phr.length; j++) {
      if (phr[i] != phr[j]) {
        return true;
      } else {
        return `false, karena a duplikat`;
      }
    }
  }
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false, karena a duplikat

// 8

function isPalindrome(tence) {
  const tenc = tence.toLowerCase().split("");
  for (let i = 0; i < tenc.length / 2; i++) {
    if (tenc[i] !== tenc[tenc.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
  //return true;
}

console.log(isPalindrome("kasur ini rUsak")); //true

// 9

function maxWordLength(value) {
  const arr = value.split(" ");

  let maxValue = 0,
    result;

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i].split("");
    if (maxValue < word.length) {
      maxValue = word.length;
      result = arr[i];
    }
  }

  return result;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp

// 10

function findSum(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == num) {
        return `${array[i]} & ${array[j]}, ${array[i]} + ${array[j]} = ${num}`;
      }
    }
  }
}

console.log(findSum([1, 2, 3, 4, 5], 9)); // 4 & 5, 4+5 = 9

// 11

function isPermute(word1, word2) {
  w1 = word1.split("");
  w2 = word2.split("");

  if (w1.length === w2.length) {
    for (let i = 0; i < w1.length; i++) {
      for (let j = 0; j < w2.length; j++) {
        if (w1[i] == w2[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

console.log(isPermute("aba", "aab")); //true;
console.log(isPermute("aba", "aaba")); //false;

// 12

function isArraysEqual(array1, array2) {
  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
