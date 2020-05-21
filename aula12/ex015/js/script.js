function verificar(){
    var data = new Date()   
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano || formAno.value < formAno - 120)    {
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')[0]
        var idade = ano - formAno.value
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `${genero} com ${idade} anos.`
    }
}