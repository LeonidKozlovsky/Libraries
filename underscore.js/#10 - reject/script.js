function reject(list, predicate) {
    var arr = [];

    for ( var i  = 0 ; i < list.length ; i++ ) {
        if (!predicate(list[i])) arr.push(list[i]);
    }

    return arr;
}

console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));