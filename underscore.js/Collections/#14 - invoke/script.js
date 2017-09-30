/*
Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
 */
function invoke(list, methodName) {
    var arr = [];
    for ( var i = 0 ; i < list.length ; i++ ) {
        arr.push(list[methodName]);
    }

    return arr;
}

function sort(list) {
    for ( var i = 0 ; i < list.length ; i++ ) console.log(list[i]);
}

console.log(invoke([[5, 1, 7], [3, 2, 1]], 'sort'));
/*
Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
 */