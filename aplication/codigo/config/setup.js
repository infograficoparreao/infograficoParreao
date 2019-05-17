//Declaração Telas
let telaSpash;
let telaSpash2;
let telaInicial;
let telaCategorias;
let telaConstrucao;

//Declaracão Cartões
let cartaoAve;
let cartaoReptil;
let cartaoAnfibio;
let cartaoGato;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial(iconeContato, iconePassaro, iconeGMaps);
	telaCategorias = new Categorias(iconeRepteis, iconeAves, iconeAnfibios, iconePreserv, iconeVoltar);
	telaConstrucao = new TelaConstrucao(iconeConstrucao, iconeVoltar);
	cartaoAve = new CartaoAnimal(iconeVoltar, '#57CCF2', galoCampina, 'Galo-de-campina', 'Linha 1', 'Linha 2', 'Linha 3');
	cartaoReptil = new CartaoAnimal(iconeVoltar, '#E89F54', iguana, 'Iguana-verde', 'Linha 1', 'Linha 2', 'Linha 3');
	cartaoAnfibio = new CartaoAnimal(iconeVoltar, '#5ADB6B', sapoBoi, 'Rhinella marina', 'Linha 1', 'Linha 2', 'Linha 3');
	cartaoGato = new CartaoAnimal(iconeVoltar, '#BF2121', gato, 'Gatos e seus riscos', 'Linha 1', 'Linha 2', 'Linha 3');
}