person1={
  firstName: "Leul",
  lastName:"Abera",
  Age:23,
  isEmployed:true,
  sayHello:function(){console.log(`hey guys I am ${this.firstName }`)},
  eat :()=>{console.log("I am eating hamburger ")},

}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.Age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();



