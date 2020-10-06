const mdLinks = require('../index');
const path = require('path');




describe('mdLinks', () => {

  it('deberia leer un archivo markdown y obtener los links', () => {
    const mockFile = path.resolve('.test/mock.md');

   return mdLinks(mockFile).then(links => {
    expect(links.length).toBe(2);
    expect(links[0]).toEqual({
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: mockFile
   });
  });
});



