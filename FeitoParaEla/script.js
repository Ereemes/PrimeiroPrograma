// script.js
var emocaoSolucoes = {
    "Diversão": "Espero que seus momentos mais divertido seja ao meu lado pitchutchuca. Envolva-se em atividades que realmente te fazem sorrir e sentir prazer. Que tal fazer algo que você adora, mesmo que seja algo simples?.",
    "Ansiedade": "Se acalme você nunca estará sozinha, estarei sempre ao seu lado. Quando a ansiedade bater, respire fundo. Experimente técnicas de respiração e tente identificar pensamentos negativos para substituí-los por pensamentos mais positivos..",
    "Estranhamento": "Explore novas experiências e saia da sua zona de conforto. Às vezes, o estranhamento pode ser superado ao tentar algo novo.",
    "Desejo": "Estabeleça metas realistas e crie um plano para alcançá-las. A jornada para realizar seus desejos muitas vezes é tão gratificante quanto alcançar o objetivo.",
    "Excitação": "Inclua atividades emocionantes na sua rotina. Pode ser algo tão simples quanto experimentar um novo hobby ou se envolver em uma aventura.",
    "Temor": "Enfrente seus medos gradualmente. Pequenos passos podem levar a grandes avanços. Lembre-se de que é normal sentir medo, mas não deixe que isso o impeça de seguir em frente.",
    "Medo": "Lembre-se Bi, eu estarei sempre ao seu lado, Identifique a raiz do medo e desenvolva estratégias para enfrentá-lo. Compreender o que está por trás do medo é o primeiro passo para superá-lo.",
    "Horror": "Evite exposição excessiva a estímulos assustadores e encontre formas de relaxamento.",
    "Tédio": "Descubra novos hobbies e desafios para superar o tédio.",
    "Calma": "Pratique a meditação e reserve um tempo para relaxar e acalmar a mente.",
    "Empatia": "Cultive relacionamentos empáticos e pratique a compaixão.",
    "Dúvida": "Avalie informações e tome decisões informadas para superar a dúvida.",
    "Nojo": "Identifique gatilhos de nojo e desenvolva formas de enfrentá-los.",
    "Encantamento": "Aprecie a beleza ao seu redor e envolva-se em experiências encantadoras.",
    "Nostalgia": "Relembre memórias positivas para reviver sentimentos nostálgicos.",
    "Satisfação": "Celebre suas conquistas e metas alcançadas para promover a satisfação.",
    "Adoração": "Cultive sentimentos de adoração por meio da prática da gratidão.",
    "Admiração": "Reconheça as qualidades admiráveis em outras pessoas e situações.",
    "Apreciação Visual": "Desenvolva apreço pela estética visual e arte.",
    "Inveja": "Transforme a inveja em motivação para alcançar suas próprias metas.",
    "Amor":  "Crie momentos românticos e mantenha a chama viva em relacionamentos.",
    "Tristeza": "Permita-se sentir tristeza, compartilhe sentimentos e busque apoio emocional.",
    "Surpresa": "Aceite e aprecie surpresas como oportunidades para crescimento e aprendizado.",
    "Simpatia": "Cultive relações amigáveis e seja solidário com os outros.",
    "Triunfo": "Celebre vitórias e conquistas para promover o sentimento de triunfo.",
    "Interesse": "Explore novos tópicos e hobbies para manter o interesse e a curiosidade.",
    "Alegria": "Participe de atividades que tragam alegria e compartilhe momentos felizes com os outros."
};

function exerciciosRelaxamento() {
    document.getElementById('output').innerHTML = 'Vamos começar com alguns exercícios de relaxamento. Encontre um lugar confortável, respire fundo e concentre-se em relaxar cada parte do seu corpo.';
    // Adicione a lógica para os exercícios de relaxamento, se necessário
}

function afirmacoesPositivas() {
    document.getElementById('output').innerHTML = 'Leia algumas afirmações positivas para cultivar pensamentos positivos e acalmar a mente.';
    // Adicione afirmações positivas, se necessário
}

function respiracaoProfunda() {
    document.getElementById('output').innerHTML = 'Pratique exercícios de respiração profunda. Inspire lentamente pelo nariz, segure a respiração por alguns segundos e expire suavemente pela boca. Repita várias vezes.';
    // Adicione a lógica para exercícios de respiração profunda, se necessário
}

function registrarEmocao() {
    var emocaoInput = document.getElementById('emocao').value;
    
    if (emocaoInput !== '') {
        var solucao = emocaoSolucoes[emocaoInput];

        if (solucao) {
            document.getElementById('output').innerHTML = 'Emoção registrada: ' + emocaoInput + '. Solução: ' + solucao;
        } else {
            document.getElementById('output').innerHTML = 'Emoção registrada: ' + emocaoInput + '. Solução não encontrada.';
        }
    } else {
        alert('Por favor, insira sua emoção antes de registrar.');
    }
}

// Função para obter a melhor voz disponível
function getMelhorVoz() {
    var voices = window.speechSynthesis.getVoices();
    
    // Ordena as vozes com base na pontuação de qualidade (higher quality first)
    voices.sort(function (a, b) {
        return b.quality - a.quality;
    });

    return voices[0]; // Retorna a melhor voz disponível
}

// Atualize a função lerInstrucoes para usar a melhor voz disponível
function lerInstrucoes() {
    var instrucoes = document.getElementById('output').innerText;

    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(instrucoes);

    // Configurações da voz (ajuste conforme necessário)
    utterance.voice = getMelhorVoz();
    utterance.rate = 1; // Velocidade da fala (1 é a velocidade padrão, ajuste conforme necessário)
    utterance.pitch = 10; // Tom da voz (1 é o tom padrão, ajuste conforme necessário)

    synth.speak(utterance);
}
