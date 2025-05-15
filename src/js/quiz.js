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
        "O que é um carro elétrico e como ele funciona?",
        "Qual é a principal diferença entre um carro elétrico e um carro com motor a combustão?",
        "Quais são as vantagens ambientais do uso de veículos elétricos?",
        "Quais são os principais desafios para a adoção em massa de carros elétricos?",
        "Quanto tempo leva, em média, para recarregar completamente um carro elétrico?",
        "O que é autonomia em um carro elétrico e quais fatores a influenciam?",
        "Qual é o custo médio de manutenção de um carro elétrico comparado ao de um carro tradicional?",
        "Carros elétricos podem ser carregados em casa? Quais são os requisitos?",
        "O que são baterias de íon de lítio e por que são usadas em veículos elétricos?",
        "Quais são as marcas ou modelos mais populares de carros elétricos no mercado atualmente?"
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
