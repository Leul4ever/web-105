function rollDice(){
  const numOfDice=document.getElementById("numOfDice").value;
  const diceResult=document.getElementById("diceResult");
  const diceImage=document.getElementById("diceImage");
  const values=[];
  const image=[];
 for(let i=0; i<numOfDice;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    image.push(`<img src="images/${value}.png" alt="dice image "
         />`);



 }
 diceResult.textContent=`dice:${values.join(',')}`;
 diceImage.innerHTML=image.join('');
    

}



