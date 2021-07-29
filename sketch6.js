let coord;

function setup()
{
    createCanvas(1000, 800)
    background(0, 255, 0)
}

function mousePressed()
{
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
    {
        if (coord != null)
            coord.remove()
        
        coord = new Coordinate(Math.floor(mouseX), Math.floor(mouseY))
        coord.display()
    }
}