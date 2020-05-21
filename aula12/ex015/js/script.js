function verificar(){
    var data = new Date()   
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano || formAno.value < formAno - 120)    {
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)

        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero}, com ${idade} anos.`
        
    }
}


    
