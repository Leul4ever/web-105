// class =(ES6 feature ) provides a more structured and cleaner way to work with object
// compared to traditional constructor function 
//ex. statics keyword,encapsulation,inheritance 

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = parseFloat(price); // Convert price to a number
    }

    displayProduct() {
        console.log(`The name of the product is ${this.name} and the price is ${this.price}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;
const product1 = new Product("Bible", 1000); // Corrected price as a number
const product2 = new Product("Leul song", 500);
const product3 = new Product("Guitar", 45);


product1.displayProduct(); // This will only display the product's details

const totalPrice = product1.calculateTotal(salesTax); // Calculate total price including tax
console.log(`Total price with tax is ${totalPrice}`);
