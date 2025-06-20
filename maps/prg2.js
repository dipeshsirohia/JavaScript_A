// The program is to add age to the object

let students = [
    {name:"dipesh"},
    {name:"mohit"},
    {name:"manish"}
]

let reStudents = students.map((el)=>{
    el.age=20;
    return el
})

// console.log(reStudents)


 let ages = [19,23,27]
let agedStudents = students.map((el,idx)=>{
   
    el.age = ages[idx]
    return el
})

// console.log(agedStudents)


let countries =['india','japan','china']
let c=countries.map((el)=>{
    return {country:el}
})
console.log(c)

let arr = [1,2,3,4,5,6,7,8,9,10]
let ass = arr.map((el)=>{
    if(el%2==0)
        return el*2
    else{
        return el*5
    }
})
let newarr = arr.map(el=>el%2==0?el*2:el*5)
console.log(newarr)

let arra = [499,899,199]
let data = arra.map((el,idx)=>{
   return {id:idx,price:el,available:true}
})
console.log(data)

let arru = ['rEd shirt','black shirt','orange shirt']
let redas = arru.map((el,idx)=>{
      return {id:idx,product:el.toLowerCase().replace(' ','-')}
})
console.log(redas)

let arro = [{name:'dipesh',status:'active'},{name:'prajjal',status:'inactive'},{name:'jojo',status:'active'}]
let aee = arro.map((el)=>{
el.status=='active'?el.status='inactive':el.status='active'
return el})
console.log(aee)
