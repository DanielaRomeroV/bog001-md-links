const fs = require('fs');
const path = require('path');
const direccion = 'carpeta1/PRUEBA.md';

//validar si el archivo es extension md
if (path.extname(direccion) === '.md') {
    console.log('si es un markdown');
    fs.readFile(direccion, { encoding: 'utf8' }, function (error, datos) {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            console.log(`Datos: ${datos}`);
        }
    })
} else {
    console.log('no es markdown')
};

//volver el archivo md en html y extraer lo que hay dentro (href, file, text)



//si es archivo o carpeta, recursion asincronia y promesas.
/*const fs = require('fs').promises;
const path = require('path');

const tree = (fname) => {
    return fs.stat(fname);
.then(stats => {
        if (!stats.isDirectory()) {

        };

    });
};


tree(path.resolve(process.argv[2]));
.then(console.log)
.catch(console.error);*/
