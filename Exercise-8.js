function pasanganTerbesar(num) {
    // you can only write your code here!
    var pembanding = 0
    var tampung = ''
    var numString = num.toString()

    for (var i = 0; i < numString.length-1; i++) {
      tampung = numString[i] + numString[i + 1]
      var newTampung = Number(tampung)
      
      if (newTampung > pembanding) {
        pembanding = newTampung
      }
    }
  return pembanding
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99