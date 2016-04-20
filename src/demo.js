console.log("allenlinrui");
console.log(typeof "linrui");

var k = 1;

if (typeof k === "undefined") {
	console.log("true");
} else {
	console.log("false");
}

if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

console.log(undefined != null);
// true

var tmp_arr = [];
tmp_arr.length = 4;
console.log(tmp_arr);

var a = [1, 2, 3];

for (var i in a) {
  console.log(a[i]);
}
