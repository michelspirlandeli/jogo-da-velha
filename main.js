var jogo=[];
var tabuleiro=[];
var quemJoga=0;//0=jogador 1=pc
var verifica;
var jogando=true;
var nivel=1;
var jogadaCpu=1;
var quemComeca=1;

function jogar(p){
    if((jogando)&&(quemJoga==0)){
        switch(p){
            case 1:
                if(jogo[0][0]==""){
                    jogo[0][0]="X";
                    quemJoga=1;
                }
            break;
            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="X";
                    quemJoga=1;
                }
            break;
            case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X";
                    quemJoga=1;
                }
            break;
            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X";
                    quemJoga=1;
                }
            break;
            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X";
                    quemJoga=1;
                }
            break;
            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X";
                    quemJoga=1;
                }
            break;
            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X";
                    quemJoga=1;
                }
            break;
            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X";
                    quemJoga=1;
                }
            break;
            default://caso 9
                if(jogo[2][2]==""){
                    jogo[2][2]="X";
                    quemJoga=1;
                }
            break;
        }
        atualizaTabuleiro();
    }
}

function atualizaTabuleiro(){

    for(var l=0;l<3;l++){
        for(var c=0;c<3;c++){
            if(jogo[l][c]=="X"){
                tabuleiro[l][c].innerHTML="X";
                tabuleiro[l][c].style.cursor="default";
            }else if(jogo[l][c]=="O"){
                tabuleiro[l][c].innerHTML="O";
                tabuleiro[l][c].style.cursor="default";
            }else{
                tabuleiro[l][c].innerHTML="";
                tabuleiro[l][c].style.cursor="pointer";
            }
        }
    }
}

function inicia(){
    jogando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    tabuleiro=[
        [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
        [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
    ];
}

window.addEventListener("load", inicia);

