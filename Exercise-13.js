function targetTerdekat(arr) {
  // you can only write your code here!
  var tampungx = -1
  var tampungo = -1
  for (i = 0; i < arr.length; i++) {
      if (arr[i] == 'o') {
          tampungo = i
      } else if (arr[i] == 'x') {
          tampungx = i
      }

      if (tampungx !== -1 && tampungo !== -1) {
          var hasil = tampungo - tampungx
          break
      } else {
          var hasil = 0
      }
  }
  return Math.abs(hasil)
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2