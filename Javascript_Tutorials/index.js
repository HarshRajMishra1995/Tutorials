// var x=null;
        // var y=undefined;
        // y=6
        // x=y
        // console.log( y)
        // console.log(typeof y)
        // console.log(x)

      //Objects------------------------
    //   let objs={}
    //   console.log(objs)
    //    var obj={
    //        name:"harsh",
    //        age:26
    //    }
    //   console.log(obj)
    //   obj.work="engineer"
    //   console.log(obj)
    //   delete obj.work
    //   console.log(obj)

    //Arrays ------------------------------
    // let arr=[1,2,3,4,4,5]
    // let arr1=[
    //     [1,2,3],[4,5,6],[7,8,9]
    // ]
    // console.log(arr[0])
    // console.log(arr.length)
    // console.log(arr1[0])
    // console.log(arr1[1][0])
    // console.log(arr1.length)

    //Date ----------------------------------
    // const now=new Date()
    // console.log(now)
    // const dt=new Date(2018,9,13,15,0)
    // console.log(dt)

    //Maps And sets -----------------------

    // const roles= new Map();
    // roles.set("k1","user1")
    // roles.set("k2","user2")
    // console.log(roles)

    // const myset=new Set()
    // myset.add("hi")
    // myset.add(1)
    // myset.add(2)
    // myset.add(3)
    // console.log(myset)

   //Strings ---------------------------------

    // let str=20.5;
    // let strcat="weather is"+str+"\u00b0c";
    // console.log(strcat)

    //We have unicodes in javascript  that consists of unique numerical code value that results in unique output.
    // let strcat1=`weather is ${str}\u00b0c`;
    // console.log(strcat1)
    // let s=`\u200D\u2764\uFE0F\u200D`;
    // console.log(s)

    //multiline using backtick
    // let str2=`
    // hello
    // hi`
    // console.log(str2)

    // let result=5*'5'
    // console.log(result);
    // let result1=5+'5'
    // console.log(result1)

    //Switch Statements
    // let a=3
    // switch(a>=2){
    //     case a:
    //     console.log("good")
    //     break
    //     default:
    //     console.log("nahi pata")
    // }

    //For in loop . used for iterating over object ----------------------------------

    // let obj={a:1,b:2,c:3,d:4}
    // for( let o in obj)
    // {
    //     //for keys values in the objects
    //     console.log(obj[o])
    // }
    // for( let k in obj)
    // {
    //     //for keys in the objects
    //     console.log(k)
    // }

   //For of loop --------------------------------------------------------------------
    //In array if we use for-in loop then it prints the indexes of the array
//    let arr=[1,2,3,4,5]
//    for(let i of arr)
//    {
//        console.log(i)
//    }

    //unary negations --------------------------------------------------------------
    // let y=10
    //  console.log(-y)

    //  let x=-10
    //  console.log(-x)

    //Post and pre increments/decrements----------------------------------------------
    // let x=4
    // console.log(x)
    // ++x;
    // console.log(x)

    //Strict and abstract equality----------------------------------------------------

     //strict equality is checked by (===) . this checks type as well as value
     //abstract equality is checked by (==) . this checks on values not type

     //Not strict equality is checked by(!==) .
     //Not abstract equality is checked by(!=).


     //Destructuring objects-----------------------------------------------------------

    //  let obj={a:1,b:2,c:3,d:4}
    //  let {a,b,c,d}=obj;
    //  console.log(d)

    // let arr=[1,2,3,4,5,6]
    // let[a,b,c,d,...rest]=arr   /// (...rest) is called as dot seperator
    // console.log(a)
    // console.log(c)
    // console.log(rest)

    //javascript operator precedence ---------------------------------------------------

    //highest to low is : () , / , * , + , -

    //javascript operators------------------------------------------------------------
    //(.) dot is know as member access property. We use it to validate objects member
    //  let obj={car1:"BMW",car2:"Audi",car3:"Ford"}

    //  console.log(obj.car3);
     //console.log(obj.car4)

     // in operator is used to validate whter left side property is present in the object or not

    //  console.log("car3" in obj)
    //  console.log("car4" in obj)

     //new operator is used to create instance of an user defined objects

    //  class model{
    //      constructor()
    //      {

    //      }
    //  }

    //  let obj1=new model();
    //  let obj2=new model();

    //instanceof operator---------------------------------------------------------------------------------
    // //This operator is used to validate instance membership of userdefined objects.It gives boolean value.

    // let mydate=new Date();
    // console.log(mydate instanceof Date);

    // const arry=[1,2,3,4,5];
    // console.log(arry instanceof Array);
    // console.log(arry instanceof Date)

    //Delete operator-------------------------------------------------------------------------------

    // let objs={a:"hi",b:"hello",c:"bye"}

    // console.log("a" in objs);

    // delete objs.a

    // console.log("a" in objs);

    // let arr=[1,2,3,4,5,6]

    // console.log(arr[0])

    // delete arr[0]
    // console.log(arr[0])

    //Ternary operator----------------------------------------------

    // let x=1;
    // y=x>2?"greater":"smaller"
    // console.log(y)

    //Jump Statement----------------------------------------------------------

    //first one is Break statement .It is used to break the execution flow on meeting certain condition

    // for(let i=0;i<=5;i++)
    // {
    //     if(i==3) break;
    //     console.log(i)
    // }

    //break labelled statement

    //syntax

    //break labelname;

    //syntax for labelled statement is

    // identifier:statement

    // label:for(let i=0;i>=0;i++)
    // {
    //     console.log(i)
    //     break label;
    // }

    //continue statement --------------------------------------------------------------
      //basically used to skip the steps of executions for matching conditions
    //syntax is continue

    // it is also used as continue labelled statements

    // for(let i=0;i<=10;i++)
    // {
    //     if(i==5) continue;
    //     console.log(i)
    // }

    // label:for(let i=0;i<=10;i++)
    // {
    //     if(i==5)
    //     continue label;
    //     console.log(i)
    // }

    //function call using objects---------------------------------

    // function magic()
    // {
    //     return "hello magic"
    // }

    // let obj={
    //    // f:magic()
    //    f:magic
    // }
    // //console.log(obj.f);
    // console.log(obj.f());


    //Default argument passing in the function------------------------------------

    // function pass(x=3)
    // {
    //     return `The function value is :${x}`;
    // }

    //console.log(pass()) //no value is passing so undefined will be the output

    //console.log(pass()) //here also no value is passed but default value is being passed in the function so it gives output

    //console.log(pass(5)) //here value is passed so it will override the default value and gives the output.

    //Anonymous function
   
    //it has no identifier for its calling

    // let f=function()
    // {
    //     //anonymous function assigned to variable f
    //     return "you called me!!!"
    // }

    // console.log(f());
  
    //Anonymous functions are mainly used inside objects as an property-----------------------------------------------------

    // let obj={
    //     name:"anonymous function",
    //     // fun:function()
    //     // {
    //     //     return "you called me"
    //     // }
    //     fun()  //This we can do directly according to es6 version
    //     {
    //         return "you called me"   
    //     }
    // }
    // console.log(obj.fun())

    //Arrow Functions---------------------------------------------------------------------------------------------------

    //1. with arrow functions we can omit the function keyword
    //2. if we have single argument to pass then we can omit paranthesis in arrow functions
    //3. if we have single return statement then we can omit curly braces also

    // let f=x=>"hello!!!!!!";

    // console.log(f(2))

    //Destructuring arguments passing to the functions------------------------------------------------------
    //using objects and arrays

//     const o={
//         w1:"Daily",
//         w2:"practice",
//         w3:"code"
//     };

//    function getData({w1,w2,w3})
//    {
//        return `${w1} ${w2} ${w3}`;
//    }

//    console.log(getData(o));

//    const arr=[1,2,3,4,5,6]

//    function getelements([a,b,c,d,...rest])
//    {
//        return `${a} ${b} ${c} ${d} ${rest}`
//    }

//    console.log(getelements(arr))

//call() method ---------------------------------------------------------

// const obj={name:"harsh", class:"btech"}
// const obj1={name:"shruti" ,class:"mba"}

// function magic()
// {
//     return `Welcome ${this.name} of class ${this.class}`;
// }

// console.log(magic.call(obj1));

//call method uses the property of object which it is passed and bind it with this keyword in the function


//closures ---------------------------------------------------------------------

// function counter()
// {
//     let count=0;

//     return function(){
//         return count++;
//     }
// }

// console.log(count)
// let cot=counter()

// console.log(cot())
// console.log(cot())
// console.log(cot())
// console.log(cot())

// function counter()
// {
//     count =10;
//     return function()
//     {
//         return count;
//     };
// }

// //console.log(counter())

// function incounter()
// {
//     count=100000;
//     return count++;
// }

// console.log(incounter())
// console.log(incounter())
// const c=counter()
// console.log(c())

//With closure we can save our variable to used by any other function 
// let cl;
// {
//     let obj={name:"char"}
//    cl=()=>{
//        return obj
//    }
// }
// let p=cl()
// console.log(p.name)

//IIFE stands for immediately invoked function expression

//1.
// (function(){
//     console.log("hi")   //We put whole function body inside a paranthesis
// })();                   //Then we use () just after closing paranthesis for its invocation

//2.
// var p=(function(){
//     return "hi"
// });
// console.log(p())
// //3.
// console.log((function(){
//     return "hi"
// })())
//we can also use closure with it.


//strict mode ----------------------------------------------------------------------

// "use strict";

// x=20;
// console.log(x)

// function magic()
// {
//     "use strict";
//     x=20;
//     console.log(x)
// }

// magic()

//strict mode removes direct use of variable without its proper declaration

//Arrays-----------------------------------------------------------------

//Non homogenous array containing array

// const arr=[
//     {name:"Daily",No:39},
//     [
//         {name:"Tutorials",subject:"array"},
//         {name:"Tutorials",subject:"Literals"}
//     ],
//     [
//         function(){
//             return " Iam array function"
//         }
//     ]
// ];
// console.log(arr[0])
// console.log(arr[0].name)
// console.log(arr[0].No)
// console.log(arr[1])
// console.log(arr[1][0])
// console.log(arr[1][0].name)
// console.log(arr[1][0].subject)
// console.log(arr[2][0]())

//concat method-----------
//This method add elements at the last of the array.
//After adding elements at the last this method returns original array.
// const arr=[1,2,3]
// console.log(arr.concat(4,5,6))

//slice method-------------
//This method is used to sub array from an array
//  const arr2=[1,2,3,4,5]
//  console.log(arr2.slice(2,4))
// console.log(arr2.slice(-1))
//It starts slice from start index so it include start index but not last index

//splice method--------------
//This method used to insert and remove elements from an array at desired index
//on insertion it take 3 args (start index,no of element to delete,items to be inserted)
//on deletion it take 2 args(start index,no of element to delete)
// var arr=[1,4,5,6]
// console.log(arr)
// arr.splice(1,0,2,3)
// console.log(arr)
// arr.splice(1,2)
// console.log(arr)

//copyWithin method------------
//So this method three args as(startindex,copyfromindex,copytillindex)
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.copyWithin(1,2,5);
// console.log(arr)
//it replaces the element of copyfromindex and copy the elements from that position
//arr.copyWithin(1,-1) //start from 1 index and -1 denotes end of the array


//fill method-----------------
//it fills the array with static value
//takes three args (staticvalue,startindex,endindex)
// const arr1=[1,2,3,4,5]
// // arr1.fill("d")
// // console.log(arr1);
// arr1.fill("d",1,4);
// console.log(arr1)

//map method--------------------
// const arr=[1,2,4,8];
// const maparr=arr.map(x=>x+2)
// console.log(maparr)
// const arr1=[
//     {product:"tv",price:15000},
//     {product:"car",price:18000}
// ]
// const maparr1=arr1.map(x=>x.price)
// //const maparr1=arr1.map(x=>x.price>2000) on putting condition to the map function we get boolean value as an output for each corresponding property elements
// console.log(maparr1)

//Advance javascript

//class
// class Model{
//     constructor()
//     {

//     }
// }
// let obj=new Model()
// console.log(obj instanceof Model)

//parameterized constructor in the class
// class Model{
//     constructor(name,dept)
//     {
//         this.name=name;
//         this.dept=dept;
//     }
//     show()
//     {
//         console.log(`Name is ${this.name} and the department is ${this.dept}`)
//     }
// }

// let obj=new Model("harsh","cse")
// obj.show()
// console.log(obj)

//Object prototyping is used to add properties to an object
//when we create an instance of any function , so with the help of
//new keyword we creates object instance of it thereafter we use prototype method
//to add properties to the object.

//  let f=function(){
//      console.log("hello")
//  }

//  const obj=new f();

//  obj.c="new"
//  obj.d="newer"
//  console.log( obj)

// var obj={
//     name:"harsh",
//     class:"12th
// }
// console.log(obj)
// obj.dept="cse"  ///adding propeties to normal object
// console.log(obj)

//static method----------------------
//static methods are those which are called directlty by class name
//they dont require class instance for their calling
// we  cannot use/call static method inside non static method
// But we can use constructor for calling static method 

// class Mystatic{
//     constructor()
//     {
//         console.log("This is constructor method calling static method inside it===>",Mystatic.oncall())
//     }
//     static oncall()
//     {
//         return "This is a static call"
//     }
//     static onbetweencall(){
//         return `This is inside static calling outside static.${this.oncall()}`
//     }
// }
// const st=new Mystatic();

// console.log(Mystatic.onbetweencall())

//class inheritance-----------------------------
// class Person{
//     constructor(name,gender)
//     {
//         this.name=name;
//         this.gender=gender
//     }
// }

// class student extends Person{
//     constructor(age)
//     {
//         super("harsh","male")
//         this.age=age;
//     }
//     showup()
//     {
//         return `A new student is created with name ${this.name} having age ${this.age}`
//     }
// }

// const stud=new student(24);
// console.log(stud.showup());

//Object Prototype inheritance------------------
// using __proto__ we can inherit one object into another object
// var vehicle={
//   model:"tesla"
// }
// var bike={
//     name:"hero"
// }

// var car={
//     __proto__:vehicle  ///this way also we can inherit one object with another object
// }

// bike.__proto__=vehicle;
// console.log(bike.name);
// console.log(bike.model);
// console.log(car.model);

//Polymorphism in javascript-------------------------------

// class Employee{
//     constructor(name,gender)
//     {
//      this.name=name;
//      this.gender=gender;
//     }
//     createMember()
//     {
//         console.log("hello i am parent class method")
//     }
// }

// class member extends Employee{
//     constructor(age)
//     {
//         super("Harsh","Male")
//         this.age=age;
//     }
//     createMember() {            //This method overrides parent class methods
//         console.log(`The New Member name is ${this.name} has age ${this.age} of gender ${this.gender}`);
//     }
// }

// const mm=new member(24)

// mm.createMember();

//Object.toString() methods-----------------
//It is used to convert object into string
// const dt=new Date()
// console.log(dt);
// console.log(typeof dt);
// console.log(dt.toString())
// console.log(typeof dt.toString())

//Map and its methods---------------------
// const mymap=new Map();
// const keyString="keystring",
// keyobj={},
// keyfunction=function(){console.log("hello")};
// mymap.set(keyString,"keystring value")
// mymap.set(keyobj,{name:"ram",lastname:"shyam"})
// mymap.set(keyfunction,"keyfunc value")
// mymap.get(keyfunction())
// console.log(mymap.get(keyobj).name)
// console.log(mymap.get(keyString))

//Iteration over Map Method
// for(let [key,value] of mymap)
// {
//     console.log(`Mapkeys:${key} Mapvalues:${value}`);
// }

//weakmap----------------------------------

// let weakMap=new WeakMap();
// let obj={},obj1={}

// //set weakmap key and value
// weakMap.set(obj,"Private");
// weakMap.set(obj1,"Private Data");

// console.log(weakMap.get(obj))

// for(let [key,value] of weakMap) //WeakMap is not iterateable because it makes the key as a private
// {
//     console.log(`The key is ${key} and value is ${value}`)
// }

//Regular expressions-------------------------------------------
//Used to search a pattern in a string..

// let reg=new RegExp()//it take 2 arguments (pattern,flags)
// console.log(reg)

// short syntax
// let reg=/pattern/;    //without flags
// let reg=/pattern/flags; //with flags

//Dom with javascript------------------------
// let p=document.getElementsByTagName("p")
// console.log(p)
//we can access any dom element with javascript

//Document methods-------------------------------------------
//QuerySelector()
//QuerySelectorAll()
// const head=document.querySelector(".heading")
// console.log(head)
// head.innerHTML="hello heading" //through this we can change text value between html elements

// const newhead=document.querySelectorAll(".heading") //it return all elemnts with same class name in a node list form
// console.log(newhead)
// console.log(newhead[0])//to access each node list value
// newhead[0].innerHTML="hello javascript"

// const d=document.querySelector(".mydiv");
// console.log(d)
//d.innerHTML="hello div"
//applying styling to the div elements
// d.style.backgroundColor="red"
// d.style.padding="2px"

//applying styling using classlist method
// const d=document.querySelector(".mydiv");
// d.innerHTML="hello div"
// d.classList.add(".mydiv")

//document.createElement(tagName)--------------------------------

let p=document.createElement("p");
console.log(p)
p.textContent="first paragraph";
p.textContent="second paragraph";

const content=document.querySelector(".mydiv");
content.appendChild(p) //appending the paragraph with div

document.body.appendChild(p) //if we want to append it in the body


//adding eventListener---------------------------------------------

const d=document.querySelector(".btn");

document.querySelector(".btn").addEventListener("click",()=>{
    alert("heelo")

    document.querySelector("p").style.backgroundColor="green";
})

//Jquery
//we use $ sign for document.queryselector for selecting any elements in jquery

///Javascript -------over