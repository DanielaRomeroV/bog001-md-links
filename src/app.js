const fs = require('fs');

fs.readFile('PRUEBA.md', {encoding: 'utf8'}, function(error, datos) {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(`Datos: ${datos}`);
    }
})