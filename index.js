// Hi My Name is Yash and I hope you like this tiny piece of code.

// let str = "1,2,3"
const add = (str) => {
    let result = 0;
    
    str?.split(",")?.map((el)=>{
        result+=parseInt(el)
    })

    return result
}

console.log(add("1,2,3"))