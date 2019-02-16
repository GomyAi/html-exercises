function calcular(operadorA, operadorB, operador){
    let result = 0
    if (operacion == 'suma'){
        result = operadorA + operadorB
    } else if (operador == 'resta'){
        result =operadorA - operadorB
    }
}



window.addEventListener('load', function(){
    //cuando se ejecuta una accion se debe de hacer dentro de un elemento
    const operadorA = document.getElementById('operadorA')
    const operadorB = document.getElementById('operadorB')
    const operador = document.getElementById('operadores')
    
    const button = document.getElementById('calcular')
    button.addEventListener('click', function(){
    const result = calcular(operadorA.nodeValue, operadorB.nodeValue, operador.value)
    alert ("esto es elresultado de joel" + result)
    }
    
    //value = select.