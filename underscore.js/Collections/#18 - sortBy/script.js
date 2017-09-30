/*
Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee.
iteratee may also be the string name of the property to sort by (eg. length).
 */
function sortBy(list, iteratee) {
    list.sort(function(a, b) {
        return iteratee(a) - iteratee(b);
    });

    return list;
}

console.log(sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }));
/*
_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
=> [5, 4, 6, 3, 1, 2]

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.sortBy(stooges, 'name');
=> [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
 */