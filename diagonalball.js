var ball;

//x and y-coordinates of 'ball'
var x = 15;
var y = 20; 

function setup()
{
    createCanvas(windowWidth, windowHeight)
    background(255)
}

function draw()
{
    stroke(0)
    strokeWeight(2)
    fill(random(255),random(255),random(255)) //ball is multicolor
    ball = circle(x, y, 20)

    if (x > width)
    {
        x = 15;
        y+=30;
    }

    else
    {
        x+=30
    }

    if (y > height)
    {
        x = 15;
        y = 20;
    }
}

function mousePressed()
{
    noLoop()
}

function keyPressed()
{
    if (keyCode === ENTER)
    {
        loop()
    }
}

// function mouseClicked()
// {
//     alert("To stop the drawing, click anywhere on the webpage! To resume the drawing, press Enter")
// }