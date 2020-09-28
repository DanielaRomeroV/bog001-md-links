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
    const expression = '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$'; //Expresión regular con la que se validarán los links
    //const expression = '^(http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
    const valExp = new RegExp(expression); // Crea objeto de referencia para validar los links basandose en la expresion regular
    const readAllMD = fs.readFileSync(pathFile, 'utf-8'); //Metodo para leer el archivo md

    console.log(readAllMD);
    console.log("Terminó archivo");
    
    const fileMDtoHTML = markedHTML(readAllMD); //Transforma el texto md en formato html
    const tempDom = new JSDOM(`<!DOCTYPE html>${fileMDtoHTML}`); //Crea DOM temporal para obtener los links
    tempDom.window.document.querySelectorAll('a').forEach((linkinHTML) => {// ciclo para obtener los links
        const getHref = linkinHTML.getAttribute('href');
        const getText = linkinHTML.innerHTML;
        const getFile = pathFile;
        if (getHref.match(valExp)) {
            links.push({ getHref, getText, getFile });
        }
    });
    return links;
}


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