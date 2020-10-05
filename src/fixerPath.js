const path = require('path');

// Función que transforma la dirección de relativa a absoluta
const fixerPath = (pathFile) =>{
    return path.resolve(pathFile);
};

module.exports = fixerPath;