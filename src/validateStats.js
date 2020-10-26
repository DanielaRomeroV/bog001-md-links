const fetch = require('node-fetch');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//peticion http

//Funcion que valida los links y hace estadisticas
const validateStats = (AllLinks) => {
  
  let unique = [];//guarda el tamaño de los links que obtuvo

  AllLinks.forEach(link => unique.push(link.getHref));// unique se llena con el parametro link.getHref 
  let stats = [AllLinks.length, unique.length];//llenamos el arreglo stats con ambos parametros
  
  let broken = 0;//contador que nos va a decir cuantos links estan rotos

  AllLinks.forEach(link => {

  let req = new XMLHttpRequest();
  req.open("GET", link.getHref, false);//consumir metodo open pasandole los parametros (metodo,url,async)
  req.send(null);//send no va a llevar ningun parametro

  if(req.status != 200){//validar links incorrectos
    broken++;
  }  

  });

  stats.push(broken);
  console.log(Object.values(stats));//imprimo todos los parametros del objeto

  return stats;
}


module.exports = validateStats;