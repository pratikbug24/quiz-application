/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
"JS": [
{
"id": 1,
"question": "Which of the following is not a keyword in C?",
"options": [
{
"a": " int",
"b": "float",
"c": "char",
"d": "void"
}
],
"answer": "void",
"score": 0,
"status": ""
},
{
"id": 2,
"question": "What data type would you use to store a character in C?",
"options": [
{
"a": " int",
"b": "float",
"c": "char",
"d": "void"
}
],
"answer": "char",
"score": 0,
"status": ""
},
{
    "id": 3,
    "question": "Which of the following is not a valid identifier",
    "options": [
    {
    "a": "int_variable",
    "b": "float_variable",
    "c": "char_variable",
    "d": "1st_variable"
    }
    ],
    "answer": "1st_variable",
    "score": 0,
    "status": ""
    },
    {
        "id": 4,
        "question": "Functions in C Language are always _________",
        "options": [
        {
        "a": "Internal",
        "b": "External",
        "c": "Both Internal and External",
        "d": "External and Internal are not valid terms for functions"
        }
        ],
        "answer": "External",
        "score": 0,
        "status": ""
        },
        {
            "id": 5,
            "question": "How many number of pointer (*) does C have against a pointer variable declaration?",
            "options": [
            {
            "a": "7",
            "b": "127",
            "c": "255",
            "d": "No limits"
            }
            ],
            "answer": "No limits",
            "score": 0,
            "status": ""
            },
            
]
}
var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque >= totalque) {
    // Show submit button
    $('#next').hide();
    $('#submit').show();
    // Rest of the code to display result...
}
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JS[this.currentque].id + '.');
$("#question").html(quiz.JS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JS[this.currentque].options[0]) {
if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JS[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.JS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JS[j].score == 0) {
res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JS[this.currentque].answer) {
if (quiz.JS[this.currentque].score == "") {
quiz.JS[this.currentque].score = 1;
quiz.JS[this.currentque].status = "correct";
}
} else {
quiz.JS[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});

var totalTimeInSeconds = 5 * 60;

// Function to update the timer
function updateTimer() {
    var minutes = Math.floor(totalTimeInSeconds / 60);
    var seconds = totalTimeInSeconds % 60;
    document.getElementById('timer').innerHTML = 'Time Remaining: ' + minutes + 'm ' + seconds + 's';
    totalTimeInSeconds--;
    
    // Check if time is up
    if (totalTimeInSeconds < 0) {
        clearInterval(timerInterval); // Stop the timer
        submitQuiz(); // Automatically submit the quiz
    }
}

// Start the timer
var timerInterval = setInterval(updateTimer, 1000);

// Function to submit the quiz
function submitQuiz() {
    // You can replace this with your code to submit the quiz automatically
    console.log('Quiz submitted automatically');
}

// Show submit button at the end of the quiz
if (this.currentque = totalque) {
    // Show submit button
    $('#next').hide();
    $('#submit').show();
    // Rest of the code to display result...
}

$('#submit').click(function(e) {
    e.preventDefault();
    submitQuiz();
});
