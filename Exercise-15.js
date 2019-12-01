function groupAnimals(animals) {
  // you can only write your code here!
    var i = 0
    while (i < animals.length) {

        for (var j = 0; j < animals.length; j++) {
            if (animals[j] > animals[j+1]) {
                [animals[j], animals[j+1]] = [animals[j+1], animals[j]]

                //* Konsepnya:
                // var temp = animals[j]
                // animals[j] = animals[j + 1]
                // animals[j + 1] = temp
            }
        }
        i++
    }

    var hasil = []
    for (var k = 0; k < animals.length; k++) {
        var index = -1
        for (var l = 0; l < hasil.length; l++) {
            if (hasil[l][0][0] == animals[k][0]) {
                index = l
            }
        }
        if (index == -1) {
            hasil.push([animals[k]])
        } else {
            hasil[index].push(animals[k])
        }
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



