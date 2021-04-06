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

    //Destructuring arguments passing to the functions
    //using objects and arrays

    const o={
        w1:"Daily",
        w2:"practice",
        w3:"code"
    };

   function getData({w1,w2,w3})
   {
       return `${w1} ${w2} ${w3}`;
   }

   console.log(getData(o));