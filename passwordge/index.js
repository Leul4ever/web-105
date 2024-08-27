function generatePassword(length,includeLowerCase ,includeUpperCase,includeNumber,includeSymbols){
   const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars="0123456789";
   const symbolChars='!@#$%^&*()_-+=';
   let allowedChars="";
   let password="";
   allowedChars += includeLowerCase?lowercaseChars:"";
   allowedChars +=includeUpperCase? uppercaseChars:"";
   allowedChars +=includeNumber?numberChars:"";
   allowedChars +=includeSymbols?symbolChars:"";
   console.log(allowedChars);
    return '';

 }
const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumber=true;
const includeSymbols=true;
const password=generatePassword(
    length,
    includeLowerCase,
    includeUpperCase,
    includeSymbols,
    includeNumber,

);
console.log(`generated password :${password}`);

