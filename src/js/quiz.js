


function initQuiz() {
  
  alert("Seja bem-vindo ao questionário! Responda as perguntas abaixo para receber uma recomendação de carro.");

  
  var form = document.getElementById("quizForm");


  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); 
    var respostas = {}; 
    var totalPerguntas = 10; 

   
    for (var i = 1; i <= totalPerguntas; i++) {
      var resposta = document.querySelector("input[name='q" + i + "']:checked");
      if (resposta) {
        respostas["q" + i] = resposta.value; 
      } else {
        alert("Por favor, responda a pergunta " + i + ".");
        return; 
      }
    }

   
    var resultadoTexto = avaliarPerfil(respostas);

    
    mostrarResultado(resultadoTexto);
  });
}


function avaliarPerfil(respostas) {
  var economia = 0;
  var desempenho = 0;

 
  for (var chave in respostas) {
    if (respostas[chave] === "economia") {
      economia++;
    } else if (respostas[chave] === "desempenho") {
      desempenho++;
    }
  }

 
  if (economia > desempenho) {
    return "Você se encaixa melhor com o Modelo A (econômico e eficiente).";
  } else if (desempenho > economia) {
    return "Você se encaixa melhor com o Modelo D (potente e esportivo).";
  } else {
    return "Você pode gostar do Modelo B ou C, com equilíbrio entre economia e desempenho.";
  }
}


function mostrarResultado(texto) {
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "<p><strong>Resultado:</strong> " + texto + "</p>";
}


document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("quizForm")) {
    initQuiz();
  }
});
