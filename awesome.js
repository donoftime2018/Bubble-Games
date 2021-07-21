var awesome_button;
var awesome_link;
var bg_color;

function setup()
{
    createCanvas(windowWidth, windowHeight)
    awesome_button = select('#awesomebutton')
    awesome_button.position(windowWidth/2, windowHeight/2)
    awesome_button.size(100, 100)
    awesome_button.style('color', 'green')
    awesome_button.style('font-family', 'arial')
    awesome_button.style('background-color', 'pink')
    bg_color = createColorPicker(255, 0, 0)
    bg_color.position(windowWidth/2, 0)
    awesome_button.mousePressed(awesomeThing)
}

function draw()
{
    background(bg_color.color())
}

function awesomeThing()
{
    let awesome_link = createA('https://youtu.be/dQw4w9WgXcQ', 'Awesome Link')
    awesome_button.hide()
    awesome_link.position(windowWidth/2, 100)
    awesome_link.style('color', 'blue')
    awesome_link.style('font-size', '50px')
    awesome_link.style('font-family', 'arial')
    
}