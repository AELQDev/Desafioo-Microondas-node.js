
const pipoca=(tempo)=>{

    console.log("Pipoca foi escolhida⏱:10s")
    if (tempo < 10) console.log("O tempo foi insuficiente")

    if(tempo >= 21) console.log("A comida Queimou")
  
    if(tempo >= 31) console.log("Kabum!!")

    if (tempo <= 20) console.log( "Prato pronto, bom apetite!!!")
    }

const maca = (tempo) => {

    console.log("Macarrão foi escolhida⏱:8s")

    if (tempo < 8) console.log("O tempo foi insuficiente")
    
    if(tempo >= 17) console.log("A comida Queimou")
    
    if(tempo >= 25) console.log("Kabum!!")
    
    if (tempo <= 16) console.log( "Prato pronto, bom apetite!!!")
}
const carne = (tempo) => {

    console.log("Carne foi escolhida⏱:15")
    if (tempo < 15) console.log("O tempo foi insuficiente")
  
    if(tempo >= 31) console.log("A comida Queimou")
    
    if(tempo >= 46) console.log("Kabum!!")
   
    if (tempo <= 30) console.log( "Prato pronto, bom apetite!!!")
}
const feijao = (tempo) => {

    console.log("Feijão foi escolhida⏱:12")
    if (tempo > 12) console.log("O tempo foi insuficiente")
  
    if(tempo >= 25) console.log("A comida Queimou")
   
    if(tempo >= 37) console.log("Kabum!!")

    if (tempo <= 24) console.log( "Prato pronto, bom apetite!!!")
    
}
const brigadeiro=(tempo)=>{

    console.log("Brigadeiro foi escolhida⏱:8")
    if (tempo > 8) console.log("O tempo foi insuficiente")
 
    if(tempo >= 17) console.log("A comida Queimou")
   
    if(tempo >= 25) console.log("Kabum!!")
   
    if (tempo <= 16) console.log( "Prato pronto, bom apetite!!!")

    console.log( "Prato pronto, bom apetite!!!")
    
}

const escolha=(tipoComida, tempo) =>{
    console.log("Escolha uma opção de (1 a 5) e o tempo ⏱")
    //Digite em baixo para escolher o prato
if (tipoComida === 1 ) pipoca(tempo)
if (tipoComida === 2 ) maca(tempo)
if (tipoComida === 3 ) carne(tempo)
if (tipoComida === 4 ) feijao(tempo)
if (tipoComida === 5 ) brigadeiro(tempo)
if (tipoComida >5 )console.log("Prato Inexistente")
}

escolha(2,16)

module.exports = escolha;