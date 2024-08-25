textBox=document.getElementById('textBox');
toFahrenheit=document.getElementById('toFahrenheit');
toCelsius=document.getElementById('toCelsius');
result=document.getElementById('result');
let temp;
function convert(){
 if(toFahrenheit.checked){
  temp= Number(textBox.value);
  temp=temp*9/5+32;
  result.textContent=temp.toFixed(2)+"°F";

}else if (toCelsius.checked){
    temp =Number(textBox.value);
    temp=(temp-32)*(5/9);gi
    result.textContent=temp.toFixed(2)+"°c";


}else {
    result.textContent='Select a unit ';
}

}



