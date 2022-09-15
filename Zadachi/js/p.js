"use strict";

/*function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const regex = /\s/g;
  const lowercase = string.toLowerCase().replace(regex, "");
  
   for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return (false);
    }
   }
  
  return (true);
}*/

/*function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
alert(isPangram("The quick brown fox jumps over the lazy dog."));*/

/*function solution(str, ending){
  if (str.indexOf(ending) != -1) {
    alert(true);
}else{
  alert(false);
}
}
solution('abcde', 'cde');
solution('abcde', 'abc');*/

/*function solution(str, ending){
  if(str.endsWith(ending)) {
    return true;
  }else {
    return false;
  }
}
alert(solution('abcde', 'cde'));
alert(solution('abcde', 'abc'));*/


