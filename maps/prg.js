// let arr = [1,2,3]
// let twice = arr.map(el=>el*2)
// console.log(twice)
// // 1.iterate on array
 const fruits = ['apple', 'banana', 'mango'];
 fruits.map((el)=>{
    console.log(el)
 })
// // 2.Double values
 const arr = [1, 2, 3];
 let doubleArr = arr.map((el)=>{
    return el*2
 })
 console.log(doubleArr)
// // 3.Convert to uppercase
const pets = ['cat', 'dog', 'fish'];
let UpPets = pets.map((el)=>{
    return el.toUpperCase()
}) 
console.log(UpPets)
// // 4.Get string lengths
const fruits = ['apple', 'banana', 'kiwi'];
let Lenfruits = fruits.map((el)=>{
    return el.length
})
console.log(Lenfruits)
// // 5.Add 5 to each number
const nums = [10, 20, 30];
let numss = nums.map((el)=>{
    return el+5
})
console.log(numss)

// // 6.Extract names:
//  const users = [{name: 'John'}, {name: 'Jane'}, {name: 'Jake'}];
//   users.map((el,idx)=>{
//     console.log(idx,"name : ",el.name)
//   }) 
// // 7.Multiply by index
const arr = [1, 2, 3];
let mul = arr.map((el,idx)=>{
    return el*idx
})
console.log(mul)
// // 8. Add prefix "Item: "
//  const items = ['book', 'pen', 'eraser'];
// items.map((el)=>{
//     console.log(`Item : ${el} `)
// })
// // 9. Replace odd numbers with 0
// const numbers = [1, 2, 3, 4];
// let oddi = numbers.map((el)=>{
//     if(el%2!=0){
//         el=0
//     }
//     return el
// })


// // 10. Print numbers 1–10, but skip number 5
//  const r = [1,2,3,4,5,6,7,8,9,10 ]
//  r.map((el)=>{
//     if(el==5){
        
//     }
//     else{
//  console.log(el)
//     }
   

//  })

// const apidata = [
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },
//   {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
//   {
//     "id": 3,
//     "title": "Mens Cotton Jacket",
//     "price": 55.99,
//     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 500
//     }
//   },
//   {
//     "id": 4,
//     "title": "Mens Casual Slim Fit",
//     "price": 15.99,
//     "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     "rating": {
//       "rate": 2.1,
//       "count": 430
//     }
//   },]
  
//   apidata.map((el)=>{
//     console.log(el.id)
//     console.log(el.title)
//     console.log(el.price)
//     console.log(el.description)
//     console.log(el.category)
//     console.log(el.image)
//     console.log("Rating")
//     console.log(el.rating.rate)
//     console.log(el.rating.count)
//     console.log("=======================================")
//   })

//   console.log(oddi)

