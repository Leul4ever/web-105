// constructor =special method for defining the properties and methods of objects


function Car(make,model ,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){
        console.log(`your drive the ${this.model}`)
    }

}
const car1=new Car("ford","mustang","2024","red");
const car2= new Car("Chevrolet","Camaro","2025","blue");
const Car3= new Car("leul ","charger","2016","silver")

