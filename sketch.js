//All global variables defined
var dog,Dog,happyDog;//dog is the sprite; Dog, the image; happyDog, the happy dog png 

var buttonAddFood,buttonFeedFood;//buttonAddFood is var to add food, while buttonFeedFood is to feed the dog

var database;//my database

var food, foodS;//food refers to the node "Food" in the databse. foodS stores this value 

var fedTime, lastFed; //fedTime refers to database's "FeedTime" node, and lastFed stores this value

var nameInput, nama, saveNameButton;

function preload(){
  //preloading the images to add to dog
  Dog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  database = firebase.database(); //creating database
  
  createCanvas(1000,400);//creating a canvas 1000 pixels wide and 400 pixels tall
  
  //creating dog sprite, adding the image stored in var Dog, and scaling the dog
  dog=createSprite(800,200,150,150);
  dog.addImage(Dog);
  dog.scale=0.15;

  //creating a new instance of Food() *see Food.js for Food.js code*
  foodObject = new Food();

  //food goes to database node "Food", becomes a listener for the node "Food" value, and executes function readStonk
  //*readStonk() is in Functions.js, starting on line 2*
  food = database.ref('Food');
  food.on("value",readStonk);// don't call readstonk() with the brackets

  //fedTime refers to database node "FeedTime", transforms into a listener listening to changes in "Feedtime",
  // and executing the function inside. This function stores fedTime's value in lastFed. 
  fedTime = database.ref("FeedTime");
  fedTime.on("value", function (data){
    lastFed = data.val();
  })

  //creates button to feed food, absolute positions it, and upon being pressed, it calls function feedDoge
  //*feedDoge() is in Functions.js, starting on line 8*
  buttonFeedFood = createButton("Feed Doggo!");
  buttonFeedFood.position(800,95);
  buttonFeedFood.mousePressed(feedDoge);// don't call feedDoge() with the brackets

  //buttonAddFood creates a button to add food, is positioned at given coords, and after being pressed, it calls function addFood()
  //*addFood() is in Functions.js, starting on line 18*
  buttonAddFood = createButton("Add Doggo's Food!");
  buttonAddFood.position(buttonFeedFood.x-140,95);
  buttonAddFood.mousePressed(addFood); // don't call addfood() with the brackets

  nameInput = createInput("NAME THE DOG");
  nameInput.position(500,500);
  saveNameButton = createButton("SAVE NAME");
  saveNameButton.position(500,600);
  saveNameButton.mousePressed(named);
}

function draw() {
  //background color with given RGB values
  background(46,139,87);
  
  //calling the method display in Food.js for foodObject. *foodObject was created line 30* 
  foodObject.display();

  showFedTime(); //calling function showFedTime(). *See Functions.js, line 27 *
  showFoodFed(); //calling function showFoodFed(). *See Functions.js, line 39 *
  drawSprites();//drawing the sprites
}