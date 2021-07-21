var background_button;
var save_drawing_button;

function setup()
{
    createCanvas(windowWidth, windowHeight)
    background_button = createButton('Color Background')
    background_button.position(width/2, 0)
    background_button.mousePressed(fillBackground)

    save_drawing_button = createButton('Save Image')
    save_drawing_button.position(width/2, 20)
    save_drawing_button.mousePressed(saveDrawing)
}

function draw()
{
    noLoop()
    let circle_no = Math.floor(Math.random()*100); //draw between 0 and 100 circles

    for (let i = 0; i < circle_no; i++)
    {
        noStroke()
        fill(random(255), random(255), random(255))
        circle(Math.floor(Math.random()*width), Math.floor(Math.random()*height), Math.floor(Math.random()*100)+1)
    }
}

function fillBackground()
{
    background(random(255), random(255), random(255), 20)
}

function saveDrawing()
{
    saveCanvas(); 
}
