 alert("Seja bem-vindo ao questionário! Responda as perguntas abaixo por favor");
document.addEventListener('DOMContentLoaded', () => {
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');

    const questoes = [
        "Você prefere um carro novo ou seminovo?",
        "Qual o principal uso do carro?",
        "Quantas pessoas costumam usar o carro com você?",
        "Qual tipo de carro você prefere?",
        "Você tem preferência por algum tipo de combustível?",
        "Câmbio manual ou automático?",
        "Qual é a sua prioridade para o carro?",
        "Tem alguma marca que você prefere ou quer evitar?",
        "Você precisa de algum recurso específico?",
        "Você pretende financiar, pagar à vista ou fazer um consórcio?"
    ];

    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta() {
        if (perguntas < questoes.length) {
            pergunta.textContent = questoes[perguntas];
            resposta.value = '';
            mensagem.textContent = '';
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML = '';

        questoes.forEach((questao, index) => {
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${questao}</strong><br> Sua Resposta: <span>${respostas[index]}</span>`;
            listaResultado.appendChild(listaItem);
        });
    }

    function nextQuestao() {
        const respostaAtual = resposta.value.trim();
        if (respostaAtual === '') {
            mensagem.textContent = "Por favor, digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();
    }

    function reiniciarQuiz() {
        perguntas = 0;
        respostas.length = 0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click', nextQuestao);
    reiniciarBotao.addEventListener('click', reiniciarQuiz);

    mostrarPergunta(); 
  });
