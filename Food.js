class Food{
    constructor(){
        this.foodStonk; //foodStonk var in constructor
        this.image = loadImage("Milk.png");//loading the Milk.png in this.image 
    }
getFoodStonk(){
    return this.foodStonk //return foodStonk value
}

updateFoodStonk(foodStonk){
    this.foodStonk = foodStonk; //this.foodStonk is now foodStonk
}

deductFood(){
if(this.foodStonk > 0){ //if foodStonk's value is > zero
    this.foodStonk = this.foodStonk - 1 //deduct one from it's current value
}
}

display(){
var x = 80; //local variable x is equal to 80
var y = 100; //local variable y is equal to 100

imageMode(CENTER);// centers image

if(this.foodStonk != 0){ //if foodStonk isn't equal to 0
    for(var i = 0; i<this.foodStonk; i++){ //var i equals 0, if i is less than this.foodStonk's value, then increment i by one
        if(i%10 == 0){ //if divided by 10 has a remainder equal to zero
            x = 80 //x stays as 80
            y = y+50 //y is incremented by 50
        }
        image(this.image,x,y,50,50); //showing image 
        x = x+30 //30 is added to x's current value
    }
}
}


}