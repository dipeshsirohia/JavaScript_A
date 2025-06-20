let arro = [{name:'dipesh',status:'active'},{name:'prajjal',status:'inactive'},{name:'jojo',status:'active'}]
let aee = arro.map((el)=>(el.status=='active'?el.status='inactive':el.status='active'))
console.log(aee)