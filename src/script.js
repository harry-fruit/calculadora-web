const armazemDeFuncoes = {
    apagarInfo (){
        document.getElementById('printer').innerHTML = ''
    },
    addValue(data){
        const newValor = data
        const currentValue = document.getElementsByTagName('p')[0].innerText
    
        if(currentValue.length == 50){
            document.getElementById('printer').innerHTML = currentValue
        }else{
            document.getElementById('printer').innerHTML = currentValue.concat(newValor)
        }
    },
    calcularResultado(){
        const resultado = document.getElementById('printer').innerText
            document.getElementById('printer').innerHTML = eval(resultado)
    },
    factorial (numero){
        if(numero){
            let currentValue = 1
        for(let i = 1; i <= numero; i++){
            currentValue *= i
        }
        document.querySelector('#printer').innerHTML = currentValue
        }else{
            alert('Primeiramente insira um valor')       
        }
    },
    clicaveis (){
        const but = document.getElementsByClassName('botao')
        
        for(let i = 0; i < but.length; i++){
            document.getElementsByClassName('botao')[i].addEventListener('click', e=>{
                const currentValue = document.querySelector('#printer').innerText
                const newValue = but[i].innerText
                
                if(currentValue.length == 50){
                    document.querySelector('#printer') = currentValue
                }else{
                    document.querySelector('#printer').innerHTML = currentValue.concat(newValue)
                }
            })
        }
    }
}

const delInfo = armazemDeFuncoes.apagarInfo
const addValor = armazemDeFuncoes.addValue
const calcResultado = armazemDeFuncoes.calcularResultado
const fatorial = armazemDeFuncoes.factorial
const clickButton = armazemDeFuncoes.clicaveis


