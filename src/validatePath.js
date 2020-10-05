const path = require('path');

//Función que valida la extención del archivo
const validatePath = (pathFile)=> {
    if (path.extname(pathFile) === '.md') {
        return true;
    } else {
        return false;
    }
};

module.exports = validatePath;