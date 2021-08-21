let bubbles_removed = 0;
let bubbles = new Array(400);
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

    createCanvas(window.innerWidth, window.innerHeight)
    for (let i = 0; i < bubbles.length; i++)
    {
        //let num = Math.floor(Math.random()*(2-1)+1)
        bubbles[i] = new Bubble(Math.floor(random(windowWidth)), Math.floor(random(windowHeight)))

        // if (num === 1)
        // {
        //     if (bubbles[i].getY() > height/2)
        //     {
        //         bubbles[i].setY(bubbles[i].getY()-50)
        //     }
        // }

        // else
        // {
        //     if (bubbles[i].getY() < height/2)
        //     {
        //         bubbles[i].setY(bubbles[i].getY()+50)
        //     }
        // }
    }

    bubbleNum = select("#bubbleCount")
    bubbleNum.position((width/2)-130, 0)

    bubblePop.setVolume(1.0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;

    ellipseMode(RADIUS)

    playMusic();

    endGameInterval = setTimeout(endGame, 230000);
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

    // if (bubbles_removed === 0+i*200)
    // {
    //     clearInterval(endGameInterval)
    //     endGameInterval = setTimeout(endGame, 230000)
    //     i++;
    // }

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

    alert(message);

    window.close()
}
