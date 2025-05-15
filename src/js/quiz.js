alert("Seja bem-vindo ao questionário! Responda as perguntas abaixo por favor");

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        pergunta: document.getElementById('pergunta'),
        resposta: document.getElementById('resposta'),
        proximaPergunta: document.getElementById("proximo"),
        mensagem: document.getElementById('message'),
        containerPerguntas: document.getElementById('container-perguntas'),
        containerResultado: document.getElementById('container-resultado'),
        listaResultado: document.getElementById('lista-resultado'),
        reiniciarBotao: document.getElementById('inicio-btn')
    };

    const questoes = [
        " Qual é o seu orçamento aproximado?",
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

    let perguntaAtual = 0;
    const respostas = [];

    function mostrarPergunta() {
        elements.pergunta.textContent = questoes[perguntaAtual];
        elements.resposta.value = '';
        elements.mensagem.textContent = '';
        elements.resposta.focus(); // Foca automaticamente no campo de resposta
    }

    function mostrarResultado() {
        elements.containerPerguntas.classList.add('hidden');
        elements.containerResultado.classList.remove('hidden');
        elements.listaResultado.innerHTML = '';

        questoes.forEach((questao, index) => {
            const listaItem = document.createElement('li');
            listaItem.innerHTML = `<strong>${questao}</strong><br> Sua Resposta: <span>${respostas[index]}</span>`;
            elements.listaResultado.appendChild(listaItem);
        });
    }

    function proximaQuestao() {
        const respostaAtual = elements.resposta.value.trim();
        if (respostaAtual === '') {
            elements.mensagem.textContent = "Por favor, digite sua resposta";
            return;
        }
        
        respostas.push(respostaAtual);
        perguntaAtual++;
        
        if (perguntaAtual < questoes.length) {
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    }

    function reiniciarQuiz() {
        perguntaAtual = 0;
        respostas.length = 0;
        elements.containerResultado.classList.add('hidden');
        elements.containerPerguntas.classList.remove('hidden');
        mostrarPergunta();
    }

    // Configura eventos
    elements.proximaPergunta.addEventListener('click', proximaQuestao);
    elements.reiniciarBotao.addEventListener('click', reiniciarQuiz);

    // Inicia o questionário
    mostrarPergunta();
});