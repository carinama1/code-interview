function isPalyndrom(string) {
    let palyndrom = string.split("").reverse().join("")
    const final = string + " is Palyndrom ? " + (string === palyndrom).toString()
    return final
}

function firstRecurringCharracter(string){
    let strList = {}
    for(let i=0;i<string.length;i++){
        const str = string.charAt(i)
        if(strList[str]){
            return str
        }
        strList[str] = 1
    }
}


console.log(isPalyndrom("katak"))
console.log(firstRecurringCharracter("sdafhjkloa"))