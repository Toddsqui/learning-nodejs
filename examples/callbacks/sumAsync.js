function sumAsync(firstNum, secNum){
  var total = firstNum + secNum;
  setTimeout(function(){
      console.log("The result is " + total + "!");
  }, 1000);
}
