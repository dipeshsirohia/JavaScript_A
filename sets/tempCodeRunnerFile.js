const items1 = ['apple', 'banana',  'watermelon', 'pineapple'];
 const items2 = ['apple', 'banana', 'orange', 'berry', 'mango'];
 let common = items1.filter((el)=>{
     if(items2.includes(el))
         return el
     

 })
 console.log(common)