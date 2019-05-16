let telaSpash;
let telaSpash2;
let telaInicial;
let telaMapa;
let telaBiodiversidade;
let telaConstrucao;
let cartaoAnimal;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial(iconeMapa, iconeContato, iconePassaro, iconeGMaps, iconePreserv);
	telaMapa = new TelaMapa(iconeVoltar);
	telaBiodiversidade = new Biodiversidade(iconeRepteis, iconeAves, iconeAnfibios, iconeVoltar);
	telaConstrucao = new TelaConstrucao(iconeConstrucao, iconeVoltar);
	cartaoAnimal = new CartaoAnimal(iconeVoltar);
}