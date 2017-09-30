/*
Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
 */
function some(list, predicate) {
    for ( var i = 0 ; i < list.length ; i++ ) {
        if (predicate(list[i])) return true;
    }
    return false;
}

console.log(some([2, 4, 5], function(num) { return num % 2 == 0; }));
/*
_.some([null, 0, 'yes', false]);
=> true
 */