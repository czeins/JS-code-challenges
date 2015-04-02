##COLOR GHOST
---

```Create a JavaScript object named Ghost that includes a function named "color". When I call this function it should return a random color```

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
    }

Ghost.color

---

EXAMPLE:

    ghost.color() //=> "white" or "yellow" or "purple" or "red"
