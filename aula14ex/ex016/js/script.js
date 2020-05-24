function contador(){
    var inicio = document.getElementById('inicioNumero')
    var fim = document.getElementById('fimNumero')
    var passo = document.getElementById('passoNumero')
    var msg = document.getElementById('contando')
    for(inicio = 'inicioNumero';fim <= 'fimNumero'; passo = 'passoNumero' ){
        msg.innerHTML = `${inicio <= fim}`
    }
}