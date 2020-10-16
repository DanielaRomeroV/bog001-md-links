//retorna el resulta segun las opciones y lo guarda en una promesa
const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
      let result = [];
      if (options.validate && !options.stats) {
        result = onlyValidate(path);
      } else if (options.stats && !options.validate) {
        result = onlyStats(path);
      } else if (options.validate && options.stats) {
        result = validateAdnStats(path);
      } else {
        result = noOptions(path);
      }
      resolve(result);
    });
  };
  
  module.exports = mdLinks; 
  

  //creacion de promesa
const suma = (x, y) => {
    return new Promise((resolve, reject) => {
      
        if (typeof x === 'number') {
            resolve( x + y );
        } else if (typeof y === 'number') {
            resolve( x + y );
        }
        reject('No es un number')
    })
}
console.log(suma(2, 8));
suma (2, 8)
.then((response) => { //consumo de promesa
       
    console.log('la suma es igual a ' + response);
})
.catch((error) => {
    console.log('error ' + error);
})

////funcion mdlinks
function mdlinks(pathFile, options) {

    if (!validatePath(pathFile)) {
        console.log("No es archivo md"); // valida extension archivo        
    } else {
        const fixPath = fixerPath(pathFile); // coje la funcion que transforma la ruta en absoluta
        console.log(fixPath);

        let linksInMD = readMD(fixPath); // guarda en un arreglo los links que se encuentran en el archivo, e imprime los validos.
        linksInMD.forEach(link => {
            console.log("link: " + link.getHref);
        });

        if (options.validate === true && options.stats === false) {
            validateLinks(linksInMD);
            
        }
        if (options.validate === true && options.stats === true) {
            let validateFix = validateLinks(linksInMD);
            statsLinks(validateFix);
            
        }
        if (options.validate === false && options.stats === true) {            
            statsLinks(linksInMD);
        }
    }
}

const options = {
    validate: true,
    stats: false
}

mdlinks(direction, options);