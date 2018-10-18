function setup() {
  //Creating a black square
createCanvas(400, 400)
  //Colour of square is white as 255 is maximum rgb rating
background(255)
}

function draw() {
  //Any objects within draw should have a fill listed as the RGB value below
fill(255, 130, 0)
  //defines border and its colour
stroke(0)
  //creates a triangle shape and the 6 points are the X and Y of each corner

  //creates a rectangle with X and Y of the first point, plus the height and width
//Three houses created. 
house(30, 80, 80)
house(190, 80, 80)
house(110, 80, 80)
}
//Function for square takes in three inputs, X and Y co-ords of first point, as well as an overall size fo the square.
function square(x, y, size) {
    rect(x, y, size, size)
  }
  function roof(x, y) {
    triangle(0,30,40, 0, 80, 30)
  }
  
  function house(x, y) {
    square(x, y, 70)
    triangle(x, y, x+70, y, x+35, y-70)
  }