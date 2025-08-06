const caixaPrincipal = document. querySelector(". caixa-principal");
const caixaPerguntas = document. querySelector(". caixa-perguntas");
const caixaAlternativas = document. querySelector(". caixa-alternativas");
const caixaResultado = document. querySelector(". caixa-resultado");
const textoResultado = document. querySelector(". texto-resultado");

const perguntas=[
    {
        enunciado: "Quantos times participaram do Mundial de Clubes?",
        alternativas:[
            {texto: "32",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"16",
                afirmação:"Resposta errada",
                pontos:0
            }
            
    ]
    },

{
        enunciado: "Quantos times brasileiros participaram?",
        alternativas:[
            {texto: "4",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"2",
                afirmação:"Resposta errada",
                pontos:0
            }
            
    ]
    },

{
        enunciado: "Quem foi o artilheiro do Mundial de Clubes?",
        alternativas:[
            {texto: "Gonzalo Garcia",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Angél di Maria",
                afirmação:"Resposta errada",
                pontos:0
            }
            
    ]
    },

{
        enunciado: "Quem foi o Campeão?",
        alternativas:[
            {texto: "Chelsea",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"PSG",
                afirmação:"Resposta errada",
                pontos:0
            }
            
    ]
    },

{
        enunciado: "Quem foi o vice campeão?",
        alternativas:[
            {texto: "PSG",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Bayer",
                afirmação:"Resposta errada",
                pontos:0
            }
            
    ]
    },
]


