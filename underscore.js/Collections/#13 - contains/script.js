/*
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
 */
function contains(list, value) {
    if (!value) return 'error: unexpected value';
    for ( var i = 0 ; i < list.length ; i++ ) {
        if ( list[i] === value ) return true;
    }

    return false;
}

console.log(contains([1, 2, 3], 3));
/*
_.contains([1, 2, 3], 3);
=> true
 */