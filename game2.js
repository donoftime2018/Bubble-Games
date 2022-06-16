let bubbles_popped = 0;
let bubbles = new Array(400);
let count = bubbles.length;

let bubbleNum;

let bubblePop;
let backgroundMusic;

let endGameInterval;

function preload()
{
    bubblePop = loadSound('pop.wav');
    backgroundMusic = loadSound('bg_music.mp3')
}

function setup()
{
    startGame();
}

function draw()
{
    background(255,20,147)
    for (let i = 0; i < bubbles.length; i++)
    {
        bubbles[i].display()
        bubbles[i].move()
    }

    if (count === 1)
        clearInterval(endGameInterval)
    
    textSize(25)
    fill(color('white'))
    timeElapsed = millis()
    text(timeElapsed.toFixed(0), (width/2)-58, 120)
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
            bubbles_popped++;

            if (bubbles_popped === 1)
            {
                endGameInterval = setTimeout(endGame, 230000);
            }
        }
    }
}

function decreaseCount()
{
    if (count > 0)
    {
        --count;
        document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;
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
    alert("You popped" + bubbles_popped + " bubbles!\n")

    response = window.prompt("Do you want to try again?", "yes");
    
    if (response === "yes" || response === "Yes")
    {
        clearInterval(endGameInterval)
        startGame()
    }

    else if (response === "no" || response === "No")
    {
        window.close()
    }

    else
    {
        window.close()
    }
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
    
    let message = "You have popped all " + bubbles_popped + " bubbles!";

    alert(message);

    response = window.prompt("Do you want to try again?", "yes");
    
    if (response === "yes" || response === "Yes")
    {
        clearInterval(endGameInterval)
        startGame()
    }

    else if (response === "no" || response === "No")
    {
        window.close()
    }

    else
    {
        window.close()
    }
    
}

function startGame()
{
    let message = "From the moment you pop the first bubble, you will have 3 minutes and 50 seconds to pop as many bubbles as you can!\n"
    message+= "To pop a bubble just click on it!\n"
    message+= "When you get down to one remaining bubble, you'll have as much time as you like to pop it\n"
    message+="Hint: It is possible for you to remove a cluster of bubbles (i.e. more than 1) depending on where you click!"
    alert(message);

    createCanvas(window.innerWidth, window.innerHeight)
    
    for (let i = 0; i < bubbles.length; i++)
    {
        bubbles[i] = new Bubble(Math.floor(random(windowWidth)), Math.floor(random(windowHeight)))
    }

    bubbleNum = select("#bubbleCount")
    bubbleNum.position((width/2)-130, 0)

    bubblePop.setVolume(1.0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;

    ellipseMode(RADIUS)

    playMusic();
}