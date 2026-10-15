
const modalidades = {
    "basquete-3x3": {
        nome: "Basquete 3x3"
    },
    "beach-tennis": {
        nome: "Beach Tennis"
    },
    "corrida-de-rua": {
        nome: "Corrida de Rua"
    },
    "crossfit": {
        nome: "Crossfit"
    },
    "futebol-society": {
        nome: "Futebol Society"
    },
    "futebol-de-mesa": {
        nome: "Futebol de Mesa"
    },
    "futebol-11": {
        nome: "Futebol 11",
        formato: `
            <p>
                O futebol de campo é disputado entre duas equipes
                de 11 jogadores cada.
            </p>

            <p class="mt-3">
                As disputas serão conforme abaixo:
            </p>

            <ul class="list-disc pl-4 mt-2">
                <li>Categorias: LIVRE e MÁSTER – Masculino;</li>
                <li>Limitação por Seccional: 01 equipe LIVRE e 01 equipe MÁSTER;</li>
                <li>Número de atletas: até 30 por equipe.</li>
            </ul>
        `,
        regras: [
            "Aguarde a divulgação do Regulamento Geral das Olimpíadas."
        ]
    },
    "futebol-7": {
        nome: "Futebol 7"
    },
    "futevolei": {
        nome: "Futevôlei"
    },
    "jiu-jitsu": {
        nome: "Jiu-jitsu"
    },
    "judo": {
        nome: "Judô"
    },
    "natacao": {
        nome: "Natação"
    },
    "sinuca": {
        nome: "Sinuca"
    },
    "tenis": {
        nome: "Tênis"
    },
    "tenis-de-mesa": {
        nome: "Tênis de Mesa"
    },
    "tiro-esportivo": {
        nome: "Tiro Esportivo"
    },
    "volei-de-praia": {
        nome: "Vôlei de Praia"
    },
    "volei-de-quadra": {
        nome: "Vôlei de Quadra"
    },
    "xadrez": {
        nome: "Xadrez"
    }
};

// Obtém a modalidade informada na URL.
const parametros = new URLSearchParams(window.location.search);
const nomeModalidade = parametros.get("nome") || "futebol-11";
const modalidade = modalidades[nomeModalidade];

// Textos provisórios para as modalidades sem informações específicas.
const formatoPadrao =
    "O formato de disputa será divulgado pela organização do evento.";

const regrasPadrao = [
    "As regras específicas serão divulgadas no regulamento oficial da modalidade."
];

const localPadrao =
    "O local de competição será divulgado pela organização do evento.";

const programacaoPadrao =
    "As datas e os horários serão divulgados pela organização do evento.";

// Atualiza a página com as informações da modalidade.
if (modalidade) {
    document.title = `${modalidade.nome} | Olimpíada da Advocacia`;

    document.getElementById("titulo-modalidade").textContent =
        modalidade.nome;

    document.getElementById("breadcrumb-modalidade").textContent =
        modalidade.nome;

    // Utiliza a mesma imagem para todas as modalidades.
    const imagem = document.getElementById("imagem-modalidade");

    imagem.src = "img/modalidade-padrao.jpg";
    imagem.alt = "Imagem ilustrativa das modalidades esportivas";

    // Utiliza informações específicas quando disponíveis.
    document.getElementById("formato-modalidade").innerHTML =
        modalidade.formato || formatoPadrao;

    const regras = modalidade.regras || regrasPadrao;

    document.getElementById("regras-modalidade").innerHTML =
        regras.map(regra => `<li>${regra}</li>`).join("");

    document.getElementById("local-modalidade").textContent =
        modalidade.local || localPadrao;

    document.getElementById("programacao-modalidade").textContent =
        modalidade.programacao || programacaoPadrao;

} else {
    // Exibe uma mensagem se o nome não existir no cadastro.
    document.title = "Modalidade não encontrada";

    document.getElementById("titulo-modalidade").textContent =
        "Modalidade não encontrada";

    document.getElementById("breadcrumb-modalidade").textContent =
        "Não encontrada";

    document.getElementById("imagem-modalidade").hidden = true;

    document.getElementById("formato-modalidade").textContent =
        "Não foi possível encontrar essa modalidade.";

    document.getElementById("regras-modalidade").innerHTML = "";

    document.getElementById("local-modalidade").textContent = "";

    document.getElementById("programacao-modalidade").textContent = "";
}
