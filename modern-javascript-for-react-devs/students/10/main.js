//
// File: main.js
// Date: 5/24/2022
// 

//Main
const ex1 = () =>
{
    const array = [10, 20, 40,'65','tests', 5.9, 19];
    //const array = [1, '2', 3, 'test', 5.7, 1.2];
    console.log(countNumbers(array)); 
}

const ex2 = () =>
{
    //const array1 = [12, 55, 2, 22, 11];
    //const array1 = [100, 99,76,12,59,3000, .5]
    const array1 = [4000, 3000,59,.3,76,99, .2];
    console.log(minNumber(array1));
}

const ex3 = () => 
{   const array1 = [1, 2];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    //const array1 = [1, 2, 3, 4, 5];
    //const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

const ex4 = () =>
{
    //console.log(palindrome('radar'));
    console.log(palindrome('month'));
}
const ex5 = () =>
{
    let str = "Tommorrow is never Today. Today is never Tommorrow. Yesterday is never Today."
    let word = "Today"
    //let str = "Today is a this is a this is a test"
    //let word = "this"
    let returnedBackFromFunction = theNumberOfTimes(str, word);
    console.log(word + " appears: " + returnedBackFromFunction + " times.");
}
const ex6 = () =>
{
    let array = ['this', 'is', 'a', 'test', 'happy'];
    //let array = ['this', 'that', 'then', 'test', 'jarhead', 'tommorrow'];
    console.log(longestString(array));
}
const ex7 = () =>
{
    let n = [1, 3, 6, 3, 6, 10];
    //let n = [ 225, 45, 78, 9, 100];
    console.log(sort(n));
}
const ex8 = () =>
{
    //let words = "Valerie is my partner, not really"
    let words = "Count the words in this string";
    console.log(countWords(words));
}
const ex9 = () =>
{
    var a = "this counts the number of words that end in s"
    console.log(countS(a));
}
const ex10 = () =>
{
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array))
}


//Functions


const minNumber = (array) => 
{
   let lowestNumber=array[0];
    for (let i=1; i < array.length; i++)
    {
        if (lowestNumber >= array[i])
        {
            lowestNumber=array[i];
            //console.log(lowestNumber, i);
        }   
    }
    return lowestNumber;
}

const interleave = (array1,array2) => 
{
    let interleavedArray = [];
    let n = array1.length;
    let message = "";
    for (let i=0; i < n; i++)
    {
        if (array1.length == array2.length)
        {
            interleavedArray.push(array1[i]);
            interleavedArray.push(array2[i]);
            message = interleavedArray.toString();
        }
        else
            message = "ERROR: Array length mismatch."
    }
    return message;
}
const palindrome = (passedString) => 
{
    let passedStringArray = passedString.split('');
    //console.log(passedStringArray);
    let reverseStringArray = passedString.split('').reverse('');
    //console.log(reverseStringArray);
    let bool = true;
    for(let i = 0; i < passedStringArray.length; i++)
    {
     if (passedStringArray[i] != reverseStringArray[i])
     {
        bool = false
     }
     return bool;
    }

}
const theNumberOfTimes = (passedString, word) =>
{
let taKeOutWhiteSpaces = passedString.toLowerCase().replace(/[^\w\s]|_/g, " ").split(' ')
let countWord = 0; 
//console.log(taKeOutWhiteSpaces);
let i = 0;
while (i < taKeOutWhiteSpaces.length)
{
   // console.log(taKeOutWhiteSpaces.length)
    if (taKeOutWhiteSpaces[i] === word.toLowerCase())
    {
        //console.log(taKeOutWhiteSpaces[i], i)
        countWord++;
        i++;
        //console.log(countWord);
    }
    else
        i++;
}
//console.log(countWord)
return countWord
}


const longestString = (passedArrayOfStrings) =>
{
    let longestStringInArray = '';
    let howLongIsString = passedArrayOfStrings[0].length;
    for (let i = 1; i<passedArrayOfStrings.length; i++)
    {
        if (passedArrayOfStrings[i].length > howLongIsString)
        {
        howLongIsString = passedArrayOfStrings[i].length;
            longestStringInArray = passedArrayOfStrings[i];
        }
        else
            continue;    
    }
    return longestStringInArray;
}
const sort = (passedArray) =>
{
for (let i = 0; i < passedArray.length; i++)
{
    for(let j = 0; j < passedArray.length - i - 1; j++)
    {
        if (passedArray[j] >= passedArray[j+1])
        {
            let tempMaxLocation = passedArray[j];
            passedArray[j] = passedArray[j+1];
            passedArray[j+1] = tempMaxLocation;
        }
    }
    return passedArray;
}
}
const countWords = (passedString) =>
{
    let passedStringArray = passedString.split(' ');
    //console.log(passedStringArray, passedString);

    let countWord = passedStringArray.length;
    return countWord;
}


const countNumbers = (array) => 
{
    let retval = 0;
    let i = 0;
    //return length of array
    while( i < array.length)
    {
        if (typeof array[i] == 'number')
        {
            retval++;
            i++;
            //console.log(retval)
            //console.log(i)
        }
       else
          i++;
    }
    return retval;
}
const countS = (passedString) =>
{
    let countWordsEndinginS = 0;
    let wordStringArray = passedString.split(' ')
    for(let i = 0; i < wordStringArray.length; i++)
    {
        let letterStringArray = (wordStringArray[i].split(''));
        //console.log (letterStringArray)
        
        {
            let lastElementOfLetterStringArray = letterStringArray.length - 1;
            if ((letterStringArray[lastElementOfLetterStringArray]) === 's')
            {
                countWordsEndinginS ++;
                //console.log(countWordsEndinginS)
            }
        }

    }
    return countWordsEndinginS;
}
const countLetters = (passedArray) =>
{
    let numberOfLetters = 0;
    for (let i = 0; i < passedArray.length; i++)
    {
    numberOfLetters = passedArray[i].length
    //console.log(numberOfLetters)
    }
return numberOfLetters;
}
const main = async () => {
    ex10();
}

main();
