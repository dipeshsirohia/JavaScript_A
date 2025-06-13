function createOtp(digit){
    let otp=""
    for(let i=0;i<digit;i++){
      otp = otp+Math.floor(Math.random()*10)
    }
    return otp;
    
}

console.log(createOtp(5))


