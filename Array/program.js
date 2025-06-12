function abc(data){
    // return data.sort()
    return data.indexOf("5")
     
}
let data = ["8","9","5"]
// console.log(abc(data))
// console.log(typeof data[0])


function reverse(name){
    let res = name.split('').reverse().join('')
    return res+"d"
}
let nambe = "raman"
console.log(reverse(nambe))