function reverseWords(str) {
    return str.replace(/\S+/g, i => [...i].reverse().join(''));
  }
 console.log(reverseWords('Siapa Saya'));