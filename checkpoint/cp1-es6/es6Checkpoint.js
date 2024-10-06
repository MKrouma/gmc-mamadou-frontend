// CP 1 : Vowel Count 

const word = "hello world!"
const vowelList = ["a", "e", "i", "o", "u"]

let vowelCount = 0

for (let i=0; i<word.length; i++) {

    if (vowelList.find(elt => elt === word[i])) {
        vowelCount++
    }
}


let vowelCount2 = word.split('').filter(elt => vowelList.find(vowel => vowel === elt)).length

console.log(vowelCount)
console.log(vowelCount2)



// CP2 : even or odd 
function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(1))