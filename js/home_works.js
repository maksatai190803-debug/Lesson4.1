const gmailInput = document.getElementById("gmail_input");
const gmailButtton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");
const block = document.querySelector(".child_block");

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

let pos = 0; 

function moveToRight() {
    if (pos < 448) {        
        pos++;
        block.style.left = pos + "px";
        requestAnimationFrame(moveToRight);
    }
}

moveToRight();
