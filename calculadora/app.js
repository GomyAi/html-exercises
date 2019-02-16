window.addEventListener('load', function(){
//cuando se ejecuta una accion se debe de hacer dentro de un elemento
const button = document.getElementById('calcular')
button.addEventListener('click', function(){
let operadorA = Number(document.getElementById('operadorA').value)
let operadorB = Number(document.getElementById('operadorB').value)
let operador = document.getElementById('operadores').value


//value = select.value
//const resta = document.getElementById('resta')

 if (operador == "suma"){
     
    let sumaTotal = operadorA + operadorB
    
     alert("La suma total es: " + sumaTotal )

 } else if (operador == "resta"){
     
    let restaTotal = operadorA - operadorB
    
     alert("La resta total es: " + restaTotal )

 } 

     

})//ejecuta un elemento a una accion.


    
}

)
    


