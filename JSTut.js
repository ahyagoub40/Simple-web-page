const calcPI = function (iterations) {
  let pi = 0, divisor = 1
  for (let i = 0; i <= iterations; i++) {
    pi = pi + 4 / divisor - 4 / (divisor + 2)
    divisor += 4
  }
  document.getElementById("output1").value = pi.toFixed(10)
}

const fib = (whichNum) => {
  let num1 = 1, num2 = 0, temp, i = 0
  while (i < whichNum) {
    temp = num1
    num1 = num1 + num2
    num2 = temp
    i++
  }
  return num2
}
const getFibList = function (howMany) {
  const fibList = []
  for (let i = 1; i < howMany; i++) {
    fibList[i] = fib(i)
  }
  document.getElementById("output1").value = fibList.join(',')
}

let mLText = `My dear old ~ sat me down to hear some words of wisdom \n1. Give a man a ~ and you  ~ him for a day ~ a man to ~ and he will ~ forever \n2. He who ~ at the right time can ~ again \n3. Always wear ~ ~ in case you are in a ~ \n4. Don't use your ~ to wipe your ~ Always have a clean ~ with you`;

// convert string into array
let mLArray = mLText.split(' ')
// create an array for user input
let inputArray = []


const createInputArray = () => {
  for (let i = 0; i < 14; i++) {
    inputArray[i] = document.getElementById('i' + i).value
  }
}
const checkForMissingInput = () => {
  const defaultArrayValues = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"]
  for (let i = 0; i < inputArray.length; i++) {
    if (defaultArrayValues.indexOf(inputArray[i]) > - 1) {
      return true
    }
  }
  return false
}
const createMLSentence = () => {
  let arrayIndex = 0
  for (let i = 0; i < mLArray.length; i++) {
    const matchIndex = mLArray.indexOf('~')
    mLArray[matchIndex] = inputArray[arrayIndex]
    arrayIndex++
  }
  console.log(mLArray)
  document.getElementById("output1").value = mLArray.join(' ')
}
const madLibGenerator = function () {
  createInputArray()
  if (checkForMissingInput()) {
    document.getElementById("output1").value = "Enter all values above"
  } else {
    createMLSentence()
  }
}