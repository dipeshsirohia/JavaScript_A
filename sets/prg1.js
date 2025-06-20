// 1.Remove Duplicates from an Array
const numbers = [1, 2, 2, 3, 4, 4, 5];
let uni = new Set(numbers)
let arr = [...uni]
console.log(arr)

// 2. Remove Duplicate Characters from a String
 const str = "programming";
let un =[ ...new Set(str)]
let r = un.join('')
console.log(r)
// 3. Count Unique Elements in an Array
 const items = ['apple', 'banana', 'apple', 'orange', 'banana'];
 let unSt = [...new Set(items)]
 console.log(unSt.length)

// 4. Unique Elements in an Array
 const items = ['apple', 'banana', 'apple', 'orange', 'banana'];
 let uqI = [...new Set(items)]
 console.log(uqI)

// 5. Find Common Elements Between Two Arrays
 const items1 = ['apple', 'banana',  'watermelon', 'pineapple'];
 const items2 = ['apple', 'banana', 'orange', 'berry', 'mango'];
 let common = items1.filter((el)=>{
     if(items2.includes(el))
         return el
     

 })
 console.log(common)
// 6. Use Set to Filter Unique Words from a Sentence
const sentence = "this is a test this is only a test";
let y = [... new Set(sentence)]
console.log(y)