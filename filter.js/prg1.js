const numbers = [1,2,3,4,5,6];
const result  = numbers.filter((item,index)=>{
    console.log('>>>>',item%2===0)
    if(item%2==0){
        console.log('item : ',item)
    }
})

const res = numbers.filter(abc => abc%2 === 0)

console.log(res)