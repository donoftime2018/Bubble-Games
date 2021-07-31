let coord;
let prompt;
let cnv;

function setup()
{
    cnv = createCanvas(1200, 800)
    cnv.mousePressed(displayCoordinate)
    cnv.mouseOver(displayPrompt)
    cnv.mouseOut(removePrompt)
    background(0, 255, 0)
}

function displayCoordinate()
{
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
    {
        if (prompt != null)
            prompt.hide()

        if (coord != null)
            coord.remove()
        
        coord = new Coordinate(Math.floor(mouseX), Math.floor(mouseY))
        coord.display()
    }
}

function displayPrompt()
{
    prompt = createP('Click anywhere in the green area to display the x and y coordinates of the exact place you clicked!')
    prompt.style('font-family', 'arial')
    prompt.style('font-size', '25px')
    prompt.style('text-align', 'center')
    prompt.position(66, 0)
}

function removePrompt()
{
    if (prompt != null)
    {
        prompt.hide()
    }
}