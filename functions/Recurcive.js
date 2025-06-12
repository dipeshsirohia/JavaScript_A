function reverseCount(n){
  if(n===1){
    console.log(n)
    return;
  }
  console.log(n)
  reverseCount(n-1);
}

// reverseCount(5)

function Count(n){
  if(n===1){
    console.log(n)
    return;
  }
  
  Count(n-1);
  console.log(n)
}

// Count(5)

function EvenCount(n){
  if(n===1){
    return;
  }
  
  EvenCount(n-1);
  if(n%2==0){
   console.log(n)
  }
  
}

// EvenCount(40)

function Even(n){
    if(n===40){
        return;
    }
    console.log(n)
    Even(n+2)
}
// Even(2)

function Square(n){
    if(n==0){
        return;
    }
    Square(n-1);
    console.log(n*n)

}
// Square(10)

function odd(n){
  if(n===25){
    return;
  }
  console.log(n)
  odd(n+2);
}
// odd(1)

function message(n){
    if(n===0){
        return;
    }
    message(n-1);
    if(n%2==0 && n%3==0){
        console.log(`${n} abc`)
    }
    else if(n%2==0){
        console.log(`${n} hi`)
    }
    else if(n%3==0){
        console.log(`${n} hello`)
    }else{
        console.log(`${n} prime`)
    }

}
message(50)
