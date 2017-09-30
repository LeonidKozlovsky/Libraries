function find(list, predicate) {
    for ( var i  = 0 ; i < list.length ; i++ ) {
        if (predicate(list[i])) return list[i];
    }

    return 'undefiend';
}

console.log(find([1, 2, 3, 4, 5, 6], function(num){ return num % 7 == 0; }));