img = "";

function preload(){
    img = loadImage('drawer.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Drawer - 0.98 confidence", 35, 35);
    noFill();
    stroke("#FF0000");
    rect(20, 20, 600, 400);
}