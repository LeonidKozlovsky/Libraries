function contains(list, value) {
    if (!value) return 'error: unexpected value';
    for ( var i = 0 ; i < list.length ; i++ ) {
        if ( list[i] === value ) return true;
    }

    return false;
}

console.log(contains([1, 2, 3], 3));