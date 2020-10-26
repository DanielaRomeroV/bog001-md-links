const fetch = require('node-fetch');

//Funcion que valida los links
const validateLinks = (AllLinks)=> {//recibe el objeto alllinks
  let validatedLinks = AllLinks.map(link => { //por cada link tiene que hacer peticion de fetch
      return fetch(link.getHref).then(response => { //consulta HTTP

      link.statusCode = response.status;
      link.statusDesc = 'SUCCESS'; 

      console.log("codigo: "+link.statusCode);
      console.log("respuesta: "+link.statusDesc);
      console.log(Object.values(link));//imprime todos los parametros del objeto links
      
      return link;
    }).catch(error => {
      let status = 500;
            
      link.statusCode = status;
      link.statusDesc = 'FAILED';

      console.log("codigo: "+link.statusCode);
          console.log("respuesta: "+link.statusDesc);
          console.log(Object.values(link));
          
      return link;
    });

  });

  return Promise.all(validatedLinks).then(response => response);//respuesta de las promesas que creamos con fetch
}

module.exports = validateLinks;