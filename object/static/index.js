// In JavaScript, the static keyword is used to define a method or property directly on the class itself, 
// rather than on instances of the class. This means that static methods or properties can be called without creating an instance of the class.
class User {

    static userCount =0;
    constructor(username){
        this.username=username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(this.userCount);
    }
    sayHello(){
        console.log(this.username);
    }
}
const user1= new User("Leul");
const user2= new User("Dani");
const user3= new User("sora");
const user4= new User("Bami");
user1.sayHello();
User.getUserCount();








