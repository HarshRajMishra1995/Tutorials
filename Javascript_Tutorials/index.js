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
    //     break;
    //     default:
    //     console.log("nahi pata")
    // }

    //For in loop . used for iterating over object

    let obj={a:1,b:2,c:3,d:4}

    for(let o in obj)
    {
        //for values we use this way
        console.log(obj[o])
       //for keys we use this way
       console.log(o)
    }



