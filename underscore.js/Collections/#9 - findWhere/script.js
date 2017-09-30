/*
Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.

If no match is found, or if list is empty, undefined will be returned
 */
function where(list, properties) {
    var arr = [];
    for ( var i = 0 ; i < list.length ; i++ ) {
        var res = false;
        for ( var key in list[i] ) {
            if ( properties[key] === list[i][key] ) res = true;
            else res = false;
        }
        if (res) return list[i];
    }
    return 'undefiend';
}

var listOfPlays = [
    {
        title: "Cymbeline",
        author: "Shakespeare",
        year: 1611
    },
    {
        title: "The Tempest",
        author: "Shakespeare",
        year: 1611
    },
    {
        title: "Anon",
        author: "Anonim",
        year: 2047
    }
];
console.log(where(listOfPlays, {author: "Shakespeare", year: 1611}));
