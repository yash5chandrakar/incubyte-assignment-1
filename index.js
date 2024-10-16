// Hi My Name is Yash and I hope you like this tiny piece of code.

// let str = "1,2,3"
const add = (str) => {
    if (!str) {
        return 0;
    }

    let result = 0;
    let defaultSeparator = ","
    let includesDelimiter = str?.includes("//");
    let negativeNumberArray = []

    if (includesDelimiter) {
        let strArray = str?.split('\n', 2);
        let newDelimiter = strArray[0]?.slice(2);
        defaultSeparator = newDelimiter
        str = strArray[1]
    }

    // console.log(str,defaultSeparator)

    str = str.replace(/(?:\r\n|\r|\n)/g, defaultSeparator);

    // console.log(str)


    str?.split(defaultSeparator)?.map((el) => {
        if(parseInt(el)<0){
            negativeNumberArray.push(el)
        }
        result += parseInt(el) || 0;
    })

    if(negativeNumberArray?.length>0){
        throw new Error(`negative numbers not allowed : ${negativeNumberArray?.join(", ")}`);
    }

    return result
}

console.log(add("//;\n1;-2;-3;-5"))