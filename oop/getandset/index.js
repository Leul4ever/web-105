// getter =special method that make a property readable
// setter = special method tha make  a property writeable 
// validate and modify a value when reading/writing a property  

class Person{

    constructor(firstName,lastName,age){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age =age ;
}
set firstName(newFirstName){
    if(typeof newFirstName==="string" && newFirstName.length>0){
        this._firstName=newFirstName.trim();


    }else {
        console.log("First name must be non empty string ");
    }
}
set lastName(newLastName){
    if(typeof newLastName==="string" && newLastName.length>0){
        this._lastName=newLastName.trim();

    }else {
        console.log('Last name  must be non empty string ')
    }
}
set age (newAge){
    if(typeof newAge=== "number" && newAge>=0 ){
        this._age = newAge;
    }else {
        console.log('age must be non negative number ')
    }
}
get firstName(){

  return this._firstName;

}
get lastName(){

    return this._lastName;
  
  }
  get fullName(){
    
    return this._firstName+ " " + this._lastName;  
  }
  get age(){

    return this._age;
  
  }


}
const Person1= new Person("leul " ,"Abera",23);
console.log(Person1.firstName);
console.log(Person1.lastName);
console.log(Person1.fullName)
console.log(Person1.age);


// example 
class Rectangle{

    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth
        }else
        {console.error("width must be positive number ");}
    
}
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }else{
            console.error('height must be a positive number ');

        }
    }
    get width(){
         return `${this._width.toFixed(1)} cm`;

    }
    get height(){
        return `${this._height.toFixed(1)} cm `;
    }
    get Area(){
        return `The area of rectangle is ${this._width*this._height} cm^2 `;
    }
  
}

const rectangle= new Rectangle(10,10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.Area);






