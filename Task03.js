// 1

function countValley(string) {
  let nU = 0,
    nD = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "U" && string[i + 1] === "D" && string[i + 2] === "D") {
      nU++;
    } else if (
      string[i] === "D" &&
      string[i + 1] === "D" &&
      string[i + 2] === "U"
    ) {
      nD++;
    }

    if (nU > nD) {
      if (nD > 0) {
        return `Output : ${nU} gunung dan ${nD} lembah`;
      } else {
        return `Output : ${nU} gunung`;
      }
    } else if (nU < nD) {
      if (nU > 0) {
        return `Output : ${nD} lembah dan ${nU} gunung  `;
      } else {
        return `Output : ${nD} lembah`;
      }
    }
  }
}

console.log(countValley("UDDDUDUU"));

//Output : 1 gunung

// 2

function range(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function range(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random());
  }
  return arr; //range(1,num);
}

console.log(range(9)); //[1,2,3,4,5,6,7,8,9]
console.log(range(5, 9)); //[5,6,7,8]

// 3

let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

//a
fruits.push("Anggur", "Banana", "Sirsak");

//b
fruits.pop();

//c
fruits.splice(fruits.indexOf("Jambu"), 1);

//d
fruits.splice(2, 3);

//e
fruits.splice(2, 0, "Rambutan", "Bengkuang");

//f
fruits.splice(4, 1, "Nangka");

let sayur = ["Jambu", "Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

//g
const vege = fruits.concat(sayur);

//h
vege.reverse();

// j
function switchIndex(array, word1, word2) {
  //array.splice(array.indexOf(word1),1,"    ");
  array.splice(0, 1, word1);
  array.push(word2);

  return array;
}

//console.log(vege);
//console.log(fruits);
console.log(switchIndex(vege, "TOMAT", "JERUK"));

// 4

dataCsv =
  "LG, Asus 5432, Mix For Youtuber, Bluetooth Adapter, Solo Leveling Webtoon, Panasoni Air Conditioner, Karaoke Bazooka, PowerBank 24 Hours, Backpack of Holding, Game Box 5, Universal Gadget Charger USB, Squirming Tentacle USB, Fishquarium, Intel Processor 8 core, SpaceBarKeyboardOrganizer & USB, Hub Pop USB, Pet Rock, Powerstation 5 Dual Heated, Travel Mug Crosley, Collegiate Portable USB Turntable, Hoodie, AK-47";

let products = dataCsv.split(",");
//console.log(products);

// 4a

function filterProduct(array, hrf) {
  let reslt = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] === hrf) {
      reslt.push(array[i]);
    }
  }
  return reslt;
}

//console.log(filterProduct(products, "A"));
//console.log(filterProduct(products, "S"));

/**  Output : 
['Asus', 'AK-47']
[SpaceBarKeyboardOrganizer'] */

// 4b
products.sort();

for (let i = 0; i < 26; i++) {
  console.log(`==== ${products[i][1]} ====`);
  for (let j = 0; j < 26; j++) {
    return filterProduct(products, products[i][1]) + "\n";
  }
  return "\n";
}

// 5

function maxNumber(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const numbers = [2, 42, 5, 304, 1, 13];
//console.log(`output ${maxNumber(numbers)}`); // output 304

// method Math.max() dengan dot separator pada paramter array (...)
function max(array) {
  let result = Math.max(...array);
  return result;
}

console.log(`output ${max(numbers)}`); // output 304

// 6

function citiesSlice(array, city) {
  const indx = array.indexOf(city);
  if (city === array[indx]) {
    array.splice(indx, 1);
  }
  return array;
}

const cities = [
  "merak",
  "tangerang",
  "jakarta",
  "bogor",
  "cianjur",
  "cimahi",
  "bandung",
];

//console.log(citiesSlice(cities,"bogor")); //['merak', 'tangerang', 'jakarta', 'cianjur', 'cimahi', 'bandung']
console.log(citiesSlice(cities, "jakarta")); //['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung’]

// 7

function matchingDate(datess, year) {
  dateRes = datess.find((dt) => dt.getFullYear() === year);

  return `${dateRes}`;
}

const dates = [
  new Date(2021, 10, 20),
  new Date(2019, 3, 12),
  new Date(2020, 5, 23),
  new Date(2022, 3, 18),
];
console.log(matchingDate(dates, 2020)); //Sun Apr 12 2020 00:00:00 GMT+0700 (Western Indonesia Time)
