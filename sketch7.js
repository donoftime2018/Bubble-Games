let bubbles = [];
let bubbleNumber;
let count = 0;

let bubblePop;

function preload()
{
    bubblePop = loadSound('319107__duffybro__pop-made-by-duffybro-[AudioTrimmer.com].wav')
}

function setup()
{
    let message = "You'll have 60 seconds to populate the screen with as many bubbles as possible\n"
    message+= "Click anywhere in the colored area to create a new bubble and press 'Enter' to delete a bubble"
    alert(message)
    createCanvas(windowWidth, windowHeight)

    bubbleNumber = select("#bubbleCount")
    bubbleNumber.position(width/2, 0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count
    
    ellipseMode(RADIUS)
    
    setTimeout(endGame, 60000);
}

function draw()
{
    background(255,20,147)
    for (let i = 0; i < bubbles.length; i++)
    {
        bubbles[i].display()
        bubbles[i].move()
    }
}

function mousePressed()
{
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height)
    {
        bubbles.push(new Bubble(Math.floor(mouseX), Math.floor(mouseY)))
        bubblePop.play()
        increaseCount()
    }
}

function keyPressed()
{
    if (keyCode === ENTER)
    {
        bubbles.pop()
        bubblePop.play()
        decreaseCount()
    }
}

function increaseCount()
{
    ++count;
    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;
}

function decreaseCount()
{
    if (count > 0)
    {
        --count;
        document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;
    }
}

function endGame()
{
    alert("Time's up!\n")
    alert("You made " + count + " bubbles!")

    let totalBubbles = count;

    for (let i = 0; i < totalBubbles; i++)
    {
        bubbles.pop()
        decreaseCount()
    }
    noLoop()
    
    window.close()
}