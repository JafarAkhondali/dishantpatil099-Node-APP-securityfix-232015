// file --> module 
// used to encapsulate code, no clash with other code
// every file in node js is module which is encapsulated
// this encapsulated code can be exported and imported in another module

// const color = require('cli-color'); // require(module name)

// iife function
// (function(name){
// // IIFE
//     console.log(name)
//     var age = 20;
// }) ("dishant")

// console.log(age); // function scope ke sare variable hote he we cant get them outside

// code in modulated is encapsulated same as the variables in the function


//  <------------------------- NPM Modules ---------------------------->
// (function(exports , require , module , __filename, __dirname){
        // node js  background mein aise module ko wrap  kar deta he
        // node js wraps these module like variables in function at runtime
        // these parameters are passed to us by node js
        // modules , recquire are wrapped by node js in IIFE at runtime
        // so we are able to access recquire , etc  



    // }) ()

// const color = require('cli-color'); // recquire(module name)
// console.log(color.yellow('hello node js'));
    




// Local module
// const auth = require("./auth.js"); //jo module.exports mein tha woh yaha recieve hota he
 
// auth.register('codersGyan');
// auth.login("codersgyan" , "1234pass");



// Core Modules

const path = require('path'); //urls , directory path join modify we use path module

// dirname
// console.log("Folder name: " , path.dirname(__filename));// filename we got from wrapped parameters by node js
//filename
// console.log("File name: " , path.basename(__filename));// filename we got from wrapped parameters by node js

//extension
// console.log("Ext name: " , path.extname(__filename));
// parse
// console.log("Parse : " , path.parse(__filename));
 
// join
// console.log(" Join: " , path.join(__dirname, "order" , 'app.js'));
// -->  Join:  /Users/dishant/coders_gyan_bootcamp/nodejs/order/app.js




//File system
// create folder , create file , read data of file , write data into file
const fs = require('fs');

// fs.mkdir(path.join(__dirname , '/test') , (err) => {
//   // first parameter is path second if a function for error 
//     if(err) {
//         console.log("Something went wrong")
//         return
//     } 

//     console.log('Folder created ... ')
// })

// fs.writeFile(path.join(__dirname, '/test' , 'test.txt') , 'Hello Node \n' , (err) => {
//     if(err){
//         throw err
//     }

//     fs.appendFile(path.join(__dirname, '/test' , 'test.txt') , 'More data' , (err) => {
//         if(err){
//             throw err
//         }
    
    
//         console.log('Added data ');
    
//     })

//     console.log('File Created');

// })

// read a file
// read file async baki kaam block nahi hoga


// fs.readFile(path.join(__dirname , 'test' , 'test.txt') , 'utf-8', 
// (err , data) => {
//     if(err){
//         throw err
//     }
//     // const content = Buffer.from(data);
//     // console.log(content.toString());

//     console.log(data);
// })



// OS Module
// server monitoring application 
// const os = require('os');
// console.log(os.type());
// console.log(os.platform());

// console.log("CPU architecture" , os.cpus());
// console.log(os.uptime());


// Events Module

// const  Emitter   = require('events'); //gives a class
// const { userInfo } = require('os');
// const myEmitter = new Emitter();
// myEmitter.on('somename' , (data) => {
//     console.log(data)
// })

// myEmitter.emit('somename' , {
//     name: "Pinu"
// });

// class Auth extends Emitter { // inheritance
//     register(username){
//         console.log('Registered Successfully');
//         this.emit('registered' , username);
//     }

// }

// const auth = new Auth();
//Listen emitted event
// multiple listeners on one event
// auth.on('registered' , (data) => {
//     console.log(`Sending email to ${data}`);
// })

// auth.on('registered' , (data) => {
//     console.log(`Sending welcome email to ${data}`);
// })

// auth.register("pinak");


// HTTP module to create server we ca fetch data store data on server HTTP module imp 





































