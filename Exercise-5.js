function palindrome(kata) {
    var tampung1 = ''
    var tampung2 = ''
    
        for (var j = 1; j<kata.length/2; j++) {
            if(kata[j-1] == kata[kata.length-j]) {
                tampung1 = tampung1 + kata[j-1]
                tampung2 = tampung2 + kata[kata.length-j]
            } else {
                return false
            }
        }
        return tampung1 == tampung2
}

console.log(palindrome('akusukarajawalibapakapabilawajarakusuka'))
console.log(palindrome('katak')); // true
console.log(palindrome('blankeb')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
