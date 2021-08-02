let coord;
let prompt;
let cnv;
let color_choice;

function setup()
{
    cnv = createCanvas(1200, 800)
    color_choice = createRadio()

    cnv.mousePressed(displayCoordinate)
    cnv.mouseOver(displayPrompt)
    cnv.mouseOut(removePrompt)
    cnv.mouseWheel(changeColor)

    color_choice.option('blue')
    color_choice.option('red')
    color_choice.style('font-family', 'arial')
    color_choice.style('font-size', '18px')
    color_choice.selected('red')
    color_choice.position(1250, 184)

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
    prompt = createP('Click anywhere in the colored area to display the x and y coordinates of the exact place you clicked!')
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

function changeColor(event)
{
    let col = color_choice.value()
    if (event.deltaY > 0)
    {
        background(col)
    }

    else
    {
        background(0, 255, 0)
    }
}