//Animation


function moveBall() {
    var isMoving = true;
    var ball = document.getElementById('ball');
    var position = 0;
    var direction = 1;
    var speed = 1.5;

    function move() {
        if (isMoving) {
            position += direction * speed;
            ball.style.left = position + 'px';

            if (position >= window.innerWidth - ball.clientWidth || position <= 0) {
                direction = -direction;
            }

            requestAnimationFrame(move);
        }
    }

    ball.addEventListener('click', function () {
        direction = -direction;
    });

    move();
}
moveBall();


//Card
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert('click the button for detailed information');
    });
});

//Category
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = ev.target;

    // Проверка, является ли цель категорией и соответствует ли элемент категории
    if (dropTarget.classList.contains("categories") && dropTarget.id === "category1") {
        if (draggedElement.textContent === "Barcelona" || draggedElement.textContent === "Manchester City" || draggedElement.textContent === "Real Madrid") {
            dropTarget.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png")';
            playYesSound()
        }
        else {
            dropTarget.style.backgroundImage = "url('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png')";
            playNoSound()
        }
        setTimeout(function () {
            dropTarget.style.backgroundImage = "url('https://vesti.kz/userdata/news/2022/news_316207/crop_b/photo_183379.jpg')";
        }, 1000);
       
    } else if (dropTarget.classList.contains("categories") && dropTarget.id === "category2") {
        if (draggedElement.textContent === "Liverpool" || draggedElement.textContent === "Union Berlin") {
            dropTarget.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png")';
            playYesSound()
        }
        else {
            dropTarget.style.backgroundImage = "url('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png')";
            playNoSound()
        }
        setTimeout(function () {
            dropTarget.style.backgroundImage = "url('https://ss.sport-express.ru/userfiles/materials/156/1562470/volga.jpg')";
        }, 1000);
        
    } else if (dropTarget.classList.contains("categories") && dropTarget.id === "category3") {
        if (draggedElement.textContent === "Leicester") {
            dropTarget.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png")';
            playYesSound()
        }
        else {
            dropTarget.style.backgroundImage = "url('https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png')";
            playNoSound()
        }
        setTimeout(function () {
            dropTarget.style.backgroundImage = "url('https://bukmekerov.net/wp-content/uploads/2021/05/Liga-konferentsij-UEFA-reglament-format-pravila.jpg')";
        }, 1000);
        

    }
    
    // Перемещаем элемент в целевую категорию
    dropTarget.appendChild(draggedElement);
   
    
}

function playYesSound() {
    // Создаем новый объект Audio и воспроизводим звук
    var yesSound = new Audio('yes.mp3');
    yesSound.play();
}
function playNoSound() {
    // Создаем новый объект Audio и воспроизводим звук
    var noSound = new Audio('no.mp3');
    noSound.play();
}

//Video
function toggleFullScreen() {
    var video = document.getElementById("myVideo");

    if (!document.fullscreenElement) {
       
            video.requestFullscreen();
       
    } else {
        
            document.exitFullscreen();
    }
}
//Slova Podskazki
function showTooltip(element) {
    var tooltip = element.getElementsByClassName("tooltiptext")[0];
    tooltip.style.visibility = "visible";
}

function hideTooltip(element) {
    var tooltip = element.getElementsByClassName("tooltiptext")[0];
    tooltip.style.visibility = "hidden";
}
//Modal window
document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn1');
    var modal = document.getElementById('myModal1');
    var closeModalBtn = document.getElementById('closeModalBtn1');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn2');
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementById('closeModalBtn2');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Todo list
document.addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        checkbox.onchange = function () {
            if (checkbox.checked) {
                taskLabel.style.textDecoration = "line-through";
            } else {
                taskLabel.style.textDecoration = "none";
            }
        };

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
})




//registration
$(document).ready(function () {
    $('#message').keyup(function () {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var charactersRemaining = maxLength - currentLength;
        $('#charCount').text(charactersRemaining);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Form');
    const messageInput = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (messageInput.value.trim() === '') {
            errors.push('Message is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            errors.push('Invalid email format');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            errorMessages.innerHTML = ''; // Clear any previous error messages
        }
    });

    function isValidEmail(email) {
        // This is a simple email validation function, you can use a more complex one if needed.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

$(document).ready(function () {
    $('#textarea').keyup(function () {
        var maxLength = $(this).attr('maxlength');
        var currentLength = $(this).val().length;
        var charactersRemaining = maxLength - currentLength;
        $('#charCount').text(charactersRemaining);
    });
});


$("body").on('click', '.toggle-password', function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#password");
    if (input.attr("type") === "password") {
        input.attr("type", "text");
        document.getElementById("pass").innerHTML = "Hide";
    } else {
        input.attr("type", "password");
        document.getElementById("pass").innerHTML = "Show";
    }


});

$(document).ready(function () {
    $('#agreeCheckbox').on('change', function () {
        if ($(this).is(':checked')) {
            $('#submitButton').prop('disabled', false);
        } else {
            $('#submitButton').prop('disabled', true);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        let errors = [];

        if (nameInput.value.trim() === '') {
            errors.push('Name is required');
        }

        if (emailInput.value.trim() === '') {
            errors.push('Email is required');
        } else if (!isValidEmail(emailInput.value)) {
            errors.push('Invalid email format');
        }

        if (passwordInput.value.trim() === '') {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            event.preventDefault(); // Prevent form submission
            errorMessages.innerHTML = errors.join('<br>');
        } else {
            alert("Confirm submitting the form"); // Clear any previous error messages
        }
    });

    function isValidEmail(email) {
        // This is a simple email validation function, you can use a more complex one if needed.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});



//timer

let countdownInterval;
let currentTime = 0;
const timerDisplay = document.getElementById('timer');
const durationInput = document.getElementById('duration');

function startTimer() {
    clearInterval(countdownInterval);

    const duration = parseInt(durationInput.value);

    if (isNaN(duration) || duration <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

    currentTime = duration;
    updateTimerDisplay();
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (currentTime > 0) {
        currentTime--;
        updateTimerDisplay();
    } else {
        clearInterval(countdownInterval);
        alert('Timer has ended!');
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

//Script for accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Function for tab
function openCity(evt, playerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(playerName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Audio
const x = document.getElementById("myAudio");
x.loop = true;
function playAudio() {
    x.play();
}
function pauseAudio() {
    x.pause();
}
//qwiz
const questions = [
    {
        question: 'Who holds the record for the most goals scored in FIFA World Cup history?',
        answers: [
            { text: 'Lionel Messi', correct: false },
            { text: 'Cristiano Ronaldo', correct: true },
            { text: 'Pele', correct: false }
        ]
    },
    {
        question: 'Which country holds the record for the most victories in the FIFA World Cup?',
        answers: [
            { text: 'Germany', correct: false },
            { text: 'Brazil', correct: true },
            { text: 'Argentina', correct: false }
        ]
    },
    {
        question: 'In what year was FIFA (Fédération Internationale de Football Association) founded?',
        answers: [
            { text: '1904', correct: true },
            { text: '1923', correct: false },
            { text: '1948', correct: false }
        ]
    },
    {
        question: 'How many players are on the field during a standard football match?',
        answers: [
            { text: '9', correct: false },
            { text: '11', correct: true },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'Who won the FIFA Ballon d\'Or in 2020?',
        answers: [
            { text: 'Lionel Messi', correct: true },
            { text: 'Cristiano Ronaldo', correct: false },
            { text: 'Neymar', correct: false }
        ]
    },
    {
        question: 'Which club won the UEFA Champions League in the 2020/2021 season?',
        answers: [
            { text: 'Barcelona', correct: false },
            { text: 'Manchester City', correct: false },
            { text: 'Chelsea', correct: true }
        ]
    },
    {
        question: 'Who is the all-time leading goal scorer in the history of the UEFA Champions League?',
        answers: [
            { text: 'Lionel Messi', correct: false },
            { text: 'Cristiano Ronaldo', correct: true },
            { text: 'Raul', correct: false }
        ]
    },
    {
        question: 'What is the name of the trophy awarded to the winner of the UEFA Champions League?',
        answers: [
            { text: 'Golden Ball', correct: false },
            { text: 'Cup of Cups', correct: false },
            { text: 'Big Ear', correct: true }
        ]
    },
    {
        question: 'Who captained the French national team in the 2018 World Cup?',
        answers: [
            { text: 'Paul Pogba', correct: false },
            { text: 'Antoine Griezmann', correct: false },
            { text: 'Hugo Lloris', correct: true }
        ]
    },
    {
        question: 'How many referees typically officiate a football match?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    clearAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const isCorrect = answer.correct;
    if (isCorrect) {
        nextButton.classList.remove('hide');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        alert('quiz completed!');
    }
}

startQuiz();