//Funcion que valida las estadisticas de los links

const statsLinks = (AllLinks = []) => {

  let unique = new Set(AllLinks.map(link => link.getHref));
  let stats = [AllLinks.length, unique.size]
  console.log(Object.values(stats));

  return stats;
}

module.exports = statsLinks;