/*
A very simple function which will just log the passed values in console
*/
var printLog = function(data){
  console.log(data);
}
/*
A very simple function which will return yesterday's date
*/
var yDate = function(){
  var date = new Date();
    date.setDate(date.getDate()-1);
    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
}
/*
A very simple function which will return the product of two numbers
*/
var mux = function (a,b){
  return `The product of two numbers is ${a*b}`;
}

module.exports = {
  printLog : printLog,
  yDate : yDate,
  mux : mux
}
