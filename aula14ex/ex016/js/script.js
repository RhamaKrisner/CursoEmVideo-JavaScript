function contar(){
    var inicio = document.getElementById('inicioNumero')
    var fim = document.getElementById('fimNumero')
    var passo = document.getElementById('passoNumero')
    var msg = document.getElementById('contando')
    var res = document.getElementById('res')
    
    while(inicio <= fim){
      res.innerHTML = document.write(inicio)
        inicio+=passo
    }
}