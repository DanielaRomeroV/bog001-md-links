const fs = require('fs');
const path = require('path');
const markedHTML = require('marked');
const { JSDOM } = require('jsdom');
const direccion = 'carpeta1/PRUEBA.md';



//Función que valida la extención del archivo
function validatePath(pathFile) {
    if (path.extname(pathFile) === '.md') {
        return true;
    } else {
        return false;
    }
}

// Función que transforma la dirección de relativa a absoluta
function fixerPath(pathFile) {
    return path.resolve(pathFile);
}


function readMD(pathFile) {

    const links = []; //Crea arreglo donde se almacenarán los links del archivo
    const readAllMD = fs.readFileSync(pathFile, 'utf-8'); //Metodo para leer el archivo md de forma sincrona

    console.log(readAllMD);
    console.log("Terminó archivo");
    const fileMDtoHTML = markedHTML(readAllMD); //Transforma el texto md en formato html
    const tempDom = new JSDOM(`<!DOCTYPE html>${fileMDtoHTML}`); //Crea DOM temporal para obtener los links
    tempDom.window.document.querySelectorAll('a').forEach((linkinHTML) => {// ciclo para obtener los links
        const getHref = linkinHTML.getAttribute('href');
        const getText = linkinHTML.innerHTML;
        const getFile = pathFile;

        links.push({
            getHref,
            getText: getText,
            getFile: getFile,
        });
    });

    return links;
}

//module.exports = getLinks;



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
  
  
  mdlinks(direccion, null);
  




