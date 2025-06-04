function add(a,b){
 const c=a+b;
 console.log(c)
}
// add(8,78)

function weekday(day){
    if(day==1){
        console.log("Monday");
    }
    else if(day==2){
        console.log("Tuesday");
    }
    else if(day==3){
        console.log("wednesday");
    }
    else if(day==4){
        console.log("Thrusday");
    }
    else if(day==5){
        console.log("Friday");
    }
   else if(day==6){
        console.log("Saturday");
    }
    else if(day==7){
        console.log("Sunday")
    }
    else{
        console.log("invalid Input" );
    }
}

weekday(1)

function weekday(day){
    switch(day){
case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("wednesday");
        break;
    
    case 4:
        console.log("Thrusday");
        break;
    
    case 5:
        console.log("Friday");
        break;
    
   case 6:
        console.log("Saturday");
        break;
    
    case 7:
        console.log("Sunday")
        break;
    
    default:
        console.log("invalid Input" );
        break;
    }
}

weekday(7)

function isAdult(age){
    let res=age>18?"You are adult":"You are child";
    console.log(res)
}

isAdult(34)

function isPrime(number){
    if(number<2){
        return false
    }
    for(let i=2;i<number/2;i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(-78))