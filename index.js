// Hi My Name is Yash and I hope you like this tiny piece of code.

// let str = "1,2,3"
const add = (str) => {
    if(!str){
        return 0;
    }

    let result = 0;

    // console.log(str)

    str = str.replace(/(?:\r\n|\r|\n)/g, ",");

    // console.log(str)

    
    str?.split(",")?.map((el)=>{
        result+=parseInt(el)||0;
    })

    return result
}

console.log(add("1\n2,3"))