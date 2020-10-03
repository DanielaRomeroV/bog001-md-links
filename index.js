const getLinks = require('./src/extractLinks.js');
const validateLinks = require('./src/validateLinks.js');
const path = require('path');



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
  }
}


//mdlinks(direccion, null);


module.exports = mdlinks;