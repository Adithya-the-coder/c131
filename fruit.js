img = "";

function preload(){
    img = loadImage('fruit.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bananas - 0.92 confidence", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 330, 350);
    fill("#FF0000");
    text("Oranges - 0.67 confidence", 360, 100);
    noFill();
    stroke("#FF0000");
    rect(340, 80, 300, 320);
    fill("#FF0000");
    text("Pears - 0.72 confidence", 170, 170);
    noFill();
    stroke("#FF0000");
    rect(150, 150, 230, 250);
}