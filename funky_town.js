var fibonacci = function (n){
  var a = 1, b = 1;
  var count = 2;
  
  while (count <= n){
    var temp = a;
    a = a + b;
    b = temp;
    count++;
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
