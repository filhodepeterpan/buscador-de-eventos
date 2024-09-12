function envia(){
    const tipoDeEvento = document.getElementById("tipoDeEvento").value.toLowerCase();
    const nivelDeInteresse = document.getElementById("nivelDeInteresse").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    switch(tipoDeEvento){
        case "musica":
           switch(nivelDeInteresse){
                case "alto":
                    resultado.innerHTML = "Confira o concerto da sua banda favorita! É o evento imperdível do mês!";
                break;

                case "medio":
                    resultado.innerHTML = "Não perca o festival de música local. Será uma ótima experiência!";
                break;

                case "baixo":
                    resultado.innerHTML = "Talvez você curta um show em um bar local. É uma boa maneira de passar a noite.";
                break;

                default:
                    resultado.innerHTML = "Para expressar seu nível de interesse, use apenas os termos \"alto\", \"medio\" ou \"baixo\", sem acentuações.";
                break;
           }
        break;

        case "teatro":
            switch(nivelDeInteresse){
                case "alto":
                    resultado.innerHTML = "Assista à peça aclamada pela crítica no teatro principal da cidade!";
                break;

                case "medio":
                    resultado.innerHTML = "Dê uma olhada nas produções teatrais locais. Há algumas boas opções!";
                break;

                case "baixo":
                    resultado.innerHTML = "TUma peça amadora no centro comunitário pode ser um passatempo interessante.";
                break;

                default:
                    resultado.innerHTML = "Para expressar seu nível de interesse, use apenas os termos \"alto\", \"medio\" ou \"baixo\", sem acentuações.";
                break;
           }
        break;

        case "esporte":
            switch(nivelDeInteresse){
                case "alto":
                    resultado.innerHTML = "Não perca o jogo do campeonato. A atmosfera será incrível!";
                break;

                case "medio":
                    resultado.innerHTML = "Confira o jogo da liga local. É uma boa maneira de se envolver com a comunidade.";
                break;

                case "baixo":
                    resultado.innerHTML = "Talvez um jogo de exibição em um estádio menor possa ser uma opção.";
                break;

                default:
                    resultado.innerHTML = "Para expressar seu nível de interesse, use apenas os termos \"alto\", \"medio\" ou \"baixo\", sem acentuações.";
                break;
           }
        break;

        case "comedia":
            switch(nivelDeInteresse){
                case "alto":
                    resultado.innerHTML = "Garanta seus ingressos para o show de stand-up do comediante famoso!";
                break;

                case "medio":
                    resultado.innerHTML = "Veja as noites de comédia no clube local. Pode ser divertido!";
                break;

                case "baixo":
                    resultado.innerHTML = "Um karaokê em um café pode ser uma maneira leve e divertida de passar o tempo.";
                break;

                default:
                    resultado.innerHTML = "Para expressar seu nível de interesse, use apenas os termos \"alto\", \"medio\" ou \"baixo\", sem acentuações.";
                break;
           }
        break;

        case "cinema":
           switch(nivelDeInteresse){
                case "alto":
                    resultado.innerHTML = "Muitos filmes incríveis passando no Cinema! Aproveite as sessões dos seus diretores e estúdios favoritos!";
                break;

                case "medio":
                    resultado.innerHTML = "O cinema é uma ótima forma de se entreter. Um bom filme pode salvar uma noite tediosa.";
                break;

                case "baixo":
                    resultado.innerHTML = "Talvez um filme em casa seja uma melhor opção!";
                break;

                default:
                    resultado.innerHTML = "Para expressar seu nível de interesse, use apenas os termos \"alto\", \"medio\" ou \"baixo\", sem acentuações.";
                break;
           }
        break;
        
        default:
            resultado.innerHTML= `O evento "${tipoDeEvento}" não foi encontrado. Tente digitar sem usar acentuações.`;
        break;
    }
}