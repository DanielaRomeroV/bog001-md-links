const fs = requiere('fs');

fs.readFile('PRUEBA.md', {encoding: 'utf8'}, readFiles);
function readFiles(error, datos) {
    if(error){
        console.log(`Error: ${error}`);
    } else {
        console.log(`Datos: ${datos}`);
    }
};