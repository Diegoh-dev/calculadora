

const insert = (num) => {
    // insere os numero no input

    var numero = document.getElementById('text-value').innerHTML

    document.getElementById('text-value').innerHTML = numero + num
    
}

const clean = () => {

   document.getElementById('text-value').innerHTML = ''
   
}


const calcular = () => {

    var numero = document.getElementById('text-value').innerHTML

    if(numero){
        document.getElementById('text-value').innerHTML = eval(numero)
    }else{
        document.getElementById('text-value').innerHTML = 'Calcule algo'
    }
}