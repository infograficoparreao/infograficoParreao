class CartaoAnimal {

	// ############### NÃO MEXER ############### //
	// A não ser que seja muito importante redimensionar o cartão.
	constructor(){
		this.largura = width/3;
		this.altura = height * 0.9;
		this.posX = width/2;
		this.posY = height/2;
	}
	// ############### NÃO MEXER ############### //


	// Método para exibição do cartão Ave
	exibirAve(){
		//Fundo
		noStroke();
		fill('#94ADFF');
		rect(this.posX, this.posY, this.largura, this.altura); 

		// Foto do animal
		fill(255);
		image(galoCampina, this.posX, this.posY * 0.78, this.largura * 0.9, (this.largura * 0.9)*3456/4608);

		// Título da Carta, Nome do Animal e Retângulo
		stroke('rgba(255,255,255,0.5)');
		strokeWeight(3);
		noFill();
		rect(this.posX, this.posY * 0.18, 300, 50);
		noStroke();
		fill(255);
		textFont(fonteTitulo);
		textSize(30);
		text('Galo-de-campina', this.posX, this.posY * 0.17);

		// Linha 1
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-170,50,50);
		fill(0);
		text('1', width-(2*width/3)+45,(height/2)+(0.45*height)-170);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-170, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto1='Paroaria dominicana'
		fill(0);
		textSize(28);
		text(texto1, this.posX+15,(height/2)+(0.45*height)-175);

		// Linha 2
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-110,50,50);
		fill(0);
		textFont(fonteTitulo);
		text('2', width-(2*width/3)+45,(height/2)+(0.45*height)-110);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-110, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto2 = 'Um dos pássaros mais típicos do interior do Nordeste do Brasil.'
		fill(0);
		textSize(15);
		text(texto2, this.posX+15,(height/2)+(0.45*height)-115, this.largura * 0.68, this.altura * 0.088);

		// Linha 3
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-50,50,50);
		fill(0);
		textSize(30);
		textFont(fonteTitulo);
		text('3', width-(2*width/3)+45,(height/2)+(0.45*height)-50);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-50, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto3 = 'Aprende a comer em comedouros artificiais e pode se tornar muito dócil quando acostumado.'
		fill(0);
		textSize(12);
		text(texto3, this.posX+15,(height/2)+(0.45*height)-55, this.largura * 0.68, this.altura * 0.088);
	}
}