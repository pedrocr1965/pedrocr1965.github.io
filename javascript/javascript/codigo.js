var miobjeto = {
nombre: "Juan",
edad: 30
};
function calcula(){
    var operando1 = Number(document.forms[0].operando1.value)
    var operando2 = Number(document.forms[0].operando2.value)
    var operador = Number(document.forms[0].operador.value)
    var result = eval(operando1 + operador + operando2)
    document.forms[0].resultado.value = result
}