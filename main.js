img = "";
status =""; 
function setup(){
canvas = createCanvas(600,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(img,0,0,600,400);
fill("#1b44fa");
text("pepsi",5,10);
stroke("#1b44fa");
noFill();
rect(0,0,300,350);

fill("#3d030b");
text("coke",320,15);
stroke("#3d030b");
noFill();
rect(300,0,300,350);
}

function preload(){
img = loadImage("harry.jpg")
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
