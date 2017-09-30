/*
The right-associative version of reduce. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation.
 */
function reduceRight(list, iteratee) {
    var result = [];
    for ( var i = list.length - 1; i >= 0 ; i-- ) {
        for ( var j = 0 ; j  < list[i].length ; j++ ) {
            iteratee(list[i][j]);
        }
    }
    result = result.concat(list);
    return result;
}

var list = [[0, 1], [2, 3], [4, 5]];

console.log(reduceRight(list, function(a, b) { return a.concat(b); }));
/*
var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
=> [4, 5, 2, 3, 0, 1]
 */