/*
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
 */
function pluck(list, propertyName) {
    var arr = [];
    for ( var i = 0 ; i < list.length ; i++ ) {
        for ( var key in list[i] ) {
            if ( key === propertyName ) arr.push(list[i][key]);
        }
    }
    return arr;
}

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(pluck(stooges, 'name'));
/*
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
 */