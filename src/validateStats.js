const fetch = require('node-fetch');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Funcion que valida los links
const validateStats = (AllLinks) => {
  let unique = [];
  AllLinks.forEach(link => unique.push(link.getHref));
  let stats = [AllLinks.length, unique.length];
  let broken = 0;

  AllLinks.forEach(link => {

    let req = new XMLHttpRequest();
  req.open("GET", link.getHref, false);
  req.send(null);
  if(req.status != 200){
    broken++;
  }  
  });
  stats.push(broken);
  console.log(Object.values(stats));
  return stats;
}


module.exports = validateStats;