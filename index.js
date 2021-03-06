const validatePath = require('./src/validatePath.js');
const fixerPath = require('./src/fixerPath.js');
const readMD = require('./src/readMD.js');
const validateLinks = require('./src/validateLinks.js');
const validateStats = require('./src/validateStats');
const statsLinks = require('./src/statsLinks.js');
const path = require('path');



//funcion mdlinks
const mdlinks = (pathFile, options) => {
    return new Promise((resolve, reject) => {

        let linksInMD = [];//arreglo donde guardamos todo el objeto
        
        if (!validatePath(pathFile)) {
            reject(console.log("No es archivo md"));
        } else {
            const fixPath = fixerPath(pathFile); // coje la funcion que transforma la ruta en absoluta
            console.log(fixPath);

            linksInMD = readMD(fixPath); // guarda en un arreglo los links que se encuentran en el archivo, e imprime los validos.
            linksInMD.forEach(link => {
                console.log("link: " + link.getHref);
            });

            if (options.validate === true && options.stats === false) {
                linksInMD = validateLinks(linksInMD);


            }
            if (options.validate === true && options.stats === true) {
                linksInMD = validateStats(linksInMD);

            }
            if (options.validate === false && options.stats === true) {
                linksInMD = statsLinks(linksInMD);
            }
            resolve(linksInMD);
        }
    });
};

module.exports = mdlinks;


const direction = 'src/carpeta1/PRUEBA.md';
    const options = {
      validate: true,
      stats: true
    };

    mdlinks(direction, options);





