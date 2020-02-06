function isPalyndrom(string) {
    let palyndrom = string.split("").reverse().join("")
    const final = string + " is Palyndrom ? " + (
        string === palyndrom
    ).toString()
    return final
}

function firstRecurringCharracter(string) {
    let strList = {}
    for (let i = 0; i < string.length; i++) {
        const str = string.charAt(i)
        if (strList[str]) {
            return str
        }
        strList[str] = 1
    }
}

function numberToString(number) {
    let currentNumber = number;
    const NSATUAN = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    const NSATUANSPECIAL = [
        " ",
        " ",
        "twen",
        "thir",
        "four",
        "fif"
    ]
    const NBELASAN = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen"
    ]
    const NBELASANDEFAULT = "teen"
    const NPULUHAN = "ty"

    const functionList = [checkSatuan(currentNumber), checkPuluhan(currentNumber)]


    function checkSatuan(num) {
        return NSATUAN[num]
    }

    function checkBelasan(localRes) {
        if (localRes <= 5) {
            return NBELASAN[localRes]
        }
        return NSATUAN[localRes] + NBELASANDEFAULT
    }

    function checkPuluhan(num) {
        const puluhan = Math.floor(num / 10)
        const localRes = num % 10
        if (puluhan === 1) {
            return checkBelasan(localRes)
        }

        if (puluhan <= 5) {
            console.log("console : ", NSATUANSPECIAL[puluhan] + NPULUHAN)
            return NSATUANSPECIAL[puluhan] + NPULUHAN
        }
        console.log("console : ", NSATUAN[puluhan] + NPULUHAN)
        return NSATUAN[puluhan] + NPULUHAN
    }

    function Main() {
        const result = Math.floor(currentNumber / 10);

        return(functionList[result])
    }

    return Main()
}

console.log(numberToString(28))
console.log(numberToString(13))
console.log(isPalyndrom("katak"))
console.log(firstRecurringCharracter("sdafhjkloa"))
