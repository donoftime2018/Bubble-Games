let bubbles = [];
let bubbleNumber;
let count = 0;

let bubblePop;
let backgroundMusic;
let endGameTimeout;

let timeElapsed;
let i = 1;

function preload()
{
    bubblePop = loadSound('pop.wav')
    backgroundMusic = loadSound('bg_music.mp3')
}

function setup()
{
    startGame();
    //timeElapsed = millis()
}

function draw()
{
    //timeElapsed = millis()
    background(255,20,147)
    for (let i = 0; i < bubbles.length; i++)
    {
        bubbles[i].display()
        bubbles[i].move()
    }
    
    textSize(25)
    fill(color('white'))
    timeElapsed = millis()
    text(timeElapsed.toFixed(0), (width/2)-97, 120)
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
        if (count > 0)
        {
            bubbles.pop()
            bubblePop.play()
            decreaseCount()
        }
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
        clearTimeout(endGameTimeout)
        endGameTimeout = setTimeout(endGame, 60000)
        i++;
    }

    if (count === 1)
    {
        endGameTimeout = setTimeout(endGame, 60000);
    }

    if (count === 1000)
    {
        tooManyBubbles()
    }
}

function tooManyBubbles()
{
    alert("That's too many bubbles for one day!")
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

function newGame()
{
    let response = window.prompt("Would you like to try again?", "Yes")

    let totalBubbles = count;

    if (response === "No" || response === "no")
    {
        for (let i = 0; i < totalBubbles; i++)
        {
            bubbles.pop()
            decreaseCount()
        }
        noLoop()
    
        window.close()
    }

    else if (response === "Yes" || response === "yes")
    {
        for (let i = 0; i < totalBubbles; i++)
        {
            bubbles.pop()
            decreaseCount()
        }
        clearTimeout(endGameTimeout)
        timeElapsed = 0;
        startGame();
    }

    else
    {
        for (let i = 0; i < totalBubbles; i++)
        {
            bubbles.pop()
            decreaseCount()
        }
        noLoop()
    
        window.close()
    }
}

function endGame()
{
    backgroundMusic.stop();

    alert("Time's up!\n")
    alert("You made " + count + " bubbles!")
    newGame()
}

function startGame()
{
    let message = "From the moment you create the first bubble, you'll have 60 seconds to populate the screen with as many bubbles as possible\n"
    message+= "Click anywhere in the colored area to create a new bubble and press 'Enter' to delete the most recently created bubble\n"
    message+="Every time you pop 150 bubbles, you'll gain an extra 60 seconds to make as many bubbles as you like!"
    alert(message);

    createCanvas(window.innerWidth, window.innerHeight)

    bubblePop.setVolume(1.0)

    bubbleNumber = select("#bubbleCount")
    bubbleNumber.position((width/2)-150, 0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count
    
    ellipseMode(RADIUS)

    playMusic();

}