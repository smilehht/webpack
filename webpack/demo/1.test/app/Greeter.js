// Greeter.js
//用来返回包含问候信息的html元素的函数
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};