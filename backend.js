var casas = document.getElementsByClassName("casa"),
    player = "ekkusu"; computer = "soruku", playing = false;
    vazio = "img/vazio.jpg";

for(var c = 0; c < casas.length; c++){
    casas[c].id = "casa"+c;
    casas[c].addEventListener("click",play)
    casas[c].src = vazio;
}

casas[4].src="img/start.jpg";

function changeMode(){
    if(!playing){
        mudaSimbolo();
    }else{
        if(confirm("Deseja reiniciar esta partida?")){
            limpar();
            mudaSimbolo();
        }
    }
    playing = true;
}

function mudaSimbolo(){
    if(player == "ekkusu"){
        player = "soruku";
        computer = "ekkusu";
        document.getElementById("seletor").innerHTML = "JOGAR COMO O";
    }else{
        player = "ekkusu";
        computer = "soruku";
        document.getElementById("seletor").innerHTML = "JOGAR COMO X";
    }
}

function play(){
    if(!playing) playing = true;

    if((!casas[4].src.includes(vazio)) && (!casas[4].src.includes(player)) && (!casas[4].src.includes(computer))){
        casas[4].src = vazio;
    }

    if( (this.src.includes(vazio)) || (this.src.includes("start")) || (this.src.includes("win")) || (this.src.includes("fail")) ){
        
        this.src ="img/"+player+".jpg";

        if(myTurn()){
            limpar();
            casas[4].src="img/empate.jpg";
        }

        else if(check(player)){
            limpar();
            casas[4].src="img/win.jpg";
            var placar = document.getElementById("placar_pc").innerHTML;
            placar = parseInt(placar)+1;
            document.getElementById("placar_pc").innerHTML = ""+placar;
        }

        else if(check(computer)){
            limpar();
            casas[4].src="img/fail.jpg";
            var placar = document.getElementById("placar_pc").innerHTML;
            placar = parseInt(placar)+1;
            document.getElementById("placar_cpu").innerHTML = ""+placar;
        }
    }
}

function myTurn(){
    var velha = false;
    var c;
    for(c = 0; c < casas.length; c++){
        if(casas[c].src.includes(vazio)){break;}
    }
    if(c < casas.length){
        var casaSelected = Math.floor(Math.random()*9);
        while(!casas[casaSelected].src.includes(vazio)){
            var casaSelected = Math.floor(Math.random()*9);
        }
        casas[casaSelected].src="img/"+computer+".jpg";
    }else{
        velha = true;
    }

    return velha;
}

function check(simbolo){
    return(

    (
        (casas[0].src.includes(simbolo)) &&
        (casas[4].src.includes(simbolo)) &&
        (casas[8].src.includes(simbolo))
    ) ||
    
    (
        (casas[2].src.includes(simbolo)) &&
        (casas[4].src.includes(simbolo)) &&
        (casas[6].src.includes(simbolo))
    ) ||
    
    (
        (casas[0].src.includes(simbolo)) &&
        (casas[1].src.includes(simbolo)) &&
        (casas[2].src.includes(simbolo))
    ) ||
    
    (
        (casas[3].src.includes(simbolo)) &&
        (casas[4].src.includes(simbolo)) &&
        (casas[5].src.includes(simbolo))
    ) ||
    
    (
        (casas[6].src.includes(simbolo)) &&
        (casas[7].src.includes(simbolo)) &&
        (casas[8].src.includes(simbolo))
    ) ||
    
    (
        (casas[0].src.includes(simbolo)) &&
        (casas[3].src.includes(simbolo)) &&
        (casas[6].src.includes(simbolo))
    ) ||
    
    (
        (casas[1].src.includes(simbolo)) &&
        (casas[4].src.includes(simbolo)) &&
        (casas[7].src.includes(simbolo))
    ) ||
    
    (
        (casas[2].src.includes(simbolo)) &&
        (casas[5].src.includes(simbolo)) &&
        (casas[8].src.includes(simbolo))
    ))
    ;

}

function limpar(){
    for(var c = 0; c < casas.length; c++){
        casas[c].src = vazio;
    }
}
