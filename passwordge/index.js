function generatePassword(length,includeLowerCase, includeUpperCase,includeNumber,includeSymbols){
    let lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars="0123456789";
    let symbolChars="!@#$%^&*()_-+=";
    let allowedChars=""
    let password="";
    allowedChars+=includeLowerCase?lowercaseChars:"";
    allowedChars+=includeUpperCase?uppercaseChars:"";
    allowedChars+=includeNumber?numberChars:"";
    allowedChars+=includeSymbols?symbolChars:"";
    if(length<0){
        return `(password length must be at least one )`;

    }
    if(allowedChars.length===0){
        return `(at least one set of character selected )`
    }
    for(let i=0;i<length;i++){
      const randomIndex= Math.floor(Math.random()*allowedChars.length);
      password+=allowedChars[randomIndex];


    }
    return password;


}


const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumber=true;
const includeSymbols=true;

const password =generatePassword( passwordLength,includeLowerCase,includeUpperCase,includeNumber,includeSymbols);
console.log(`generated password ${password}`);
