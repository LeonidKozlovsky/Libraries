function map(list, iteratee) {
    if (arguments.length === 0) return 'ERROR';

    var newList = [];
    for ( var key in list ) {
        newList.push(iteratee(list[key]));
    }
    return newList;
}

function first() {
    var arr = [];

    for ( var i = 0 ; i < arguments.length ; i++ ) {
        arr.push(arguments[i][0]);
    }

    var result = [];

    result = result.concat(arr);
    return result;
}

console.log(map([1, 2, 3], function(num){ return num * 3; }));
console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));
console.log(map([[1, 2], [3, 4]], first));