/********************
Use the following array to complete tasks 1-3
*********************/
let numbers = [ 1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6 ];



/*
1. Return the 4th element in the "numbers" array */
function getFourthNum (){
    // Your answer here:
    return numbers[3]
}

console.log(getFourthNum())

/*
2. Iterate over the "numbers" array. Push any numbers less than 10 onto "smallNums". Return "smallNums". */

function smallNums(){
  let tinynums = []
  for (let i = 0; i < numbers.length; i++) {
    let theCurrentNumber = numbers[i]
    if (theCurrentNumber < 10) {
      tinynums.push(theCurrentNumber)
    }
  }

  return tinynums
}

console.log(smallNums())





/*
3. Add 12, 99, and 101 (in that order) to the end of the "numbers" array. Return the "numbers" array.
*/
function addNums(){
  numbers.push(12)
  numbers.push(99)
  numbers.push(101)
    // Your answer here:
    return numbers
}

// console.log(addNums())


/********************
Use the following object to complete tasks 4-6
*********************/

let film = {
    title : "Seven Samurai",
    director : "Akira Kurosawa",
    released : 1956,
    runtime : 207,
    budget : 2000000,
    actors : [ "Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima" ],
};


/*
4. Add a property "boxoffice" with a value of 269061 to the "film" object. Return "film".
*/
function addBoxOffice(){
  film.boxoffice = 269061
    // Your answer here:
    return film
}

console.log(addBoxOffice());

/*
5. Add the name "Yukiko Shimazaki" to the "actors" array. Return "film";
*/
function addActor(){
    film.actors.push("Yukiko Shimazaki");
    return film
}


/*
6. Now that you've added a "boxoffice" property, subtract "budget" from "boxoffice" and return the difference. This number is the amount lost by the studio in making the film. Return the loss.
*/
function getLosses(){
    // Your answer here:
    let loss = film.boxoffice - film.budget
    return loss
}


/*
7. Iterate over "letterVals" and "numberVals". link (things) together in a chain or series. the values from the two arrays and store the new values in the "vals" array. Return "vals".

Your function should return [ "v5", "x67", "r34", "f456", "p78" ];
*/

let numberVals = [ 5, 67, 34, 456, 78 ];
let letterVals = [ "v", "x", "r", "f", "p" ];

function interleave(){
  let mix = []
   for (let i = 0; i < 5; i++ ){
     let random = letterVals[ i ] + numberVals[ i ]
     mix.push(random)}
     return mix


    // Your answer here:
}









/*
8. Iterate over the "first" and "second" arrays. Compare the values for both arrays. If the arrays values are the same, then store that value in the "same" array. Return "same".
*/

let first = [ "blink", "stand", "glasses", "chair", "numinous", "adjacent", "bracelet", "hand" ];
let second = [ "think", "stand", "cheese", "break", "numinous", "mouse", "close", "toe" ];

function union(){
    let same = []
    // Your answer here:
       for (let i = 0; i < 7; i++ ){
         let same2 = first[ i ] === second[ i ]
         if (same2 === true){
         same.push(first[i])}
       }
         return same
}
console.log(union())
