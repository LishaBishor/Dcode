const express = require("express");
const app = new express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { exec } = require('child_process');
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
app.use(morgan("dev"));
app.use(cors());
const solc = require('solc');
// function for compiling code in solidity
function compileSolidity(code) {
    const solc = require('solc');
    return new Promise((resolve, reject) => {
        exec(`echo "${code}" | ${solc} --standard-json`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}

// function for compiling code in rust
function compileRust(code) {
    return new Promise((resolve, reject) => {
        exec(`echo "${code}" > temp.rs && rustc temp.rs -o temp && ./temp`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}
// function for compiling code in motoko
function compileMotoko(code) {
    return new Promise((resolve, reject) => {
        exec(`echo "${code}" | moc -r`, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}

//app.post('/compile', (req, res) => {
    // const { code, language, difficulty } = req.body;
    

    // // Call appropriate compilation function based on the selected language
    // let result;
   //  if (req.body.language === 'solidity') {
   //     result = compileSolidity(code);
    // } else if (language === 'rust') {
    //     result = compileRust(code);
    // } else if (language === 'motoko') {
    //     result = compileMotoko(code);
    // }

    // // Return compilation result
  //  res.json("hello");
//});

app.post('/api/compile', (req,res)=>{  
    const language=req.body.language;
    const code=req.body.code;
    if (!language || !code) {
        return res.status(400).json({ error: 'Language and code are required.' });
    }
    try {
                    
    
    if (language === 'solidity') {
            result=  compileSolidity(code);
    }
     else if (language === 'rust') {
             result =  compileRust(code);
          } 
     else if (language === 'motoko') {
             result =  compileMotoko(code);
          }
        res.json({message:`Compiled Successfully`,result:result})
    } catch (error) {
        console.log("failed")
        res.status(400).json("nopost");
     }
 })



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`The server is running at ${PORT} `)
})