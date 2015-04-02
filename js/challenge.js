
// Ghost, an object, containes the behavior color, which returns one of four random colors.
var Ghost = {
    color:  function Ghost() {
            var randomNumber = Math.random();
                if (randomNumber < 0.25) {
                    return "white";
                } else if (randomNumber < 0.5) {
                    return "yellow";
                } else if (randomNumber < 0.75) {
                    return "purple";
                } else {
                    return "red";
                }
            }
    };

Ghost.color();

//Evenly divide

function evenlyDivide(number) {
    for (i = number; i > 0; i--)
        if (number%i === 0){
            return i;
        }
}
evenlyDivide(21);


//how many lightsabers. only zach or Zach should return 18
function howManyLightsabersDoYouOwn(name) {
    if (name === "Zach" || "zach") {
     return 18;
    } else {
    return 0;
    }
}

howManyLightsabersDoYouOwn("zach");

// light sabers

function last(value){
    if (typeof value === "object") {
    return value[value.length-1];
    } else if (typeof value === "string") {
    return value.slice(-1);
    }
}

last([1, 2, 3, 4]);

// makes change

function makeChange(amount) {
    var dollars = (Math.floor(amount/1));
    var quarters = (Math.floor(amount%1/.25));
    var dimes = (Math.floor(amount%1%.25/.1));
    var nickels = (Math.floor(amount%1%.25%.1/.05));
    var pennies = (Math.floor(amount%1%.25%.1%.05/.01));
    return "I have " + dollars + " dollars, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies."
    }

makeChange(7.25);

//Palindrome

function palindrome(name){
    name = name.toLowerCase()
    if (name === name.split("").reverse().join("")){
    return true;
    } else {
    return false;
    }
}

//playing with types

function typing(value) {
    return (typeof value) + " = " + "value";
}

typing("true");
//vs
typing(true);


//reverse

function reverse(name) {
    return name.split("").reverse().join("");
}

// short_long_short


    function haiku(value1, value2){
        if (value1.length > value2.length){
            return value2 + value1 + value2;
        } else {
            return value1 + value2 + value1;
        }
    }

    haiku("1", "22");

// short_long_short


    function haiku(value1, value2){
        if (value1.length > value2.length){
            return value2 + value1 + value2;
        } else {
            return value1 + value2 + value1;
        }
    }

    haiku("1", "22");

    // challenge

    function squareRoot(value) {
    if (Math.sqrt(value)%1 === 0 )
        return true;
    else {
        return false;
    }
}

squareRoot(8);
