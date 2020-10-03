const fetch = require('node-fetch');

//peticion http con fetch

/*
fetch(url) // 1
.then(response => response.json()) // 2
.then(console.log) // 3
.catch(console.log('Algo salió mal.'));*/

const validateLinks = arrayLinks => {

    let validated = arrayLinks.map( link => {
 
      return fetch(link.href)
      .then(resp => {
          link.statusCode = resp.status;
          link.response = resp.statusText;
 
          return link;
 
      }).catch(error => {
        link.statusCode = 500;
        link.response = 'FAILED';
 
        return link;
      })
    });
    return Promise.all(validated).then(resp => resp);
 };
 
 module.exports = validateLinks;