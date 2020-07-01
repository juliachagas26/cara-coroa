document.getElementById("botaoJogar").onclick = () => {
    let valor = Math.random();
    let imagem = "";


    if(valor > 0.5){
        console.log("Um");
        imagem = "coroa";
    }else{
        console.log("Zero");
        imagem = "cara";
    }

    let caminhoImagem = "./assets/" + imagem + ".png";

    document.getElementById("imagemMoeda").src = caminhoImagem;

    console.log(valor);
};