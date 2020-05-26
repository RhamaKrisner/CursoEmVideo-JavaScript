function contar(){
    var inicio = Number(document.getElementById('inicioNumero').value)
    var fim = Number(document.getElementById('fimNumero').value)
    var passo = Number(document.getElementById('passoNumero').value)
    var res = document.getElementById('res')
    
    for(var i = 0; i <= fim; i+= passo){
      res+=(`=>${i}`)
    }
    var res = document.getElementById('res').innerText

}