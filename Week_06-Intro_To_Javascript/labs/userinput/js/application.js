
"use strict";


function main () {
  var val1 = window.prompt ("enter first value");
  var val2 = window.prompt ("enter second value");
  var finalVal = parseInt(val1) + parseInt(val2);
  window.alert("You entered: " + finalVal);
 }


window.addEventListener("load", main);
