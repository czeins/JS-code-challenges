### bonus Challenge!

## Making change

Write code that accepts an amount of money and
returns the change that it makes up

```JS
makeChange(0.37) // "1 quarter, 1 dime, 2 pennies"
makechange(1.32) // "1 dollar, 1 quarter, 1 nickel, 2 pennies"
```


function makeChange(amount) {
    var dollars = (Math.floor(amount/1));
    var quarters = (Math.floor(amount%1/.25));
    var dimes = (Math.floor(amount%1%.25/.1));
    var nickels = (Math.floor(amount%1%.25%.1/.05));
    var pennies = (Math.floor(amount%1%.25%.1%.05/.01));
    return "I have " + dollars + " dollars," + quarters + " quarters," + dimes + " dimes," + nickels + " nickels, and " + pennies + " pennies."