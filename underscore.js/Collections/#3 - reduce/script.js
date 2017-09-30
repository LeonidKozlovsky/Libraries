/*
Also known as inject and foldl, reduce boils down a list of values into a single value.
Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee.
The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list.
The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
 */
function reduce(list, iteratee, memo) {
    var result = 0;

    if (!memo && memo !== 0) {
        result = list[0];
        memo = 0;
        for ( var i = 1 ; i < list.length ; i++ ) {
            result += iteratee(memo, list[i]);
        }
    } else {
        result = memo;
        memo = 0;
        for ( var i = 0 ; i < list.length ; i++ ) {
            result += iteratee(memo, list[i]);
        }
    }
    return result;
}

console.log(reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
/*
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
 */