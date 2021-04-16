

// var x;
// console.log(x)
// console.log(y)

// var x=2;
// console.log(typeof x);

// const obj={
//     name:"ram"
// }

// obj.name="harsh"
// obj.name="raj"
// console.log(obj)

// delete obj.name;
// console.log(obj)

// const y=new Date()
// console.log(y)

// const mymaps=new Map();
// mymaps.set("k1","hello")
// mymaps.set("k2","hi")

// console.log(mymaps.get("k1"))

// const myset=new Set();
// myset.add("hi")
// myset.add("hello")
// console.log(myset)


// let x=2
// switch(x==2)
// {
//    case 1:
//         console.log("yes")
//         break;

//     default:
//        console.log("no values are there")    
// 


// let obj={
//     name:"xyz",
//     dept:"abc"
// }

// for(let i in obj)
// {
//     console.log(i) ///This will print only keys in objects
//     console.log(obj[i]) //This will print values of keys in objects
// }

// let arr=[1,2,3,4]

// for(let i of arr)
// {
//     console.log(i)
// }


// const obj={
//     k1:"hi",
//     k2:"hello"
// }

// console.log("k1" in obj)

// console.log(obj instanceof Object)
// console.log(obj instanceof Array)

// delete obj.k1;
// console.log(obj)

// x=2
// const y=x==2?"yes":"no"
// console.log(y)

// for(let i=0;i<=5;i++)
// {
//     // if(i==3)
//     // break;
//     if(i>3)
//     console.log(i) ;
//     continue;
// }


// function magic()
// {
//     console.log("magic function!!!")
// }

// const obj={
//     f:magic
// }
// console.log(obj.f());

// function fun(x=3)
// {
//     console.log(`Value of x is : ${x}`);
// }
// fun(5);

// const f=function()
// {
//     console.log("I am Anonymous!!!")
// }
// f();

// const obj={
//     f:function()
//     {
//         console.log("I am Anonymous!!");
//     }
// }
// obj.f();

// let x=(a,b)=>{
//      console.log(`I am arrow function!! ${a} , ${b}`)
// }

// x(2,3);

// const o={
//     w1:"hiii",
//     w2:"hii2",
//     w3:"hii3"
// }

// function getData({w1,w2,w3})
// {
//     console.log(`${w1} ${w2} ${w3}`);
// }

// getData(o)


// const obj1={
//     k1:"key1",
//     k2:"key2",
//     k3:"key3"
// }

// const obj2={
//     k1:"key11111",
//     k2:"key22223",
//     k3:"key33333"
// }

// function magic()
// {
//     console.log(`The value if key ${this.k1} ${this.k2} ${this.k3}`);
// }

// magic.call(obj2)

// function counter()
// {
//     let count=0;
//     return function()
//     {
//         return count++;
//     }
// }
// let cot=counter();
// console.log(cot())
// console.log(cot())
// console.log(cot())
// console.log(cot())

// const x=[1,2,3,4,5,6]
// // console.log(x.slice(2,4))
// // x.splice(1,0,8,9)
// // console.log(x)

// // console.log(x.copyWithin(2,3,6))

// const maparr=x.map(x=>x+2)
// console.log(maparr)

// class Model{
//     constructor(name,age)
//     {
//             this.name=name;
//             this.age=age;
//     }
// }

// const model=new Model("harsh",24);
// model.dept="IT";
// console.log(model)

// let f=function()  //it is a constructor object because it has function in it.
// {
//     console.log("I am function!!")
// }

// const obj=new f();
// console.log(obj)
// obj.name="harsh";
// obj.class="btech";
// console.log(obj.name)

// class iamstatic{
//     constructor()
//     {
//         console.log("i am constructor and i am calling" ,iamstatic.iamstaticfun())
//     }

//     static iamstaticfun()
//     {
//         return ('i am static function')
//     }
// }

// const h=new iamstatic();
// // iamstatic.iamstaticfun()

// class person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age

//     }
// }

// class Employee extends person{
//     constructor(dept,place)
//     {
//         super("harsh",25)
//         this.dept=dept;
//         this.place=place;
//     }
//     create()
//     {
//         console.log(`A person with name ${this.name} and age ${this.age} is created with department ${this.dept} and place ${this.place}`)
//     }
// }

// const emp=new Employee("IT","Hyderabad")
// emp.create();

// var obj={
//     name:"new object"
// }
// var obj1={
//     color:"your choice"
// }
// var obj2={
//     __proto__:obj1
// }
// obj1.__proto__=obj;
// console.log(obj1.name)
// console.log(obj2.color)

// class poly{
//     constructor()
//     {
//         console.log("i am poly class constructor")
//     }
//     create()
//     {
//         console.log("i am poly class function")
//     }
// }

// class newpoly extends poly{
//     constructor()
//     {
//         super()
//         console.log("i am newploy class constructor")
//     }
//     create()
//     {
//         console.log("i am newpoly class create function")
//     }
// }

// const obj=new newpoly()
// obj.create()