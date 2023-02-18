// Big O measures how efficient code is, Big O measures Time Complexity and Space Complexity. Time Complexity isnt measures by time, it is measures by the number of operations. Space Complexity is the amount of memory that is being used in the code

// When dealing with this notation you will deal with 3 different greek letters: Omega, Theta, & Omicron (Big O) the one we are going to see most often. Best case scenario is represented with Omega, Average case is represented with Theta, and Worst case is represented with Omicron or Big O

// When we measure Big O we are always measuring Worst case



// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
// }

// logItems(10)



// this is an O(n) operation. we passed the number "n" and thus is ran "n" times exactly

// O(n) on the graph is always going to be a straight line, it is proportional, the number of operations is going to be proportional to whatever "n" is



// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
//     for (let j = 0; j < n; j++) {
//         console.log(j);
//     }
// }

// logItems(3)



// we get 3 outputs from each loop, meaning that the code ran n + n times or 2n. but we do not say O(2n)... we always drop the constants and keep it as O(n) Drop Constants is the rule of O(n)



// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }
// }

// logItems(10)



// here we have a nested for loop, this had 100 outputs, n * n or O(n^2) even if we were to add a 3rd nested for loop and it would end up being n^3 we would still write it as O(n^2) the exponent does not matter and is simplified. O(n) is more efficient than O(n^2)



// function logItems(n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }

//     for (let k = 0; k < n; k++) {
//         console.log(k);
//     }
// }

// logItems(10)



// here we have a nested for loop than runs on its own O(n^2) followed by a second for loop that runs O(n). but the time complexity will not be O(n^2 + n). The n^2 is dominant to the n, we Drop Non-Dominants with Big O. So this code runs O(n^2)



// function addItems(n) {
//     return n + n
// }



// this code is O(1) also known as "constant time" because the number of operations here is 1 (the addition) even if there were a 3rd addition statement the answer does not become O(2) we simplify is to O(1) always, this is the most efficient Big O notation




// In order to use O(log n) you have to have sorted data. Divide and Conqurer is when you take an array and split it into half looking for an item, then split it in half again, and again, until you can get down to just 1 item




// When it comes to BigO of Arrays .push adds a new item to the end of the array, and .pop removes the item at the end of thr array. Both of these operations are O(1) because we do not have to re-index any items in the array.

// .shift and .unshift makes changes to an array that forces the other items in the array to change their index number. these operations are O(n) where "n" is the number of items in the array

// .splice adds a new item in the array to a certain position that we want, and we can decide what we want to be added into the array too, this also causes some other items in the array to re-index which is also O(n)

// Arrays are a great data structure for accessing items by index, but if youre going to be adding and removing items from the beginning/middle maybe Arrays arent the best