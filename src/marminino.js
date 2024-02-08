
//robert
function executar(numero) {
    if (numero % 3 == 0 && numero % 4 == 0){
        return "MarMinino"
    } if (numero % 3 == 0){
        return "Mar"
    } if (numero % 4 == 0){
        return "Minino"
    }
    return "";
    //return "Mar";
    //return "Minino"
    //return "MarMinino";
}

module.exports = executar;