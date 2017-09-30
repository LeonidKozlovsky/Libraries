function sortBy(list, iteratee) {
    list.sort(function(a, b) {
        return iteratee(a) - iteratee(b);
    });

    return list;
}

console.log(sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); }));