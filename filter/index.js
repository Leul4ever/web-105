// .filter()=create a new array by filtering out  element 
let names = ["LEUL", "Ananiya", "deva "];
let filteredNames = names.filter(bros);
function bros(brother) {
    // Trim the name to remove leading and trailing spaces, then check the first character
    return brother.trim().charAt(0) === brother.trim().charAt(0).toUpperCase();
}

console.log(filteredNames); // output   Leul , Ananiya ;
const words =["apple ","orange","banana","kiwi","pomegrante","coconut"];
let shortWords=words.filter(getShortWords);
console.log(shortWords);
let longWords =words.filter(getLongWords);
console.log(longWords);

function getShortWords(element){
     return element.length<=6;


}
function getLongWords(element){
    
    return element.length>6;
}



