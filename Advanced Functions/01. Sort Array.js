/*function solve([arrNums], sortMethod) {
    var ascendingComparator = function (a,b) {
        return a-b
    }

    var descendingComparator = function (a,b) {
        return b-a
    }

    var sortingStratigies = {
        'asc' : ascendingComparator,
        'desc': descendingComparator
    }

    return arrNums.sort(sortingStratigies[sortMethod])
}*/
function solve(array, method) {
    let ascendingComparator = (a, b) => a-b;
    let descendingComparator = (a, b) => b-a;

    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return array.sort(sortingStrategies[method]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));