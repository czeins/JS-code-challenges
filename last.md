#LAST
---

```Write a function that accepts an ARRAY or a STRING as an input and returns the last item.```

----

function last(value){
    if (typeof === "object") {
    return value[value.length-1];
    } else if (typeof === "string") {
    return value.slice(-1);
    }
}


EXAMPLE:

    last( [1,2,3,4] ) # => 4
    last( "xyz" ) # => z