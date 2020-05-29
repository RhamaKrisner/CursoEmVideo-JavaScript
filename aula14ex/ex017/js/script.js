function calcular(){
  var num = document.getElementById('num')  
  var res = document.getElementById('res')

  if(num.value.length == 0){
      res.innerHTML = 'Insira um valor em Número.'
  }else{
      var i = Number(num.value)
      var x = Number(num.value)
      for(var i = 1; i <= 10; i++){
          res.innerHTML +=`${x} x ${i} = ${x*i}<br>`
      }
  }
  
}
