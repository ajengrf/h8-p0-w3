//* [Exercise 2] Tantangan Array 1 (Mengakses Nilai dalam Array)
//* Mengakses Nilai Dalam Array

function balikString(arr) {
    var tampung = ''
    for(var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--)  
        tampung += arr[i][j]
    }
    return tampung 
}

console.log(balikString(['hello world!']))
