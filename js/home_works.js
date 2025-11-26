const gmailInput = document.getElementById("gmail_input");
const gmailButtton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

const secondsBlock = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const regExp = /[\w.]+@[\w]+\.[a-zA-Z]{2,}/

gmailButtton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'ERROR'
        gmailResult.style.color = 'red'
    }
}

let positionX = 0;
let positionY = 0;

const parentBlockWidth = parentBlock.clientWidth - childBlock.offsetWidth;
const parentBlockHeight = parentBlock.clientHeight - childBlock.offsetHeight;

let direction = "right"; 

function moveBlock() {
    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    if (direction === "right") {
        positionX++;
        if (positionX >= parentBlockWidth) direction = "down";
    }

    else if (direction === "down") {
        positionY++;
        if (positionY >= parentBlockHeight) direction = "left";
    }

    else if (direction === "left") {
        positionX--;
        if (positionX <= 0) direction = "up";
    }

    else if (direction === "up") {
        positionY--;
        if (positionY <= 0) direction = "right";
    }

    requestAnimationFrame(moveBlock);
}

moveBlock();

// function moveToRight() {
//     if (pos < 448) {        
//         pos++;
//         block.style.left = pos + "px";
//         requestAnimationFrame(moveToRight);
//     }
// }

// moveToRight();

let counter = 0;        
let timerId = null;     
let isRunning = false;

function updateUI() {
    secondsBlock.textContent = counter;
}

function startTimer() {
    if (isRunning) return;          
    isRunning = true;

    timerId = setInterval(() => {
        counter++;
        updateUI();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
    isRunning = false;             
}

function resetTimer() {
    clearInterval(timerId);
    counter = 0;
    isRunning = false;
    updateUI();                    
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


updateUI();