const mdLinks = require('../index');
const path = require('path');



describe('Valida MDLinks', () => {
  it('Valida leer el archivo mdlinks', () =>{
    const direction = 'src/carpeta1/PRUEBA.md';
    const options = {
      validate: false,
      stats: false
    };

    return mdLinks(direction,options).then({
      string:'C:\Users\Asus\Documents\bog001-md-links\src\carpeta1\PRUEBA.md',
      string:'Holi esto es una prueba',
      string:'https://es.wikipedia.orgn/',
      string:'https://www.npmjs.com/package/jsdom',
      string:'Terminó archivo',
      link: 'https://es.wikipedia.orgn/',
      link: 'https://www.npmjs.com/package/jsdom'
    });
  });

  it('Valida opcion validate', () =>{
    const direction = 'src/carpeta1/PRUEBA.md';
    const options = {
      validate: true,
      stats: false
    };

    return mdLinks(direction,options).then({
      int:500,
      string:'FAILED',
      int:200,
      string:'SUCCESS'
    });
  });

  it('Valida opcion stats', () =>{
    const direction = 'src/carpeta1/PRUEBA.md';
    const options = {
      validate: false,
      stats: true
    };

    return mdLinks(direction,options).then({
      int:2,
      int:2,
    });
  });

  it('Valida ambas opciones', () =>{
    const direction = 'src/carpeta1/PRUEBA.md';
    const options = {
      validate: true,
      stats: true
    };

    return mdLinks(direction,options).then({
      int:2,
      int:2,
      int:1,
    });
  });  
});
