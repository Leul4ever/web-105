let fruits =["apple ","orange","banana","coconut"];
// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
console.log(fruits);//before foreach  application 
fruits.forEach(capitalize);
fruits.forEach(display);
console.log(fruits); //after  foreach application 



function upperCase(element , index, array){
    array[index]=element.toUpperCase(); 
}
function lowerCase(element, index, array){
    array[index]=element.toLowerCase();
}
function capitalize(element, index, array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
    // console.log(array[index]);
}

function display(element){
    console.log(element);
}
