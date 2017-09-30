function each(list, iteratee) {
    for (var key in list) {
        iteratee(list[key]);
    }
}

each({one: 1, two: 2, three: 3}, alert);