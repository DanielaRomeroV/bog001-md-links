//Funcion que valida las estadisticas de los links

const statsLinks = (AllLinks = []) => {//recibe un parametro que es un arreglo

  let unique = new Set(AllLinks.map(link => link.getHref));// unique esta tomando link.getHref con new set
  let stats = [AllLinks.length, unique.size]//llenar objeto stats con el tamaño de all links y unique
  console.log(Object.values(stats));

  return stats;
}

module.exports = statsLinks;