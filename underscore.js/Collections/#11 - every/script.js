/*
Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.
 */
function every(list, predicate) {
    for ( var i = 0 ; i < list.length ; i++ ) {
        var res = false;
        if (predicate(list[i])) res = true;
        else {
            res = false;
            return false;
        }
    }
    return true;
}

console.log(every([2, 4, 5], function(num) { return num % 2 == 0; }));
/*
_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false
 */