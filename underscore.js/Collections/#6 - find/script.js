/*
Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.
The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
 */
function find(list, predicate) {
    for ( var i  = 0 ; i < list.length ; i++ ) {
        if (predicate(list[i])) return list[i];
    }

    return 'undefiend';
}

console.log(find([1, 2, 3, 4, 5, 6], function(num){ return num % 7 == 0; }));
/*
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2
 */