let telaSpash;
let telaSpash2;
let telaInicial;
let telaCategorias;
let telaConstrucao;
let cartaoAnimal;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial(iconeContato, iconePassaro, iconeGMaps);
	telaCategorias = new Categorias(iconeRepteis, iconeAves, iconeAnfibios, iconeVoltar);
	telaConstrucao = new TelaConstrucao(iconeConstrucao, iconeVoltar);
	cartaoAnimal = new CartaoAnimal(iconeVoltar, '#57CCF2', galoCampina, 'Título', 'Linha 1', 'Linha 2', 'Linha 3');
}