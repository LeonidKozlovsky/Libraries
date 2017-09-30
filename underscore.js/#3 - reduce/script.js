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