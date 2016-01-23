function sumAsync(firstNum, secNum, sumAsyncCb){
  var total = firstNum + secNum;
  setTimeout(function(){
    sumAsyncCb(total);
  }, 1000);
}

function resultCb (result) {
   console.log("Result: " + result); // this should show 8
}

sumAsync(3, 5, resultCb);

sumAsync(42, -2, function (r) {
  console.log("42 - 2 = " + r);
});
