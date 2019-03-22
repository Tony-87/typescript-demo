let binaryLiteral: number = 0b1010 // 二进制
let octalLiteral: number = 0o744 // 八进制
let decLiteral: number = 6 // 十进制
let hexLiteral: number = 0xf00d // 十六进制

let uname: string = 'Runoob'
let years: number = 5
let words: string = `您好，今年是 ${uname} 发布 ${years + 1} 周年`

let flag: boolean = true

let arr: number[] = [1, 2]
let arr2: Array<number> = [1, 2]

let x: [string, number];
x = ['runoob', 1] //ok
// x = [1, 'runoob'] //error
console.log(x[0])

enum Color {Red,Green,Blue}
let c:Color = Color.Blue;
console.log(c);

function hello():void{
    alert('hello runoob');
}

let xa:any  = 1
xa = 'I am who I am';
xa= false;



// 启用 --strictNullChecks
// let x: number | null | undefined
// x = 1 // 运行正确
// x = undefined // 运行正确
// x = null // 运行正确
