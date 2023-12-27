// console.log("Hello node js");

// HTTP Module
const http = require('http');
// create server using node js

const fs = require('fs');
const path = require('path');



const app = http.createServer((req , res) => {
    // takes a function with parameter request and response
    // res.end("<h1>Hello on SERVER</h1>");
    // node mon restarts server as it is added as script
    // 
    // console.log(req.url);

    // change headers
    // can be seen in networks in inspect element
    // res.writeHead(200 , {
    //     'Content-Type': 'text/html'
    // })

    // if (req.url === "/"){

    //     fs.readFile(path.join(__dirname, 'public' , 'index.html') , (err , content) => {
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     })
    // }
    // else if (req.url === "/about"){
    //     fs.readFile(path.join(__dirname, 'public' , 'about.html') , (err , content) => {
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     })
    // }
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url); 
    let contentType = 'text/html';
    let ext = path.extname(filePath);
    if (!ext) {
        filePath += '.html'

    }
    switch(ext){
        case '.css':
            contentType =  'text/css'
            break
        
        case '.js':
            contentType = 'text/javascript'
            break

        default: 
            contentType = 'text/html'
        

    }

    fs.readFile(filePath , (err , content) => {
        if(err){
            fs.readFile(path.join(__dirname , 'public' , 'error.html') , (err , data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error !!!');
                    
                }
                else{
                    res.writeHead(404 , {
                        'Content-Type' : contentType
                    })
                    res.end(data)
                }
            })
        }
        else{
            res.writeHead(200,{
                'Content-Type' : contentType
            })
            res.end(content)

        }
    })



})

const PORT = process.env.PORT || 3000; // 3000 port will not always be availabe used during deploy

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`);
});