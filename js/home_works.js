// gmail check
const gmailInput = document.querySelector('#gmail_input')
const gmailButtom = document.querySelector('#gmail_button')
const gmailResault = document.querySelector('#gmail_result')
const regEXP = /@gmail.com/
gmailButtom.onclick=() => {
    if (regEXP.test(gmailInput.value)) {
        gmailResault.innerHTML  = 'молодец ты поставил @gmail.com ;) ' +
            'ахахахахах теперь к тебе будет приходить рассылка &#128520;'
        gmailResault.style.color = 'green'
    }
    else {
        gmailResault.innerHTML  = 'поставь @gmail.com и будет все OK :/'
        gmailResault.style.color = 'red'
    }
}
// -----------------------------------------------
const childBlock = document.querySelector('.child_block');
let positionX = 0;
let positionY = 0;
let direction = 'right';

const move = () => {
    if (direction === 'right') {
        if (positionX < 448) {
            positionX++;
            childBlock.style.left = `${positionX}px`;
        } else {
            direction = 'down';
        }
    } else if (direction === 'down') {
        if (positionY < 448) {
            positionY++;
            childBlock.style.top = `${positionY}px`;
        } else {
            direction = 'left';
        }
    } else if (direction === 'left') {
        if (positionX > 0) {
            positionX--;
            childBlock.style.left = `${positionX}px`;
        } else {
            direction = 'up';
        }
    } else if (direction === 'up') {
        if (positionY > 0) {
            positionY--;
            childBlock.style.top = `${positionY}px`;
        } else {
            direction = 'right';
        }
    }

    setTimeout(move, 1);
};

move();
// _______________________________________________
const milisek = document.querySelector('#ml-secondsS');
const secondsS = document.querySelector('#secondsS');
const minutesS = document.querySelector('#minutesS');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let timerInterval;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;

const updateMiliseconds = () => {
    miliseconds++;
    if (miliseconds >= 100) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
            }
            minutesS.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        }
        secondsS.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    }
    milisek.innerHTML = miliseconds < 10 ? `0${miliseconds}` : miliseconds;
};

start.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(updateMiliseconds, 10);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

reset.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    milisek.innerHTML = '00';
    secondsS.innerHTML = '00';
    minutesS.innerHTML = '00';
});

