canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

space_img = ["img_1.jpg","img_2.jpg","img_3.jpg","img_4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 15;
background_img = space_img[random_number];
console.log("background image is " +background_img);
rover_img = "rover.png";

function add(){
    image_background = new Image();
    image_background.onload = uploadbackground;
    image_background.src = background_img;
    
    imag_rover = new Image();
    imag_rover.onload = uprover;
    imag_rover.src = rover_img;
}
function uploadbackground(){
    ctx.drawImage(image_background,0,0,canvas.width,canvas.height);
}   
function uprover(){
    ctx.drawImage(imag_rover,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "40"){
        down();
        console.log("down");
    }   
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
} 

function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed  x = " + rover_x + " y = " + rover_y);
        uploadbackground();
        uprover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed  x = " + rover_x + " y = " + rover_y);
        uploadbackground();
        uprover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed  x = " + rover_x + " y = " + rover_y);
        uploadbackground();
        uprover();
    }

}
function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed  x = " + rover_x + " y = " + rover_y);
        uploadbackground();
        uprover();
    }
}
