let bubbles_removed = 0;
let bubbles = new Array(500);
let count = bubbles.length;

let bubbleNum;

let bubblePop;
let backgroundMusic;

let endGameInterval;

let i = 1;

function preload()
{
    bubblePop = loadSound('pop.wav');
    backgroundMusic = loadSound('bg_music.mp3')
}

function setup()
{

    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < bubbles.length; i++)
    {
        bubbles[i] = new Bubble(random(width), random(height))
    }

    bubbleNum = select("#bubbleCount")
    bubbleNum.position(width/2, 0)

    bubblePop.setVolume(1.0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;

    ellipseMode(RADIUS)

    playMusic();

    endGameInterval = setTimeout(endGame, 60000);
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
    for (let i = 0; i < bubbles.length; i++)
    {
        if (bubbles[i].isClicked(mouseX, mouseY)==true)
        {
            bubbles.splice(i, 1)
            bubblePop.play()
            decreaseCount();
            //bubbles_removed++;
        }
    }
}

function decreaseCount()
{
    if (count > 0)
    {
        --count;
        document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;
        bubbles_removed++;
    }

    if (bubbles_removed === 0+i*65)
    {
        clearInterval(endGameInterval)
        endGameInterval = setTimeout(endGame, 60000)
        i++;
    }

    if (count === 0)
    {
        background(255, 20, 147)
        allBubblesPopped();
    }
}

function endGame()
{
    backgroundMusic.stop();
    
    alert("Time's up!\n")
    alert("You popped " + bubbles_removed + " bubbles!")

    noLoop()
    
    window.close()
}

function playMusic()
{
    backgroundMusic.setVolume(0.25)
    
    if (backgroundMusic.isLoaded())
        backgroundMusic.loop()
}

function allBubblesPopped()
{
    backgroundMusic.stop();
    
    let message = "You have popped all " + bubbles_removed + " bubbles!";

    setInterval(2000, alert(message))

    window.close()
}
