const fetch = require('node-fetch');

//Funcion que valida los links
const validateLinks = (AllLinks)=>{
  let validatedLinks = AllLinks.map(link => {
    return fetch(link.getHref).then(response => {
      link.statusCode = response.status;
      link.statusDesc = 'SUCCESS';
      console.log("codigo: "+link.statusCode);
          console.log("respuesta: "+link.statusDesc);
          console.log(Object.values(link));
      return link;
    }).catch(error => {
      let status = 500;
      if (error.response) {
        status = error.response.status;// Respuesta de error interno del servidor
      }
      if (error.request) {
        status = 503; // Respuesta de error servidor ocupado
      }
      link.statusCode = status;
      link.statusDesc = 'FAILED';
      console.log("codigo: "+link.statusCode);
          console.log("respuesta: "+link.statusDesc);
          console.log(Object.values(link));
      return link;
    });

  });

  return Promise.all(validatedLinks).then(response => response);
}

module.exports = validateLinks;