function check() {
    document.getElementById("demo").style.visibility = "hidden";
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0; //variable initialization to 0 to count the number of correct answers
    var marks = 0; //variable initialization to 0 to find the sum of marks for correct answers

    var correct_ans = "#109b0a";
    var wrong_ans = "red";

    if (question1 == "Craig Stadler") {
        correct++; //Increase to no of correct if answer correct 
        marks = marks + 2; //if correct also incraese the marks by 2
        document.getElementById("question1").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";

    } else {
        marks--; //if answer wrong deducte -1 
        document.getElementById("question1").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Craig Stadler </font>";
    }


    if (question2 == "5 minutes") {
        correct++;
        marks = marks + 2;
        document.getElementById("question2").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question2").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is 5 minutes </font>";
    }


    if (question3 == "Bernhard Langer") {
        correct++;
        marks = marks + 2;
        document.getElementById("question3").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question3").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Bernhard Langer </font>";
    }


    if (question4 == "Jack Nicklaus") {
        correct++;
        marks = marks + 2;
        document.getElementById("question4").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question4").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Jack Nicklaus </font>";
    }

    if (question5 == "Scotland") {
        correct++;
        marks = marks + 2;
        document.getElementById("question5").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question5").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Scotland </font>";
    }


    if (question6 == "Augusta in Georgia") {
        correct++;
        marks = marks + 2;
        document.getElementById("question6").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question6").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Augusta in Georgia </font>";
    }


    if (question7 == "18 holes") {
        correct++;
        marks = marks + 2;
        document.getElementById("question7").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question7").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is 18 holes </font>";
    }


    if (question8 == "4.5 inches") {
        correct++;
        marks = marks + 2;
        document.getElementById("question8").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question8").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is 4.5 inches </font>";
    }


    if (question9 == "Only lightning") {
        correct++;
        marks = marks + 2;
        document.getElementById("question9").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question9").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Only lightning </font>";
    }


    if (question10 == "Spoon") {
        correct++;
        marks = marks + 2;
        document.getElementById("question10").innerHTML = "<font color=" + correct_ans + "> Your answer is correct </font>";
    } else {
        marks--;
        document.getElementById("question10").innerHTML = "<font color=" + wrong_ans + ">Your answer is incorrect, The correct answer is Spoon </font>";
    }

    var comments = ["Excellent, Great job", "Keep up the good work", "Hmmm.. Not bad, can try to do even better", "Can improve...", "Too bad, you'll have to work hard"];
    var pictures = ["Images/Quiz_question/excellent.gif", "Images/Quiz_question/good.gif", "Images/Quiz_question/notBad.gif", "Images/Quiz_question/average.gif", "Images/Quiz_question/bad.gif"];

    var range;
    if (marks <= 0) {
        range = 4;
    }
    if (marks >= 1 && marks <= 5) {
        range = 3;
    }
    if (marks >= 6 && marks <= 10) {
        range = 2;
    }
    if (marks >= 11 && marks <= 15) {
        range = 1;
    }
    if (marks >= 16 && marks <= 20) {
        range = 0;
    }


    //Changing the summary box color according to marks
    var summaryBox = document.getElementById("after_submit");
    if (marks <= 0) {              //if marks less than 0
        summaryBox.style.backgroundColor = '#D50D0D'; //bad
    }
    if (marks >= 1 && marks <= 5) {     //if marks between 1 and 5
        summaryBox.style.backgroundColor = '#db34ca'; //average
    }
    if (marks >= 6 && marks <= 10) {    //if marks between 6 and 10
        summaryBox.style.backgroundColor = '#f77c09'; //not bad
    }
    if (marks >= 11 && marks <= 15) {   //if marks between 11 and 15
        summaryBox.style.backgroundColor = '#0844a5'; //good
    }
    if (marks >= 16 && marks <= 20) {   //if marks between 16 and 20
        summaryBox.style.backgroundColor = '#049b07'; //excellent
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = comments[range];
    document.getElementById("picture").src = pictures[range];
    document.getElementById("marks").innerHTML = "You'v scored " + marks + " out of 20";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " questions correct.";
    document.getElementById("time").innerHTML = "Time taken to complete : " + ((300 - time) / 60) + " Minutes";
    document.getElementById("demo").style.display = 'none';
}


var time = 300;

function quiztime() {
    document.getElementById("demo").style.display = "block";
    if (time > 0) {
        time--;
        document.getElementById("demo").innerHTML = "Remaining Time " + time + " seconds.";
        setTimeout("quiztime()", 1000);
    } else {
        check();
    }
}

document.getElementById("demo").style.display = "none";
setTimeout("quiztime()", 5000);