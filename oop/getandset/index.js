// getter =special method that make a property readable
// setter = special method tha make  a property writeable 
// validate and modify a value when reading/writing a property  

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



