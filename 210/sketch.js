let img;

function setup() {

    var cnv = createCanvas(800, 500);
    cnv.style('display', 'block');
    cnv.parent('content'); //this puts my sketch in a div
//    img = loadImage('space.jpg'); 
}

function draw() {
 background(251, 226, 53);
    
    noStroke();
    
//   face;
      fill(122);
    push();
    translate(300,600);
    ellipse(110,-60,450,400);
    pop();
    //
     fill(103, 215, 215);
    push();
    translate(300,300);
    ellipse(110,-60,250,300);
    pop();
    //left eye
    fill(255);
    push();
    translate(300,300);
    ellipse(40,-60,60,60);
    pop();
    //leftpupil
     fill(122);
    push();
    translate(300,300);
    ellipse(40,-60,40,40);
    pop();
    //right
    fill(255);
      push();
    translate(300,300);
    ellipse(180,-60,60,60);
    pop();
    //rightpupil
    fill(122);
      push();
    translate(300,300);
    ellipse(180,-60,40,40);
    pop();
    //nose
     fill(122);
      push();
    translate(342,220);
    triangle(55, 75, 58, 20, 86, 75);
  pop();

    push();
    translate(width/1.9, height/1.7);
    if (mouseY > height/2){
    fill (255,0,0);
    rect(-25,30,30,map(mouseY, height/2, height, 5, 60));
    }
    else{
    rect(-25,30,30,5);
    }
    pop();
    console.log("X: " + mouseX);
    console.log("Y: " + mouseY);
}
