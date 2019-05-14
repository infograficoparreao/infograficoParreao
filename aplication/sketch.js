let telaSpash;
let telaSpash2;
let telaInicial;
let telaMapa;
let telaBiodiversidade;
let cartaoAnimal;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);

	telaSpash = new TelaSpash();
	telaSpash2 = new TelaSpash2();
	telaInicial = new TelaInicial();
	telaMapa = new TelaMapa();
	telaBiodiversidade = new Biodiversidade();
	cartaoAnimal = new CartaoAnimal();
}

function draw(){

	// ###### COMO UTILIZAR: ###### //
	
	// Aqui você irá instranciar os objetos para criar as telas/cartas uma por uma,
	// creio que para esse CP serão só 3 cartas, você decidee quais.
	// Os cartões eu não cheguei a deixar automatizado pois não compreendi como será o layout,
	// Então se possível, configure todo o layout desse cartão base para que eu possa automatizar o processo.

	// ###### MAIS INSTRUÇÔES NOS OUTROS ARQUIVOS ###### //


	// Basta alterar o nome que vem antes de ".exibir();" para visualizar a tela desejada.
	telaInicial.exibir();
}