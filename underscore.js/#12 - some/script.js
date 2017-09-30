function some(list, predicate) {
    for ( var i = 0 ; i < list.length ; i++ ) {
        if (predicate(list[i])) return true;
    }
    return false;
}

console.log(some([2, 4, 5], function(num) { return num % 2 == 0; }));