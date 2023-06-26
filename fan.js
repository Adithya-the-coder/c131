img = "";

function preload(){
    img = loadImage('fan.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fan - 0.76 confidence", 30, 30);
    noFill();
    stroke("#FF0000");
    rect(20, 20, 600, 400);
}