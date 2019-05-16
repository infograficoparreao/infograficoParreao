//Itens que deverão ser alterados para a transição:
// telaSpash
// telaSpash2
// telaInicial

var tempoSplash = 0; // temporizador

var TELA = 0; // estado inicial

var EstadoSplashs = 0;
var EstadoTelaInicial = 1;
var EstadoTelaBiodiversidade = 2;
var EstadoTelaMapa = 3;
var EstadoTelaContato = 4;
var EstadoTelaPreservacao = 5;


function draw(){
	background(240);
	cartaoAnimal.exibirPreserv();
//	maquinaEstadoTelas();
}

function maquinaEstadoTelas(){
	switch(TELA){
		case EstadoSplashs:
			if(tempoSplash <= 180){
				telaSpash.exibir();
			} else if(tempoSplash > 180 && tempoSplash <= 360){
				telaSpash2.exibir();
			}
			else {
				TELA = EstadoTelaInicial;
			}
			tempoSplash++;
			break;
		case EstadoTelaInicial:
			telaInicial.exibir();
			break;
		case EstadoTelaBiodiversidade:
			telaBiodiversidade.exibir();
			break;
		case EstadoTelaMapa:
			telaMapa.exibir();
			break;
		case EstadoTelaContato:
			telaConstrucao.exibir();
			break;
		case EstadoTelaPreservacao:
			telaConstrucao.exibir();
			break;
	}
}