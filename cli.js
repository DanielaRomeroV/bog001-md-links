#! / usr / bin / env nodo


const [,, ...args] = process.argv

console.log(`hello word ${args}`)

/*#!/usr/bin/env node

const mdLinks = require('../src')
const process = require('process');
const path = require('path');

const args = process.argv;

if(args.length > 5 || args.length < 3){
    return console.log("Wrong number of arguments")
}

let pathFile = args[2];
pathFile = path.resolve(pathFile);

let options = {
    validate: false,
    stats: false
  }

args.forEach(element =>{
    if( element == "--stats") {
      options.stats = true;
    } else if (element == "--validate") {
      options.validate = true;
    }
  })

mdLinks(pathFile, options).then((data) => {
    let result = "";
    if(options.validate && !options.stats){
        let dataMap = data.map((link) => link.file + " " + link.href + " " + link.ok + " " + link.status + " " + link.text)
        result = dataMap.join("\n ");
        
      } else if (options.stats && !options.validate) { 
          result = "Total: " + data.Total + "\nUnique: " + data.Unique; 
        
      } else if (options.validate && options.stats) {       
        result = "Total: " + data.Total + "\nUnique: " + data.Unique + "\nBroken: " + data.Broken;
        
      } else {
        let dataMap = data.map((link) => link.file + " " + link.href + " " + link.text)
        result = dataMap.join("\n ");    
      } 

      return console.log(result);
  }).catch(err => console.error(`Error: ${err}`));*/