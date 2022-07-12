class Rectangle {
    constructor(height, width,name) {
        this.name = name;
        this.height = height;
        this.width = width;
    }
    getName() {
        console.log('Hi, I am a ', this.name + '.');
    }

}

class Square extends Rectangle {
    constructor(length,name,x,y,maxWay) {
        super(length, length);
        this.name = name;
        this.x = x;
        this.y = y;
        this.maxWay = maxWay;
    }
    setName() {
        return this.name;
    }
    startMoving() {
        const interval = setInterval((x,y,maxWay)=> {
            this.x = square.x;
            this.y = square.y;
            this.maxWay = square.maxWay;
            square.x = square.x + 10;
            square.y = square.y + 5;
            console.log(square.x);
            console.log(square.y);
        },1000)
        console.log(interval);


        }



}


let rect = new Rectangle(40,20,"req");

console.log(rect);


let square = new Square(20,"shaiobdki",0,0,100)

console.log(square)
