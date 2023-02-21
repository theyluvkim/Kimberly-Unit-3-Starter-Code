/* Declare variables below to save the different sections (divs) of your story*/

let ButtonOne=document.querySelector(".option-one");
let OptionOnescreen=document.querySelector(".option-one-screen");

let ButtonTwo=document.querySelector(".option-two");
let OptionTwoscreen=document.querySelector(".option-two-screen");
let StoryOpening=document.querySelector(".story-opening");
let ButtonThree=document.querySelector(".option-three");
let OptionThreescreen=document.querySelector(".option-one-end");
let ButtonFour=document.querySelector(".option-four");
let OptionFourscreen=document.querySelector(".option-two-end");
let optionfive=document.querySelector(".option-five");
let airplanegif=document.querySelector(".airplane-gif");

ButtonOne.onclick=function(){
OptionOnescreen.style.display="block";
OptionTwoscreen.style.display="none";
StoryOpening.style.display="none";
};


ButtonTwo.onclick=function(){
OptionTwoscreen.style.display="block";
OptionOnescreen.style.display="none"; 
StoryOpening.style.display="none";
};

ButtonThree.onclick=function(){
OptionThreescreen.style.display="block";
OptionOnescreen.style.display="none";  
StoryOpening.style.display="none";
};

ButtonFour.onclick=function(){
OptionFourscreen.style.display="block";
OptionOnescreen.style.display="none";  
StoryOpening.style.display="none";
};

optionfive.onclick=function(){
    airplanegif.style.display="block";
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


