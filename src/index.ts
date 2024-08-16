// {Implicit method it is it automatically add the type of the data 
// let username = "abijith "
// username = "anil"
// console.log("the username be like this ",username);}



// {Explicit method it is to  add the type of the data 

// let username :string = "aju"
// let abi :number = 89
// let is_subscribed :boolean = true
// let skills :string [] =["js","kill"]
// let count :number []=[0,8,9]
// let emptyarray :[] =[]
// let object :{name:string,age:number}={
//     name:"abin",
//     age:90
// }
// console.log("the username is from explicit ",username,is_subscribed,skills,count,emptyarray);
// console.log("the abi from the explicit is",abi,object);}

// {interface
// interface details {
//     name:String;
//     age:Number;
//     salary:Number;
//     getname :() => void;
// }

// let username :details ={
//     name:"aju",
//     age:90,
//     salary:9000,
//     getname() {
//         console.log(this.name);
        
//     },
// }
// console.log("the username be this ",username);
// username.getname()}


// {Type
// type details ={
//     name:String;
//     age:Number;
//     salary:Number;
//     getname :() => void;
// }

// let username :details ={
//     name:"aju",
//     age:90,
//     salary:9000,
//     getname() {
//         console.log(this.name);
        
//     },
// }
// console.log("the username be this ",username);
// username.getname()}


// {union operator
// type details ={
//     name:String;
//     age:Number | string;
//     salary:Number;
//     getname :() => void;
// }

// let username :details ={
//     name:"aju",
//     age:"nine",
//     salary:9000,
//     getname() {
//         console.log(this.name);
        
//     },
// }
// console.log("the username be this ",username);
// username.getname()}

// {optional operator
// type details ={
//     name:String;
//     age:Number | string;
//     salary:Number;
//     getname?:() => void;
// }

// let username :details ={
//     name:"aju",
//     age:"nine",
//     salary:9000,
//     getname() {
//         console.log(this.name);
        
//     },
// }
// console.log("the username be this ",username);
// username.getname?.() }

// {Functions

// type Details = {
//     name:String;
//     age:number;
//     salary:number;
//     getname?:()=> void;
// }
// let userdetails:Details ={
//     name:'aju',
//     age:8,
//     salary:9000
// }

// function getfunction({name,age}:{name:string,age:number}){
//     return name
// }

// console.log("this be the output for the getfunction ",getfunction({name:"aju",age:9}));

// function getfunction(userdetails:Details){
//       return userdetails.age
// } 
// console.log("the getfunction be this ",getfunction(userdetails));


// function getfunction(userdetails:Details):Details{
//     return { name:userdetails.name,age:userdetails.age,salary:userdetails.salary};
// }
// console.log("the getfunction output be this ",getfunction(userdetails));}

// {named types
    // type status = "pending" | "complete" | "failed"

    // let solution:status ;
    // solution = "failed";
    // solution = "complete";}


   





