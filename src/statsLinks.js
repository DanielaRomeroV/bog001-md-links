//Funcion que valida las estadisticas de los links

const statsLinks = (AllLinks = []) => {

  let unique = new Set(AllLinks.map(link => link.getHref));
  let stats = [AllLinks.length, unique.size]
  let broken = 0;

  AllLinks.forEach(link => {//        
    if (link.statusCode === 500 || link.statusCode === 503) {
      broken++;
    }
  });
  stats.push(broken);
  console.log(Object.values(stats));

  return stats;
}

module.exports = statsLinks;