const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputPeso = evento.target.querySelector("#peso");
  const inputAltura = evento.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    darResposta("Peso Inválido", false);
    return;
  }

  if (!altura) {
    darResposta("Altura Inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const mensagem = `Seu IMC é ${imc} (${nivelImc})`;
  darResposta(mensagem, true);

  inputPeso.value = "";
  inputAltura.value = "";
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
function criaP() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

const darResposta = (mensagem, validacao) => {
  const resposta = document.querySelector("#resposta");
  resposta.innerHTML = "";

  const paragrafo = criaP();

  if (validacao) {
    paragrafo.classList.add("positivo");
  } else {
    paragrafo.classList.add("negativo");
  }

  paragrafo.innerHTML = mensagem;
  resposta.appendChild(paragrafo);
};
