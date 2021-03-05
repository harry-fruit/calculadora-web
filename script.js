<<<<<<< Updated upstream
//DeleteData
=======
 // Add Value
function addValue(data){
    const newValor = data
    const currentValue = document.getElementsByTagName('p')[0].innerText

    if(currentValue.length == 50){
        document.getElementById('printer').innerHTML = currentValue
    }else{
        document.getElementById('printer').innerHTML = currentValue.concat(newValor)
    }
}
 
 //DeleteData
>>>>>>> Stashed changes
 function apagarInfo (){
    document.getElementById('printer').innerHTML = ''
}

<<<<<<< Updated upstream

// Add Value
function addValue(data){
    const newValor = data
    const currentValue = document.getElementsByTagName('p')[0].innerText

    if(currentValue.length == 50){
        document.getElementById('printer').innerHTML = currentValue
    }else{
        document.getElementById('printer').innerHTML = currentValue.concat(newValor)
    }
}


=======
>>>>>>> Stashed changes
// = 
function calcularResultado(){
    const resultado = document.getElementById('printer').innerText
        document.getElementById('printer').innerHTML = eval(resultado)
}

//factorial
function factorial (numero){
    if(numero){
        let currentValue = 1
    for(let i = 1; i <= numero; i++){
        currentValue *= i
    }
    document.querySelector('#printer').innerHTML = currentValue
    }else{
        alert('Primeiramente insira um valor')       
    }
}

