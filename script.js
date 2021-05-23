//for dice 1
var r_no1=Math.floor(Math.random() * 6) + 1; // for random no generation
var r_d_image1= "dice" + r_no1 + ".png";  //for diceimage name
var r_d_image_src1="images/"+r_d_image1;  // for image source

var image1=document.querySelectorAll("img")[0];  // for selecting image selector
image1.setAttribute("src",r_d_image_src1);  // for setting attribute or to change src attribute
//for dice 2
var r_no2=Math.floor(Math.random() * 6) + 1; // for random no generation
var r_d_image2= "dice" + r_no2 + ".png";  //for diceimage name
var r_d_image_src2="images/"+r_d_image2;  // for image source

var image2=document.querySelectorAll("img")[1] ; // for selecting image selector

image2.setAttribute("src",r_d_image_src2);

// for wining/lossing and Draw

if(r_no1>r_no2){
    document.querySelector("h1").innerHTML="Player1 WON!";

}

else if(r_no1<r_no2){
    document.querySelector("h1").innerHTML="Player2 WON!";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
}