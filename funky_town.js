var fibonacci = function (n){
  var a = 1, b = 1;
  
  while (n >= 2){
    var temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

var gcd = function(a,b){
    if(a == 0)
	return 0;
    if(b == 0)
	return a;   
    return gcd(b, b%a);
}
