//Use an Array to Store a Collection of Data

//one-dimensional array
let simpleArray=['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);



//multi-dimensional array
let complexArray =[
    [
        {
            one:1,
            two:2
        },
        {
            three:3,
            four:4
        }
    ],
    [
        {
            a:'a',
            b:'b'
        },
        {
            c:'c',
            d:"d"
        }
    ]
];
console.log(complexArray.length);

let yourArray =[ 
    'this','array', 'has', 5, true, undefined
  ];


  //accessing an array's contents using bracket notation
  let ourArray = ["a", "b", "c"];
  console.log(ourArray[1])

  let myArray = ["a", "b", "c", "d"];
  myArray[1]="bee"
console.log(myArray);


//Add Items to an Array with push() and unshift()
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals) //romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree); //romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));




 // Remove Items from an Array with pop() and shift()
 let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop(); // greetings would have the value ['whats up?', 'hello'].
greetings.shift() //greetings would have the value ['hello'].

function popShift(arr) {
    let popped= arr.pop()
    let shifted=arr.shift()
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

  //Remove Items Using splice()
  let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2); //array would have the value ['today', 'was', 'great'].


//Add Items Using splice()
function htmlColorNames(arr) {
    // Only change code below this line
  const startIndex=0;
  const amountToDelete=2;
  arr.splice(startIndex, amountToDelete,'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


  //Copy Array Items Using slice()
  let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3); //todaysWeather would have the value ['snow', 'sleet']


//Copy an Array with the Spread Operator

//Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
//thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence= ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

  //check for the presence oif ab element wuth indexOf()
  function quickCheck(arr, elem) {
    // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


function greaterThanTen(arr){
    let newArr=[];
    for (let i=0; i<arr.length; i++){
        if(arr[i] >10){
            newArr.push(arr[i]);
        }
  
    }
    return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);



function  filteredArray(arr,elem){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if (arr[i].indexOf(elem) == -1){
            newArr.push(arr[i])
        }
    }

}

//complex arrays
