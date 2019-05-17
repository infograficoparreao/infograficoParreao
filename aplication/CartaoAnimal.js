class CartaoAnimal {

	constructor(imagemVoltar, corFundo, imagemCard, textoTitulo, textoLinha1, textoLinha2, textoLinha3){

		//Variáveis de posicionamento
		this.largura = width/3;
		this.altura = height * 0.9;
		this.posX = width/2;
		this.posY = height/2;

		//Variáveis de design
		this.corFundo = color(corFundo);
		this.img = imagemCard;
		this.Imagem = new Objetos(this.img, this.posX, this.posY * 0.78, this.largura * 0.9, this.largura * 0.9 * 3/4);

		//Variaveis de informação
		this.Titulo = new Texto(textoTitulo, this.posX, this.posY * 0.17, 0, 30, fonteTitulo);
		this.Linha1 = new Texto(textoLinha1, this.posX * 1.04, this.posY * 1.38, 0, 28, fonteConteudo);
		this.Linha2 = new Texto(textoLinha2, this.posX * 1.04, this.posY * 1.58, 0, 28, fonteConteudo);
		this.Linha3 = new Texto(textoLinha3, this.posX * 1.04, this.posY * 1.78, 0, 28, fonteConteudo);

		// coordenadas usadas para o posicionamento do botão voltar. iguais à tela de Biodiversidade.
		this.largura_voltar = width/5;
		this.voltar = new Objetos(imagemVoltar, this.largura_voltar/4, height - this.largura_voltar/4, this.largura_voltar/4, this.largura_voltar/4);
	}

	exibir(){
		//Fundo
		noStroke();
		fill(this.corFundo);
		rect(this.posX, this.posY, this.largura, this.altura); 

		//Título
		stroke(255, 255, 255, 75);
		strokeWeight(3);
		noFill();
		rect(this.posX, this.posY * 0.18, 300, 50);
		this.Titulo.exibir();

		//Imagem
		this.Imagem.exibir();

		//Linhas
		this.exibirIcone(this.posX * 0.72, this.posY * 1.38, "1");
		this.exibirLinha(this.posX * 1.04, this.posY * 1.38);
		this.Linha1.exibir();

		//Linhas
		this.exibirIcone(this.posX * 0.72, this.posY * 1.58, "2");
		this.exibirLinha(this.posX * 1.04, this.posY * 1.58);
		this.Linha2.exibir();

		//Linhas
		this.exibirIcone(this.posX * 0.72, this.posY * 1.78, "3");
		this.exibirLinha(this.posX * 1.04, this.posY * 1.78);
		this.Linha3.exibir();
		


	}

	exibirIcone(x, y, num){
		fill(255);
		ellipse(x, y, this.largura * 0.1, this.largura * 0.1);
		fill(0);
		textSize(20);
		textFont(fonteTitulo);
		text(num, x, y);
	}

	exibirLinha(x, y){
		fill(255);
		rect(x, y, this.largura * 0.8, this.altura * 0.09, 10);
	}

	//Fim código do cartão

	//TODO: Levar todos os textos para o arquivo preload, 


	// Método para exibição do cartão Ave
	exibirAve(){
		//Fundo
		noStroke();
		fill('#57CCF2');
		rect(this.posX, this.posY, this.largura, this.altura); 

		// Foto do animal
		fill(255);
		image(galoCampina, this.posX, this.posY * 0.78, this.largura, this.largura*3/4);

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
		textSize(30);
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

	exibirReptil(){
		//Fundo
		noStroke();
		fill('#E89F54');
		rect(this.posX, this.posY, this.largura, this.altura); 

		// Foto do animal
		fill(255);
		image(iguana, this.posX, this.posY * 0.78, this.largura * 0.9, (this.largura * 0.9)*3/4);

		// Título da Carta, Nome do Animal e Retângulo
		stroke('rgba(255, 255, 255, 0.5)');
		strokeWeight(3);
		noFill();
		rect(this.posX, this.posY * 0.18, 300, 50);
		noStroke();
		fill(255);
		textFont(fonteTitulo);
		textSize(30);
		text('Iguana-verde', this.posX, this.posY * 0.17);

		// Linha 1
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-170,50,50);
		fill(0);
		text('1', width-(2*width/3)+45,(height/2)+(0.45*height)-170);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-170, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto1='Iguana iguana';
		fill(0);
		textSize(28);
		text(texto1, this.posX+15,(height/2)+(0.45*height)-175);

		// Linha 2
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-110,50,50);
		fill(0);
		textSize(30);
		textFont(fonteTitulo);
		text('2', width-(2*width/3)+45,(height/2)+(0.45*height)-110);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-110, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto2 = 'Vivem em árvores, podendo atingir até 1,8m de comprimento.';
		fill(0);
		textSize(16);
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
		let texto3 = 'Quando jovens, os iguanas possuem uma coloração verde intensa.'
		fill(0);
		textSize(16);
		text(texto3, this.posX+15,(height/2)+(0.45*height)-55, this.largura * 0.68, this.altura * 0.088);
	}

	exibirAnfibio(){
		//Fundo
		noStroke();
		fill('#5ADB6B');
		rect(this.posX, this.posY, this.largura, this.altura); 

		// Foto do animal
		fill(255);
		image(sapoBoi, this.posX, this.posY * 0.78, this.largura * 0.9, (this.largura * 0.9)*3/4);

		// Título da Carta, Nome do Animal e Retângulo
		stroke('rgba(255, 255, 255, 0.5)');
		strokeWeight(3);
		noFill();
		rect(this.posX, this.posY * 0.18, 300, 50);
		noStroke();
		fill(255);
		textFont(fonteTitulo);
		textSize(30);
		text('Sapo-cururu', this.posX, this.posY * 0.17);

		// Linha 1
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-170,50,50);
		fill(0);
		text('1', width-(2*width/3)+45,(height/2)+(0.45*height)-170);
		fill(255, 255, 255, 50);
		rect(this.posX+15,(height/2)+(0.45*height)-170, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto1='Rhinella marina';
		fill(0);
		textSize(28);
		text(texto1, this.posX+15,(height/2)+(0.45*height)-175);

		// Linha 2
		fill(255);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-110,50,50);
		fill(0);
		textFont(fonteTitulo);
		textSize(30);
		text('2', width-(2*width/3)+45,(height/2)+(0.45*height)-110);
		fill(255);
		rect(this.posX+15,(height/2)+(0.45*height)-110, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto2 = 'É um animal fértil devido ao grande número de ovos postos pelas fêmeas.';
		fill(0);
		textSize(16);
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
		let texto3 = 'O sapo-cururu possui grandes glândulas de veneno. Tanto os adultos como os girinos são altamente tóxicos quando ingeridos.'
		fill(0);
		textSize(12);
		text(texto3, this.posX+15,(height/2)+(0.45*height)-55, this.largura * 0.68, this.altura * 0.088);
	}

	exibirPreserv(){
		//Botão voltar
		this.voltar.interacaoClicarMudarTela(EstadoTelaInicial);
		this.voltar.interacaoHoverEllipse();
		this.voltar.exibir();
		//Fundo
		noStroke();
		fill('#BF2121');
		rect(this.posX, this.posY, this.largura, this.altura); 

		// Foto do animal
		fill(255);
		image(gato, this.posX, this.posY * 0.78, this.largura * 0.9, (this.largura * 0.9)*3/4);

		// Título da Carta, Nome do Animal e Retângulo
		stroke('rgba(255, 255, 255, 0.5)');
		strokeWeight(3);
		noFill();
		rect(this.posX, this.posY * 0.18, 300, 50);
		noStroke();
		fill(255);
		textFont(fonteTitulo);
		textSize(30);
		text('Gatos e seus riscos', this.posX, this.posY * 0.17);

		// Linha 1
		fill(255, 255, 255, 50);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-170,50,50);
		fill(0);
		text('1', width-(2*width/3)+45,(height/2)+(0.45*height)-170);
		fill(255, 255, 255, 50);
		rect(this.posX+15,(height/2)+(0.45*height)-170, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto1='Os gatos hoje fazem parte da segunda maior causa de perda de biodiversidade do planeta.';
		fill(0);
		textSize(12);
		text(texto1, this.posX+15,(height/2)+(0.45*height)-175, this.largura * 0.68, this.altura * 0.088);

		// Linha 2
		fill(255, 255, 255, 50);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-110,50,50);
		fill(0);
		textSize(30);
		textFont(fonteTitulo);
		text('2', width-(2*width/3)+45,(height/2)+(0.45*height)-110);
		fill(255, 255, 255, 50);
		rect(this.posX+15,(height/2)+(0.45*height)-110, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto2 = 'Nós, humanos, somos os maiores responsáveis, por conta do abandono constante de gatos nas ruas.';
		fill(0);
		textSize(12);
		text(texto2, this.posX+15,(height/2)+(0.45*height)-115, this.largura * 0.68, this.altura * 0.088);

		// Linha 3
		fill(255, 255, 255, 50);
		ellipse(width-(2*width/3)+45,(height/2)+(0.45*height)-50,50,50);
		fill(0);
		textSize(30);
		textFont(fonteTitulo);
		text('3', width-(2*width/3)+45,(height/2)+(0.45*height)-50);
		fill(255, 255, 255, 50);
		rect(this.posX+15,(height/2)+(0.45*height)-50, this.largura * 0.7, this.altura * 0.09, 10);
		textFont(fonteConteudo);
		let texto3 = 'Cada gato, no sistema urbano, preda uma média de cinco animais silvestres por mês.'
		fill(0);
		textSize(12);
		text(texto3, this.posX+15,(height/2)+(0.45*height)-55, this.largura * 0.68, this.altura * 0.088);
	}
}