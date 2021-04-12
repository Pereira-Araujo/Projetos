const contar = () =>{
let texto = document.querySelector('.card__texto').value
let quantidade = document.querySelector('.card__contador')
let index = 0 
const palavras = []
let textoSeparado = texto.split(/\s+/)

for(index;index<textoSeparado.length;index++){
  if(textoSeparado[index] !=="" ){
    palavras.push(textoSeparado[index])
  }
}

quantidade.innerHTML = palavras.length
}