// Anonymous function
// use for passing arguments to another fuction

const abc = function(a,b,c,d){
   
    function abc (a,b){
        console.log(a+b)
    }
   
    function def (c,d){
        console.log(c+d)
    }

    console.log(a+b+c+d)
}

abc(1,2,3,4)
