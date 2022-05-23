let bubbles = [];
let bubbleNumber;
let count = 0;

let bubblePop;
let backgroundMusic;
let endGameInterval;

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
    text(timeElapsed.toFixed(0), (width/2)-82, 120)
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
        clearInterval(endGameInterval)
        endGameInterval = setTimeout(endGame, 60000)
        i++;
    }

    if (count === 1)
    {
        endGameInterval = setTimeout(endGame, 60000);
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
        clearInterval(endGameInterval)
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

function startGame()
{
    let message = "From the moment you create the first bubble, you'll have 60 seconds to populate the screen with as many bubbles as possible\n"
    message+= "Click anywhere in the colored area to create a new bubble and press 'Enter' to delete the most recently created bubble\n"
    message+="Every time you pop 150 bubbles, you'll gain an extra 60 seconds to make as many bubbles as you like!"
    message+="\nSomething SUPER incredible happens when you make 1000 bubbles!";
    alert(message);

    createCanvas(window.innerWidth, window.innerHeight)

    bubblePop.setVolume(1.0)

    bubbleNumber = select("#bubbleCount")
    bubbleNumber.position((width/2)-150, 0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count
    
    ellipseMode(RADIUS)

    playMusic();

//    // redraw();
//    timeElapsed = millis()
//    text(timeElapsed, (width/2), 100)
}