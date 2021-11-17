export function randChar(length,characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  //length为所需长度，characters为所包含的所有字符，默认为字母+数字。
  characters=characters.split("");//分割字符。
  var result="";//返回的结果。
  while(result.length<length) result+=characters[Math.floor(Math.random()*characters.length)];
  return result;
}