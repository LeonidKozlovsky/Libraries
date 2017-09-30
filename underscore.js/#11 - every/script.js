function every(list, predicate) {
    for ( var i = 0 ; i < list.length ; i++ ) {
        var res = false;
        if (predicate(list[i])) res = true;
        else {
            res = false;
            return false;
        }
    }
    return true;
}

console.log(every([2, 4, 5], function(num) { return num % 2 == 0; }));