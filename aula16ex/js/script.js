function adicionar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('adicionar')
    if(num.value.length == 0){
        window.alert('Número não identificado. Adicione um valor')
    }else{
        var n = Number(num.value)
        //tab.innerHTML = ''
        var item = document.createElement('option')           
        item.appendChild(item)

    }
}