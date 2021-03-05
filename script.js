 //DeleteData
 function apagarInfo (){
    document.getElementById('printer').innerHTML = ''
}

//power
 function power (){
    const current = document.getElementById('printer').innerText
    return document.getElementById('printer').innerHTML = current.concat(newValue)
}

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

