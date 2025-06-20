const st = ["cat","graps","cow","mango"]
let res = st.filter((el)=>el.length>4)
console.log(res)

const users = [
    {name:'Alice',age:17},
    {name:'Bob',age:22},
    {name:'Charlie',age:16},
    {name:'Dave',age:19},
]

let result=users.filter(el=>el.age>18)
console.log(result)

// remove flasy

const mixed = [0,"hello",false,42,"",null,"world"]
let r = mixed.filter(Boolean)
console.log(r)

// write unique

const numbers = [1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,7,8,9,90,98]
let rw = numbers.filter((item,index,arr)=>{
     return  arr.indexOf(item)===index
})
console.log(rw)

let u = new Set(numbers)
console.log(u)