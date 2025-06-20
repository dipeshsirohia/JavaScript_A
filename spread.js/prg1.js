// 1. Clone the Array
const original = [1, 2, 3];
const copy = [...original]
console.log(copy)

// 2. Merge Two Arrays
const fruits = ['apple', 'banana'];
const berries = ['strawberry', 'blueberry'];
const mergea = [...fruits,...berries]
console.log(mergea)

// 3. Add the number 0 at the beginning and 4 at the end of this array using the spread operator:
const middle = [1, 2, 3];
const fullArray = [0,...middle,4]
console.log(fullArray)
// Write a function sum(a, b, c) and use the spread operator to pass the values from:
const numbers = [10, 20, 30];
function sum(a,b,c){
    let s=0
    for(it of numbers){
        s = s+it
    }
    console.log(s)
}
sum(...numbers)
// 5. Clone an Object
const user = { name: 'Alice', age: 25 };
const obj = {...user}
console.log(obj)
// 6. Merge the following two objects using the spread operator:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merge = {...obj1,...obj2}
console.log(merge)

// 7. Add a New Property While Copying an Object. Add a new property age: 30
const person = { name: 'Bob' };
const newPerson = {...person,age:30}
console.log(newPerson)

// Override a Property in an Object key
// Create a new config object that changes the layout to 'list'.
const config = { theme: 'dark', layout: 'grid' };
const {layout,...rest} = config
console.log(config)
const newCO = {list:layout,...rest }
console.log(newCO)

// 9. Override a Property in an Object value
// Create a new config object that changes the dark to 'light'.
const config1 = { theme: 'dark', layout: 'grid' };
const change = {...config1,theme:'light'}
console.log(change)