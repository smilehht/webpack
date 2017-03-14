// Greeter.js

var config=require('./config.json');

//用来返回包含问候信息的html元素的函数
module.exports = function() {
  var greet = document.createElement('div');
  console.log(config["greetText"]);
  greet.textContent = config['greetText'];
  return greet;
};