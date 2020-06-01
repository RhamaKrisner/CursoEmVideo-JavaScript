let num = document.getElementById('num')
let lista = document.getElementById('flista') 
let res = document.getElementById('res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
 if (isNumber(num.value) && !inLista(num.value, valores))   {
    var item = document.createElement('option')
    item.text = `${num.value}`
    lista.appendChild(item)
 }else{
     window.alert('Valor inválido ou já encontrado na lista.')
 }


}