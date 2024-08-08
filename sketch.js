function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    
  
    stroke("white")
    fill("darkred")
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      quad(mouseX, mouseY, 20, 35)  
    } 
  
    }
  