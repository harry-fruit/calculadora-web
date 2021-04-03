const printer = document.querySelector('#printer')
const armazemDeFuncoes = {
    printer: document.querySelector('#printer'),
    apagarInfo (){
        this.printer.innerHTML = ''
    },
    addValue(data){
        const newValor = data
        const currentValue = document.getElementsByTagName('p')[0].innerText
    
        if(currentValue.length == 50){
            this.printer.innerHTML = currentValue
        }else{
            this.printer.innerHTML = currentValue.concat(newValor)
        }
    },
    calcularResultado(){
        const resultado = this.printer.innerText
            this.printer.innerHTML = eval(resultado)
    },
    factorial (numero){
        if(numero){
            let currentValue = 1
        for(let i = 1; i <= numero; i++){
            currentValue *= i
        }
        this.printer.innerHTML = currentValue
        }else{
            alert('Primeiramente insira um valor')       
        }
    },
    clicaveis (){
        const botaoHTMLCollection = document.getElementsByClassName('botao')
        const botao = Array.from(botaoHTMLCollection)
        
        botao.forEach((elem, index) => {
            elem.addEventListener('click', ()=>{
                const currentValue = this.printer.innerText
                const newValue = elem.innerText
        
                currentValue.length == 5 ? this.printer = this.printer : this.printer.innerHTML = currentValue.concat(newValue)
            })
        })
    }
}

const delInfo = armazemDeFuncoes.apagarInfo
const addValor = armazemDeFuncoes.addValue
const calcResultado = armazemDeFuncoes.calcularResultado
const fatorial = armazemDeFuncoes.factorial
const clickButton = armazemDeFuncoes.clicaveis


