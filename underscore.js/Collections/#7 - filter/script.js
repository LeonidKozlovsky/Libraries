/*
Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
 */
function filter(list, predicate) {
    var arr = [];

    for ( var i  = 0 ; i < list.length ; i++ ) {
        if (predicate(list[i])) arr.push(list[i]);
    }

    return arr;
}

console.log(filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
/*
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
 */