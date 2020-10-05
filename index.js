const validatePath = require('./src/validatePath.js');
const fixerPath = require('./src/fixerPath.js');
const readMD = require('./src/readMD.js');
const validateLinks = require('./src/validateLinks.js');
const statsLinks = require('./src/statsLinks.js');

const path = require('path');

const direccion = 'src/carpeta1/PRUEBA.md';

//funcion mdlinks
function mdlinks(pathFile, options) {
    if (!validatePath(pathFile)) {
        console.log("No es archivo md"); // valida extension archivo        
    } else {
        const fixPath = fixerPath(pathFile); // coje la funcion que transforma la ruta en absoluta
        console.log(fixPath);

        let linksInMD = readMD(fixPath); // guarda en un arreglo los links que se encuentran en el archivo, e imprime los validos.
        linksInMD.forEach(link => {
            console.log("link: " + link.getHref);
        });

        if (options.validate === true && options.stats === false) {
            validateLinks(linksInMD);
            
        }
        if (options.validate === true && options.stats === true) {
            let validateL = validateLinks(linksInMD);
            statsLinks(validateL);
        }
        if (options.validate === false && options.stats === true) {
            validateLinks(linksInMD);
        }
    }
}

const opciones = {
    validate: true,
    stats: false
}

mdlinks(direccion, opciones);


//module.exports = mdlinks;