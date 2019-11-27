function angkaPalindrome(num) {
    // you can only write your code here!
    var flag = true
      while (flag) {
      num += 1
      var numString = num.toString()
      var tampung = ''
      for (var i = numString.length-1; i>=0; i--) {
        tampung += numString[i]
        if (tampung == num) {
          flag = false
        }
    }
  }
  if (flag === false) {
    return tampung
  }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001