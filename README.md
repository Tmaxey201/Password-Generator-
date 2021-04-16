# Password Generator 

## The Goal 

### The goal of this project was to create a randomly generated password give specific criteria.

1.) When the user presses the button to generate a password, then they are presented with a series of prompts.  

2.) The first prompt is to pick between 8 and 128 characters. If they do not pick a number between that then they are told to retry and give the correct parameters.  

3.) If they give the correct parameters then they are presented with a series of prompts to chose whether or not they want lowercase, uppercase, numbers, and special characters in their randomly generated password.  

4.) If they have selected at least 1 character type then a password is generated and presented in the password box. 

## This is the explanation of the Javascript code I used to create this password generator. 


-create a method to retrieve input from user 

-created an if else statement that will "prompt" (with a confirm window) the user to say yes or no to using different characters



-repeat this if else statement for each character type

-created a variable using concatenation of previous variables to use for the upcoming for loop

-used a for loop to create the password using the random variable