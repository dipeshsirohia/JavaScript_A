function abc(){
    console.log("start")

    setTimeout(function(){
        console.log("log print after 1")
    }, 1000)

    setTimeout(function(){
        console.log("log print after 4")
    }, 4000)

    setTimeout(function(){
        console.log("log print after 2")
    }, 2000)

    setTimeout(function(){
        console.log("log print after 3")
    }, 3000)

    console.log("end")
}
// abc()

function countdown(n){
    let i=1;
    let set = setInterval(()=>{
        console.log(i++)
        if(i==n+1){
    clearInterval(set)
    console.log("Time Over")
    }
    },2000)
    
}
countdown(10)

