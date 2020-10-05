const mdLinks = require('../');
const path = require('path');


describe('mdLinks', () => {

  it('deberia leer un archivo markdown y obtener los links', () => {
    const mockFile = path.resolve('.test/mock.md');

   return mdLinks(mockFile).then(links => {
    expect(links.length).toBe(3);
    expect(links[0]).toEqual({
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: mockFile
   });
  });
});



//funcion que valida la extension
//funcion que vuelve rutas a absolutas

