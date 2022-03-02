const { keyIn } = require("readline-sync");

/* =>Definido a função Comidas
    =>Dentro dela temos o Vetor comida a qual trás as strings 
    =>Dentro também tem o Vetor tempo
    => O vetor comida[0] refere-se a "Pipoca" a qual é proposional ao vetor tempo[0] que é 10 segundos , para matriz [0] de [0] tempos "Pipoca" a 10s
*/
const comidas=() =>{

    const comida = ["1-Pipoca🍿","2-Macarrão🍜","3-Carne🍖","4-Feijão🥘","5-Brigadeiro🍬"];
     const tempo=[10,8,15,12,8];
    for(let c =0;c<comida.length;c++){
console.log(`${comida[c]}:${tempo[c]}`);
    }


 

}
comidas()
 module.exports = comidas; 

 
 /* => Sistema de swith para matriz .
   =>    1      2        3     4      5 
Comida|Pipoca|Macarrão|Carne|Feijão|Brigadeiro|
Tempo |10s   |8s      | 15s | 12s  |8s        |
Caso tempo*2 = Alimento queimou 
Caso tempo*3 = Kabumm!
Cado !comida = Alimento não listado no menu 
No final microondas deve dizer  "Prato pronto, bom apetite!!!".
*/