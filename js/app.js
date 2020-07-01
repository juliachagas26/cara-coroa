document.getElementById("botaoJogar").onclick = () => {

    const jogadorCara = element("jogadorCara").value;
    const jogadorCoroa = element("jogadorCoroa").value;
    let nomeVencedor = "";

    let valor = Math.random();
    let imagem = "";

    if(jogadorCara == ""|| jogadorCoroa == ""){
        return alert("Digite os nomes");
    }


    if(valor > 0.5){
        console.log("Um");
        imagem = "coroa";
        nomeVencedor = jogadorCoroa;
    }else{
        console.log("Zero");
        imagem = "cara";
        nomeVencedor = jogadorCara;
    }

    let caminhoImagem = "./assets/" + imagem + ".png";

    document.getElementById("imagemMoeda").src = caminhoImagem;

    alert(nomeVencedor);
};

function element(id){
    return document.getElementById(id);
}

