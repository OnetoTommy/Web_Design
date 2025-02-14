window.alert("Hello")
document.write('Hello')
console.log("Hello")

//var 全局变量
var a = 1
var a = "a"
    //let 局部变量
let a = 1
    //const 恒定不变
const b = 1

alert(typeof 3); // "number"
alert(typeof 3.14); // "number"

alert(typeof "A"); // "string"
alert(typeof 'Hello'); // "string"

alert(typeof true); // "boolean"
alert(typeof false); // "boolean"

alert(typeof null); // "object" (this is a known quirk in JavaScript)

var a;
alert(typeof a); // "undefined"


// 类型转换 - 其他类型转换为数字
alert(parseInt("12")); // 12
alert(parseInt("12A45")); // 12
alert(parseInt("A45")); // NaN (Not a Number)