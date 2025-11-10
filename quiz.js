let i = 0
let acerto = 0
let erro = 0
let precisao = 0
const perguntas_erradas = []
function IniciarQuiz(){
    if (i === 10){
        precisao = (acerto /10)*100
    document.querySelector('.root').innerHTML = `

     <div class="img">
            <img class="img-principal" src="img.png" alt="cerebro">
        </div>

     <h1 style ='text-align:center;
    margin-top: 8px;
    '> Teminou o Quiz Parabens</h1>
    <div class = 'resul'>
        <h2> Resultados</h2>
        <p>Acertos: ${acerto}</p>
        <p>Erros: ${erro}</p>
        <p>Precisao: ${precisao}%</p>
        <p>Respostas Erradas : ${perguntas_erradas}</p>

    </div>
    `
}
else{
    let display = document.querySelector('.root').innerHTML = `
    <div class = "fundo">
     <h2 > ${perguntas[i].pergunta}</h2>

    </div>
    <div class ='opcoes'>

    <div class= 'opcao' onclick ="activar('${perguntas[i].opcoes[0]}')">
    
    <h3>  ${perguntas[i].opcoes[0]}</h3>
    
    </div>
    <div class= 'opcao' onclick ='activar("${perguntas[i].opcoes[1]}")'>

    <h3>  ${perguntas[i].opcoes[1]}</h3>

    </div>

    <div class= 'opcao'  onclick ='activar("${perguntas[i].opcoes[2]}")'>

    <h3>  ${perguntas[i].opcoes[2]}</h3>
    
    </div>

    <div class= 'opcao'  onclick ='activar("${perguntas[i].opcoes[3]}")'>

    <h3>  ${perguntas[i].opcoes[3]}</h3>
    
    </div>

    </div>
    
    `
}
}
const perguntas = [
    {
        id : 1,
        pergunta :"Qual o maior Animal no mundo?",
        opcoes :['Leao', 'Mamute','Galinha','Baleia Azul'],
        resp : 'Baleia Azul'
    },
    {
        id : 2,
        pergunta : 'Qual o simbolo quimico do Tugstenio?',
        opcoes: ['Z','W','O','H'],
        resp : 'W'
    },
    {
        id : 3,
        pergunta: 'Em que ano foi descoberto o Brazil?',
        opcoes : ['1975','1500','1460','1476'],
        resp : '1500'
    },
    {
        id : 4,
        pergunta: 'Qual o nome do pai do Luffy de "One piece"',
        opcoes : ['Zoro','Dragon','Son Goku','Crocodile'],
        resp : 'Dragon'
    },
    {
        id : 5,
        pergunta: 'Se amanha fosse ontem  hoje seria hoje seria sexta-feira que dia e hoje?',
        opcoes :['Segunda-feira','Terca-feira', 'Quarta-feira','Domingo'],
        resp :'Quarta-feira'
    },
    {
        id : 6 ,
        pergunta : 'Qual o maior planeta do sistema solar?',
        opcoes: ['Jupiter','Saturno','Neptuno','Terra'],
        resp: 'Jupiter'
    },
    {
        id : 7,
        pergunta: 'Qual o menor planeta do sistema solar?',
        opcoes: ['Saturno','Plutao','Mercurio','Venus'],
        resp : 'Mercurio'
    }
    ,
    {
        id : 8,
        pergunta : 'Quem o melhor jogador de xadrez?',
        opcoes: ['Magnus Carlsen','Bob Fisher','Mikhail Tal','Garry Kasparov'],
        resp : 'Magnus Carlsen'
    
    }
    ,{
        id : 9,
        pergunta : 'Quantos elementos tem a Tabela Periodica ?',
        opcoes : ['118','320','18','25'],
        resp : '118'
    },
    {
        id :10,
        pergunta :'Quem escreveu a letra do hino nacional de angola',
        opcoes : ['Diogo Cao','Agustinho Neto','Rui Mingas','Manuel Monteiro'],
        resp : 'Manuel Monteiro'
    }
]
function activar(valor){
    if(valor === perguntas[i].resp){
        i +=1
        acerto +=1
        IniciarQuiz()
    }
    else{
        perguntas_erradas.push(perguntas[i].id)
        i ++
       erro +=1
       IniciarQuiz()

    }

}