var value1=(Math.ceil(Math.random()*6));
var value2=(Math.ceil(Math.random()*6));

// Randomly changing img1 
var img1="images/dice"+value1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);


// Randomly changing img2
var img2="images/dice"+value2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);


// changing h1 
if(value1>value2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(value1<value2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!";
}
