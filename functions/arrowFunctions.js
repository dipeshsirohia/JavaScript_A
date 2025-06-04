const Name = (a, b, c, d) => {
    const abc = a + b - c + d;
    console.log(abc)
}
Name(1, 2, 3, 4)

// find month

const month = (month) => {
    switch (month) {
        case 1:
            console.log("January")
            break
        case 2:
            console.log("feb")
            break
        case 3:
            console.log("mar")
            break
        case 4:
            console.log("april")
            break
        case 5:
            console.log("may")
            break
        case 6:
            console.log("June")
            break
        case 7:
            console.log("July")
            break
        case 8:
            console.log("aug")
            break
        case 9:
            console.log("sep")
            break
        case 10:
            console.log("oct")
            break
        case 11:
            console.log("Nov")
            break
        case 12:
            console.log("Dec")
            break
        default:
            console.log("inavalid input")
            break


    }
}

month(16)