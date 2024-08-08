// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;
let campoAventura

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade: ")
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
  
}

function draw() {
  background(255);
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let idade = campoIdade.value();  
  let recomendacao = geraRecomendacao(idade,gostaDeFantasia);
  fill(color(76,0,115))
  textAlign(CENTER, CENTER)
  textSize(33)
  text(recomendacao, width /2, height /2 );
}
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "O menino que descobriu o vento";
           } else {
             if (idade>= 12){
               if(gostaDeFantasia || gostaDeAventura){
                 return "Homen-Aranha: No aranha verso"
               } else {
                 return "Ladroes de bicicleta";
              }
             }    else{             
                  if(gostaDeFantasia){
                    return "As aventuras de Pi";
                }   else {
                    return "Depois da chuva";
                }
              }
            }
    } else {
      if(gostaDeFantasia){
        return "A viagem de Chihiro";
      }else{
        return " O fentiço do tempo";
      }
    }
}
