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