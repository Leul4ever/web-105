// inheritance =allows a new class to inherit  properties and methods 
// form an existing class (parent- child )
//  helps with code reusability

class Animal {
    alive =true;
    eat(){
        console.log(`this ${this.name} is eating `);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping `)
    }
}
class Rabbit extends Animal {
    name ="Rabbit ";
}
class Fish extends Animal{
    name="fish";

}
class Hawk extends Animal {
    name="hawk";

}
const h = new Hawk();
h.sleep();

