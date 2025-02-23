// window.alert("Hello")
// document.write('Hello')
// console.log("Hello")

// //var 全局变量
// var a = 1
// var a = "a"
//     //let 局部变量
// let a = 1
//     //const 恒定不变
// const b = 1

// alert(typeof 3); // "number"
// alert(typeof 3.14); // "number"

// alert(typeof "A"); // "string"
// alert(typeof 'Hello'); // "string"

// alert(typeof true); // "boolean"
// alert(typeof false); // "boolean"

// alert(typeof null); // "object" (this is a known quirk in JavaScript)

// var a;
// alert(typeof a); // "undefined"


// // 类型转换 - 其他类型转换为数字
// alert(parseInt("12")); // 12
// alert(parseInt("12A45")); // 12
// alert(parseInt("A45")); // NaN (Not a Number)

// //定义函数
// var a = function(a, b) {
//     return a + b;
// }

// //Array
// var s = new Array(1, 2, 3, 4);
// s[10] = 50
// for (let index = 0; index < s.length; index++) {
//     console.log(s[index]);
// }
// console.log("..............");

// //for each
// s.forEach(function(params) {
//     console.log(params);

// })
// console.log("..............");
// //箭头函数
// s.forEach((e) => {
//     console.log(e);

// })
// var s1 = [1, 2, 3, 4]
// s1.push(7, 8, 9, 10)
// s1.splice(2, 2);
// console.log(s1);


// //List
// arr[0] = "Hello"
// console.log(arr[0]);


// //string
// var string = new String("...");
// //charAt返回指定位置字符； indexOf()检索字符串；trim()去除字符串两边的空格；
// //substring 提取指定索引之间的字符

// var st = new String(" Hello ");
// console.log(st.length);
// console.log(st.charAt(1));
// console.log(st.indexOf("lo"));
// console.log(st.trim());
// console.log(st.substring(0, 3));


//JSON--JavaScript Object Notation

// var user = {
//     name: "Tom",
//     age: 2,
//     gender: "male",
//     eat: function() {
//         console.log("Hello World!");

//     },
//     abb() {
//         alert("abc")
//     }
// }

// console.log(user.name);
// console.log(user.eat());


// //Define the JSON

// // 定义 JSON
// var jsonstr = '{"name":"Tom", "age":18, "addr":["北京","上海","西安"]}';
// alert(jsonstr.name); // ❌ This will not work because jsonstr is a string

// // JSON 字符串转换为 JS 对象
// var obj = JSON.parse(jsonstr);
// alert(obj.name); // ✅ Correct usage: "Tom"


// alert(JSON.stringify(obj));
// // js对象 -> json字符串
// alert(JSON.stringify(obj));


// //BOM
// //Window
// window.alert("Hello World!")
// alert("Hello World!")


// window.confirm("Are you sure?")

//time
// var i = 0;
// setInterval(function() {
//     i++;
//     console.log("time" + i);

// }, 2000);

// // 定时器 - setInterval -- 周期性的执行某一个函数
// var i = 0;
// setInterval(function() {
//     i++;
//     console.log("定时器执行了" + i + "次");
// }, 2000);


// setTimeout(function() {
//     alert("js");
// }, 3000)
// var a = confirm("aaaaaaa")

// //location
// alert(location.href)

// location.href = "https://www.google.com"

// const first = '100';
// const second = 2;
// const result = first + second;
// console.log(result);
const a = window.prompt('Please input the number')
window.alert(`Salutations, ${a}!${a}`)