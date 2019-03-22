var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
var uname = 'Runoob';
var years = 5;
var words = "\u60A8\u597D\uFF0C\u4ECA\u5E74\u662F " + uname + " \u53D1\u5E03 " + (years + 1) + " \u5468\u5E74";
var flag = true;
var arr = [1, 2];
var arr2 = [1, 2];
var x;
x = ['runoob', 1]; //ok
// x = [1, 'runoob'] //error
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
function hello() {
    alert('hello runoob');
}
var xa = 1;
xa = 'I am who I am';
xa = false;
// 启用 --strictNullChecks
// let x: number | null | undefined
// x = 1 // 运行正确
// x = undefined // 运行正确
// x = null // 运行正确
