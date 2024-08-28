
sum(displayPage,2,3);

function sum (display, x,y){
    let result =x+y;
    display(result);

}
function callback(result){
    console.log(result);
}
function displayPage (result){
    document.getElementById('myh1').innerHTML=result;
}
