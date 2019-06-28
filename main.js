function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    background(51);
    fill(255);
    const rx = width/2;
    const ry = height/2;

    const x = rx + 0.2*rx*cos(frameCount/10);
    const y = ry + 0.2*ry*sin(frameCount/10)
    circle(x, y, 50);
}