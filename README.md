# Timed-quiz

## Objective 

For this weeks assignment I was asked to create a timed quiz assesment based on questions about Javascript, once the quiz is completed I was then asked to create a system that tracks the score from my user and saves it to a local storage.

## Preview of Quiz

This code is a quiz that allows the user to answer a set of JavaScript questions within a 60-second time frame. The quiz is implemented in HTML, CSS, and JavaScript. It starts by displaying instructions for the quiz, which disappear when the user clicks the "Start" button. The quiz then displays a series of questions with multiple-choice answers, and the user must choose the correct answer within the given time limit.
At the end of the quiz, the user is prompted to enter their name, and their score is saved locally along with their name. The code uses an array of objects to store the quiz questions, choices, and correct answers. It also uses the setInterval() method to implement the countdown timer, and the clearInterval() method to stop the timer when the quiz is over.
The code also includes a function that checks whether the user's answer is correct and displays a message indicating whether the answer is correct or incorrect. If the answer is incorrect, the timer is penalized by subtracting five seconds from the remaining time.
Overall, the code is well-structured and follows best practices for HTML, CSS, and JavaScript. However, there are a few minor issues that could be improved, such as updating the message that displays when the quiz timer is up, and using more descriptive variable names.


## Deployed Site
https://nigeldwatkins.github.io/Timed-quiz/
<img width="1440" alt="Screenshot 2023-04-25 at 2 52 56 AM" src="https://user-images.githubusercontent.com/128034266/234197381-402a0cbc-7224-4feb-99f8-a6681c00e775.png">


Start quiz function with correct and incorrect answers:



https://user-images.githubusercontent.com/128034266/234198520-b590c59a-2a2a-47bb-bce0-47ed8da765ad.mov



Saving score with name to local storage:
<img width="1440" alt="Screenshot 2023-04-25 at 3 00 26 AM" src="https://user-images.githubusercontent.com/128034266/234199085-e1eb93cf-bfbb-4893-9d61-7eb9861b000b.png">

<img width="1440" alt="Screenshot 2023-04-25 at 3 00 45 AM" src="https://user-images.githubusercontent.com/128034266/234199090-9fbd9efe-e67d-4e14-af30-e163ed326959.png">



## Source

https://stackoverflow.com/questions/69108119/how-can-i-use-localstorage-to-display-the-values-on-my-web-page-using-javascript

MSU files: https://git.bootcampcontent.com/Michigan-State-University/MSU-VIRT-FSF-PT-03-2023-U-LOLC


## Author
Nigel Watkins : https://github.com/nigeldwatkins

