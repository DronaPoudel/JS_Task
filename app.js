// Practise Level 1

// Task 1 :Task 1 - declare variables, but assign values to those variables after declaration on the next line and show it on a popup and in a console.
let myName;
myName = 'dron';
// window.alert(myName);
// console.log(myName);

// Task 2: use a different naming convention and create a few variables of your choice and store values of different data types in it.
var midName = null;
var fName = "Dronachandra";
var lName = "Poudel";
let favNum = 8;
isMale = true;
var status = undefined;

// Task 3 Take 2 different inputs using prompt() and use string concatenation operator to show the results in the console
// var fName = prompt('Enter First Name ');
// var lName = prompt (' Enter last name ');
// console.log(fName + lName);

// task 4 Show warnings and errors in the console
console.warn('name suspected');
console.error('myName not according to citizenship');

// Task 5 Explore what is dynamically typed language, and why is js a dynamically typed language.
// A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc.
// JS does not require the explicit declaration of the variables before they're used. So, it's dynamically typed


// Practise Level 2
// ----------------

/* Task 1 : Perform addition, subtraction, multiplication, and division
by taking input using the prompt() function and show all the results
by concatenating it with a string like: sum is ... , product is ...*/
// var firstNumber = parseInt(prompt('Enter First number'));
// var secondNumber = parseInt(prompt('Enter Second Number'));
// const sum = firstNumber + secondNumber;
// const diff = firstNumber - secondNumber;
// const prod = firstNumber * secondNumber;

window.alert(
    // `sum of ${firstNumber} and ${secondNumber} is ${sum}
    // Difference of ${firstNumber} and ${secondNumber} is ${diff}
    // Product of ${firstNumber} and ${secondNumber} is ${prod}`
);

/* task 2 : Declare 5 different variables using let and 5 different
variables using var but don't assign values to it and log all those
variables in the console*/
/*let countryName = 'Nepal';
let cityName    = 'kathmandu';
let provinceNo  = 5;
let streetName  = 'San Kha Mul 5';
let objects   = [{'id' : 1, name : 'cupboard'},
                  { 'id' : 2, name : 'lowbed'},
                  {'id' : 3, name : 'sofa'},
                  'metadata': {
                      'homebuilt' :'1999';
                      'materials' : 'cement';
                  }]
var isMyHouse   = false;
var rooms       = [kitechen, dinning, guest];
var flatsNumber = 1;
var gardensNo   = null;
var comment     = undefined;*/



// console.log(countryName, cityName, provinceNo, streetName, postalCode, isMyHouse, roomsNumber, flatsNumber, hasGarden, comment)


/* Task 3 : Create a constant and try to create another constant with
the same name and see what happens, fix the mistake if something
goes wrong.*/
const userName = 'Dron';
// const userName = 'Drona';

/* Task 4 Declare two variables using let on the same line without
terminating the line and store true value in both the variables and
perform addition and show the result on the console and try to
analyze the code.*/
let isboy = true , isMature = true
var adultTest = isboy + isMature;
console.log(adultTest);


// Practise Level 3
/* Task 1 Explore parseFloat() function and pass integer like 1 or 2
and show the result of it on the console*/
var test = parseFloat("10");
console.log(test)

/* task 2: Use the + unary operator in a string that contains the
number '999' and add 1 to it and show the output on the console.
Note: the output should be 1000*/
var string = '999';
console.log (parseInt(string) + 1)

/* Task 3 Use the - unary operator to the string containing a number
and show the message into the console*/
var string = '1000';
console.log ( string - 1 )

/* Task 4 Identify the data type of the value returned by typeof
operator (Hint: you can test it on the console)*/
var data = 123
typeCheck = typeof(data);
console.log(typeof(typeCheck));

// Task 5
var quote = `"Programming is a fun game"`;
console.log(`Ram said, ${quote}`);

/* Task 6 Create an object using object literal syntax and use
variable name email for creating an object, create properties like:
sendTo and sentFrom properties and give values to it, create send
method which will log the message like "message sent."*/
const email = {
    sendTo: 'boss@company.com',
    sentFrom: 'me@company.com',
    send : function (){
        console.log('email sent');
    }
};
email.send;

// Extra
// -----

/* Task 1: Create a variable to store the name of the city you live in
and test it on the console.*/
var myCity = 'Kathmandu';
console.log(myCity);

/*Task 2 - Create a variable named isProgrammingEngaging and
supply any boolean value you prefer to supply.*/
var isProgrammingEngaging = true;

/*Task 3 - Let's suppose I want to store my age, what would be the
appropriate data type to store age, and initialize that variable with
the appropriate value. In the end, don't forget to see it on the
console and finally analyze the result.*/
var myAge = 25;
console.log(myAge);

/*Task 4 - I want to store a value that represents nothingness into a
variable, let's say the variable name is totalUsers, what would be
the preferred value to store there?
Note: at this point, don't think of making a mistake, just test it out
and analyze the result.*/
var totalUsers = null;

/*Task 5 - what might be the solution in case if I wanted to store a
phone number into a variable, which data type would suit this
scenario.
Note: just give it a try.*/
const myPhoneNumber = Number.parseInt('9843741933');

/*Task 6 - Scenario: I wanted to store data related to a specific
object. For that create an object which would store some
information related to the laptop you use.*/
const laptop = {
    brand : 'Dell',
    generation: 7,
    RAM : '8 GB',
    monitor: '14 inches',
    hasGraphicsCard: true
}

/*Task 7 : Task 7: Create an object where the object keys store values of
different data types and use typeof operator to check the data type
of the value that you stored into it.*/
const myLaptop = {
    brand : 'Dell',
    generation: 7,
    RAM : '8 GB',
    monitor: '14 inches',
    hasGraphicsCard: true
}
console.log(typeof(myLaptop.brand))
console.log(typeof(myLaptop.generation))
console.log(typeof(myLaptop.RAM))
console.log(typeof(myLaptop.monitor))
console.log(typeof(myLaptop.hasGraphicsCard))

/*Task 8: Task 8: use typeof operator to check the value returned by the
prompt() function */
let promptTypeCheck = prompt('whats on your mind ?');
console.log(typeof(promptTypeCheck));

/*Task 9 : Create a constant that holds a value called red in
BG_COLOR constant.*/
// const constant = (const BG_COLOR = 'red');

/*Task 10: try to declare the constant without assigning the value to it
and see the result, also try to re-assign the value to the same
constant and see the result.*/
/*const nothing;
console.log(nothing)
const nothing = 'nothing';*/