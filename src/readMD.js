const fs = require('fs');
const path = require('path');
const markedHTML = require('marked');
const { JSDOM } = require('jsdom');
const direccion = 'carpeta1/PRUEBA.md';

//Funcion que lee y extrae los links del archivo
const readMD =(pathFile) =>{

    const links = []; //Crea arreglo donde se almacenarán los links del archivo
    const readAllMD = fs.readFileSync(pathFile, 'utf-8'); //Metodo para leer el archivo md de forma sincrona


    const fileMDtoHTML = markedHTML(readAllMD); //Transforma el texto md en formato html
    const tempDom = new JSDOM(`<!DOCTYPE html>${fileMDtoHTML}`); //Crea DOM temporal para obtener los links

    tempDom.window.document.querySelectorAll('a').forEach((linkinHTML) => {// ciclo para obtener los links
        const getHref = linkinHTML.getAttribute('href');
        const getText = linkinHTML.innerHTML;
        const getFile = pathFile;

        links.push({ getHref, getText, getFile, });//agrega estos atributos al arreglo links
    });

    return links;
};

module.exports = readMD;
