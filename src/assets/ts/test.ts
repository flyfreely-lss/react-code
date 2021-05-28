// TypeScript 是面向对象的 JavaScript。

var val:string[]|number[];
val=[]

// 接口
// 接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。
interface IPerson{
    firstName:string,
    lastName:string,
    sayHi: () => string
}
var customer:IPerson = {
    firstName: 'tom',
    lastName: 'ha',
    sayHi: ():string => { return 'Hi' }
}
// 继承
interface Person{
    age:number
}
interface Musician extends Person {
    instrument?:string
}
var drummer = <Musician>{}
// var drummer:Musician = {age:12}
drummer.age = 27;
drummer.instrument = 'Drums';


// 类
class Car {
    engine:string;
    
    // static关键字
    static color:string;

    constructor(engine:string){
        this.engine = engine
    }

    disp():void {
        console.log('发动机' + this.engine)
    }

    static printColor():void {
        console.log('车的颜色'+ Car.color)
    }
}

Car.printColor();
var car = new Car('XX');
car.disp()
// 类的继承
// 子类只能继承一个父类，TypeScript 不支持继承多个类，但支持多重继承

// 访问控制修饰符：public、protected、private
class Encapsulate {
    str1:string;
    private str2:string;
}
const enc = new Encapsulate()
enc.str1;

// 类和接口 implements
interface ILoan { 
    interest:number 
 } 
  
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
  
 var obj = new AgriLoan(10,1) 
 console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )


//  命名空间

// 泛型 -> 类型的抽象
function returnItem<T>(param: T): T{ //在函数名称后面声明泛型变量 <T>
    return param
}

// 泛型变量 Array<T> & T[]意思一样，写法不一样
function getArrayLength<T>(param: Array<T>): T[]{
    console.log(param.length)
    return param
}

// 泛型接口
interface ReturnItem<T>{
    (param: T): T
}
const returnItem2: ReturnItem<number> = param => param

// 泛型约束: 使用<T extends xx>方式约束泛型
type Params = number | string
class Stack<T extends Params> {
    private arr: T[] = []
    public push(item: T) {
        this.arr.push(item)
    }
    public pop(){
        this.arr.pop()
    }
}
const stack1 = new Stack<number>()
// const stack2 = new Stack<boolean>()

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}  
const a = {
    name: 'xiaomuzhu',
    id: 1
}
getValue(a, 'name')

// 泛型与new
// 参数 type 的类型 {new(): T} 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。
function factory<T>(type: {new(): T}): T{ 
    return new type()
}


// TODO 装饰器ioc

// 浏览器 - CSS阻塞js执行，js阻塞DOM解析

// 类型兼容性：
// 对象：短的兼容长的  函数：长的兼容短的（参数）
// 类： 同对象，只比较实例成员和方法，构造函数和静态成员不会被检查


// 高级类型之 索引类型
// keyof，即索引类型查询操作符，我们可以用 keyof 作用于泛型 T 上来获取泛型 T 上的所有 public 属性名构成联合类型。
// 索引访问操作符 T[K],获取属性名对应的属性值类型
class Images {
    public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt: string = '谷歌'
    public width: number = 500
}
type propsNames = keyof Images
type propsType = Images[propsNames]

// 索引类型 实现pick函数
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][]{
    return names.map(n => o[n])
}
const user = {
    username: 'Jessica Lee',
    id: 460000201904141743,
    token: '460000201904141743',
    avatar: 'http://dummyimage.com/200x200',
    role: 'vip'
}
pick(user, ['role', 'username'])


// 高级类型之 映射类型
// 映射类型的语法是[K in Keys]
// 需求：把User接口中的成员全部变成可选的
interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
type partial<T> = {[K in keyof T] ?: T[K]}
type partialUser = partial<User>


// 高级类型之 条件类型
// 可以理解为: 若 T 能够赋值给 U，那么类型是 X，否则为 Y,有点类似于JavaScript中的三元条件运算符.
// T extends U ? X : Y
declare function f<T extends boolean>(x: T): T extends true ? string : number;
const x = f(Math.random() < 0.5)
const y = f(false)
const z = f(true)

// 条件类型与联合类型
// 裸类型参数,没有被任何其他类型包裹即T
type NakedUsage<T> = T extends boolean ? "YES" : "NO"
type Distributed = NakedUsage<number | boolean> //  = NakedUsage<number> | NakedUsage<boolean> =  "NO" | "YES"

// 条件类型与映射类型
// 需求：编写一个工具类型将interface中函数类型的名称取出来
interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type R = FunctionPropertyNames<Part>;


// 高级类型之强大的 infer 关键字
type ConstructorParameters1<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any
  ? P
  : never;
