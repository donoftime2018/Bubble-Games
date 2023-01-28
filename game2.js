let bubbles_popped = 0;
let bubbles = [];
let count = bubbles.length;

let bubbleNum;

let popButton;

let bubblePop;
let backgroundMusic;

let endGameTimeout;

let timeElapsed;

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
    
    textSize(25)
    fill(color('white'))
    timeElapsed = millis()
    text(timeElapsed.toFixed(0), (width/2)-63, 120)
}

function mousePressed()
{
    for (let i = 0; i < bubbles.length; i++)
    {
        if (bubbles[i].isClicked(mouseX, mouseY)==true)
        {
            bubbles.splice(i, 1)
            bubblePop.play()
            bubbles_popped++;
            decreaseCount();

            if (bubbles_popped === 1)
            {
                endGameTimeout = setTimeout(endGame, 230000)
            }

            if (count === 20)
            {
                popButton.show()
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
        allBubblesPopped();
    }

    if (count === 1)
    {
        clearTimeout(endGameTimeout)
    }
}

function popRemainingBubbles()
{
    let remaining = bubbles.length;
    for (let i = 0; i < remaining; i++)
    {
        bubbles.splice(i, 1);
        bubblePop.play();
        bubbles_popped++;
        decreaseCount()
    }
}

function endGame()
{
    backgroundMusic.stop();
    
    alert("Time's up!\n")
    alert("You popped " + bubbles_popped + " bubbles!\n")

    newGame()
}

function newGame()
{
    let response = window.prompt("Do you want to try again?", "yes");
    
    if (response === "yes" || response === "Yes")
    {
        clearTimeout(endGameTimeout)
        bubbles_popped = 0
        timeElapsed = 0;
        popButton.hide()
        startGame()
    }

    else if (response === "no" || response === "No")
    {
        noLoop()
        window.close()
    }

    else
    {
        noLoop()
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

    newGame()
    
}

function startGame()
{
    let message = "From the moment you pop the first bubble, you will have 3 minutes and 50 seconds to pop as many bubbles as you can!\n"
    message+= "To pop a bubble just click on it!\n"
    message+="When there are 20 more bubbles, a button will appear that you can press to pop all the remaining bubbles if you so desire.\n"
    message+= "When you get down to one remaining bubble, you'll have as much time as you like to pop it\n"
    message+="Hint: It is possible for you to remove a cluster of bubbles (i.e. more than 1) depending on where you click!"
    alert(message);
    
    while(true)
    {
       let bubblesLength = prompt("Would you like to pop 200, 300, or 400 bubbles?")
       count = Number(bubblesLength)

        if (count === 200 || count === 300 || count === 400)
        {
            break;
        }

        else
        {
            alert("Invalid input")
            continue;
        }
    }

    createCanvas(window.innerWidth, window.innerHeight)
    
    for (let i = 0; i < count; i++)
    {
        bubbles[i] = new Bubble(Math.random()*width, Math.random()*height)
    }

    bubbleNum = select("#bubbleCount")
    bubbleNum.position((width/2)-130, 0)

    bubblePop.setVolume(1.0)

    document.getElementById("bubbleCount").innerHTML = "Bubbles: " + count;

    ellipseMode(RADIUS)

    popButton = createButton('Pop all Bubbles!');
    popButton.position((width/2)-130, (height/2))

    popButton.style('font-size', '30px')
    popButton.style('border-color', 'aqua')
    popButton.style('color', 'white')
    popButton.style('text-align', 'center')
    popButton.style('background-color', 'red')
    popButton.mousePressed(popRemainingBubbles)
    popButton.hide()

    playMusic();
}