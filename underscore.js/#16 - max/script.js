function max(list, iteratee) {
    if ( list.length === 0 ) return -Infinity;

    if (!iteratee) {

        var result = list[0];
        var pos = 0;
        for (var i = 1; i < list.length; i++) {
            if (result < list[i]) {
                result = list[i];
                pos = i;
            }
        }
    } else {
        var result = iteratee(list[0]);
        var pos = 0;
        for (var i = 1; i < list.length; i++) {
            if (result < iteratee(list[i])) {
                result = iteratee(list[i]);
                pos = i;
            }
        }
    }

    return list[pos];
}

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(max(stooges, function(stooge){ return stooge.age; }));
var numbers = [10, 5, 100, 2, 1000];
console.log(max(numbers));