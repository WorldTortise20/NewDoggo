//function to read food Stock
function readStonk(data){
    foodS=data.val(); //variable food's value is stored in var foodS
    foodObject.updateFoodStonk(foodS); //foodObject *see line 30*
  }
  
  //function to update food stock and last fed time
  function feedDoge(){
  dog.addImage(happyDog);//adding image stored in happyDog 
  foodObject.updateFoodStonk(foodObject.getFoodStonk()-1); //foodObject.updateFoodStonk() *See Food.js, line 11* gets foodStonk and subtracts one from it *See Food.js, line 7* 
  database.ref('/').update({// refers to the main thing in the database
    Food:foodObject.getFoodStonk(), //Food node equals foodObject.getFoodStonk() *See Food.js, line 7*
    FeedTime: hour() // Node FeedTime equals the hour() function, which gets the computer's current hour
    })
  }
  
  //function to add food in stock
  function addFood(){
    dog.addImage(Dog);//dog changes back to image stored in variable Dog
    foodS++; //the value in foodS in incremented by 1
    database.ref('/').update({
      Food:foodS //Food now also refers to the value of foodS
    })
  }
  
  
  function showFedTime(){
    fill("red");//text becomes red
    textSize(17);//sets text's size 
    if(lastFed>=12) {// if var lastFed's value is > 12 (above or equal to 12 PM)
      text("Last Fed: "+lastFed%12+" PM", 10, 30); // show the text 
    } else if(lastFed===0) { //if lastFed has no value
      text("Last Fed: Never", 10, 30); //show the text
    } else {// if the value of lastFed is other than the ones in the conditions above
      text("Last Fed: "+lastFed + " AM", 10, 30);//show the text 
    }
  }
  
  function showFoodFed(){
    if(foodS > 0) {//if foodS has a value
      fill("black"); //text color is black
      textSize(20);// text size is 20
      text("Food Remaining: "+foodS, 100, 300); //this text is shown
  }
  }

  function named(){
     nama = nameInput.value();
    database.ref("/").update({
      Name: nama
    })
    var greeting = createElement("h3");
    greeting.html("Hello "+ nama +"!");
    greeting.position(900,185);
  }