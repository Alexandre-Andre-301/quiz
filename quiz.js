let i = 0;
let acerto = 0;
let erro = 0;
const perguntas_erradas = [];

const perguntas = [
    { id: 1, pergunta: "Qual o maior Animal no mundo?", opcoes: ['Leao', 'Mamute', 'Galinha', 'Baleia Azul'], resp: 'Baleia Azul' },
    { id: 2, pergunta: 'Qual o símbolo químico do Tungsténio?', opcoes: ['Z', 'W', 'O', 'H'], resp: 'W' },
    { id: 3, pergunta: 'Em que ano foi descoberto o Brasil?', opcoes: ['1975', '1500', '1460', '1476'], resp: '1500' },
    { id: 4, pergunta: 'Qual o nome do pai do Luffy de "One Piece"?', opcoes: ['Zoro', 'Dragon', 'Son Goku', 'Crocodile'], resp: 'Dragon' },
    { id: 5, pergunta: 'Se amanhã fosse ontem, hoje seria sexta-feira. Que dia é hoje?', opcoes: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Domingo'], resp: 'Quarta-feira' },
    { id: 6, pergunta: 'Qual o maior planeta do sistema solar?', opcoes: ['Jupiter', 'Saturno', 'Neptuno', 'Terra'], resp: 'Jupiter' },
    { id: 7, pergunta: 'Qual o menor planeta do sistema solar?', opcoes: ['Saturno', 'Plutão', 'Mercúrio', 'Vénus'], resp: 'Mercúrio' },
    { id: 8, pergunta: 'Quem é o melhor jogador de xadrez da atualidade?', opcoes: ['Magnus Carlsen', 'Bobby Fischer', 'Mikhail Tal', 'Garry Kasparov'], resp: 'Magnus Carlsen' },
    { id: 9, pergunta: 'Quantos elementos tem a Tabela Periódica?', opcoes: ['118', '320', '18', '25'], resp: '118' },
    { id: 10, pergunta: 'Quem escreveu a letra do hino nacional de Angola?', opcoes: ['Diogo Cão', 'Agostinho Neto', 'Rui Mingas', 'Manuel Monteiro'], resp: 'Manuel Monteiro' }
];

function IniciarQuiz() {
    const root = document.querySelector('.root');

    if (i >= perguntas.length) {
        let precisao = (acerto / perguntas.length) * 100;
        root.innerHTML = `
            <div class="resul">
                <h1>🏆 Quiz Terminado!</h1>
                <p>Acertos: <strong>${acerto}</strong></p>
                <p>Erros: <strong>${erro}</strong></p>
                <p>Precisão: <strong>${precisao}%</strong></p>
                ${perguntas_erradas.length > 0 ? `<p style="color: #e74c3c">IDs das erradas: ${perguntas_erradas.join(', ')}</p>` : ''}
                <button class="btn" onclick="location.reload()">Reiniciar</button>
            </div>`;
        return;
    }

    const pAtual = perguntas[i];
    root.innerHTML = `
        <div class="fundo">
            <h2>${pAtual.pergunta}</h2>
        </div>
        <div class="opcoes">
            ${pAtual.opcoes.map(opcao => `
                <div class="opcao" onclick="validarResposta(this, '${opcao}')">
                    ${opcao}
                </div>
            `).join('')}
        </div>
    `;
}

function validarResposta(elemento, valor) {
    // Evita múltiplos cliques
    const todasOpcoes = document.querySelectorAll('.opcao');
    todasOpcoes.forEach(opt => opt.style.pointerEvents = 'none');

    if (valor === perguntas[i].resp) {
        elemento.classList.add('correta');
        acerto++;
    } else {
        elemento.classList.add('errada');
        perguntas_erradas.push(perguntas[i].id);
        erro++;
    }

    // Pequeno delay para o jogador ver se acertou antes de mudar
    setTimeout(() => {
        i++;
        IniciarQuiz();
    }, 800);
}
