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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && < 10){
                //criança
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
            }else if(idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero}, com ${idade} anos.`
        
    }
}


    
