img = "";

function preload(){
    img = loadImage('tv.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Television - 0.93 confidence", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 600, 350);

    fill("#FF0000");
    text("Cardboard tray - 0.58 confidence", 420, 320);
    noFill();
    stroke("#FF0000");
    rect(420, 330, 200, 70);
}