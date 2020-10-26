#!/usr/bin/env node

const mdLinks = require('./index');


const { argv } = require('yargs').check((argv, options) => { //ayuda a crear herramientas de linea de comandos 
  const filePaths = argv._

  if (filePaths.length !== 1) { // si el usuario no puso ningun link, le arrojara un error y no ejecutara nada 
      throw new Error("You need to pass a path to the file to read")
  } else {
      return true 
  }
}).options({ // le ponemos unas opciones o los comandos que queramos ver en node
  'validate': {
      'describe': 'Validates each link to check if the link is broken or not',
      demandOption: false,
      default: false,
      type: "boolean"
  },
  'stats': {
      'describe': 'Shows some basic statistics about the links in the file',
      demandOption: false,
      default: false,
      type: "boolean"
  }
});


/*con el metodo mdlinks le pasamos los parametros: 
argv._[0] = es el primer parametro el que contiene el link
arg.validate = argumento para hacer la validación , por default tiene el valor false
arg.stats= argumento para hacer stats , por default tiene el valor false */

  mdLinks(argv._[0], { validate: argv.validate, stats: argv.stats });
 

