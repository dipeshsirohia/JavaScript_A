function auth(data){
   
    const email="abc@gmail.com"
    const password = "1234"

    if(data.email!=email && data.password!=password){
        console.log("Inavalid email and Password ")
    }
    else if(data.email!=email){
        console.log("Invalid email")
    }
    else if(data.password!=password){
        console.log("Invalid password")
    }
    else{
         console.log("User verified you are logged in")
    }

}
const data = {
    email:"abc@gmail.com",
    password:"1234"
}

auth(data)

