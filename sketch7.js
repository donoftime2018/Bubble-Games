let bubbles = [];
let bubbleNumber;
let count = 0;

let bubblePop;
let backgroundMusic;
let endGameInterval;

let i = 1;

function preload()
{
    bubblePop = loadSound('pop.wav')
    backgroundMusic = loadSound('bg_music.mp3')
}

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight)

    bubblePop.setVolume(1.0)

    bubbleNumber = select("#bubbleCount")
    bubbleNumber.position((width/2)-150, 0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count
    
    ellipseMode(RADIUS)
    
    endGameInterval = setTimeout(endGame, 60000);

    playMusic();
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

function playMusic()
{
    backgroundMusic.setVolume(0.25)

    if (backgroundMusic.isLoaded())
        backgroundMusic.loop()
}

function increaseCount()
{
    ++count;
    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;

    if (count === 0+i*150)
    {
        clearInterval(endGameInterval)
        endGameInterval = setTimeout(endGame, 60000)
        i++;
    }

    if (count === 1000)
    {
        tooManyBubbles()
    }
}

function tooManyBubbles()
{
    backgroundMusic.stop()

    alert("OK that's too many bubbles for one day!");

    let totalBubbles = count;

    for (let i = 0; i < totalBubbles; i++)
    {
        bubbles.pop()
        decreaseCount()
    }
    
    noLoop()
    
    window.close()
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
    backgroundMusic.stop();

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