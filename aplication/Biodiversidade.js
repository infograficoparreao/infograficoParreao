class Biodiversidade{

	constructor(imagemRepteis, imagemAves, imagemAnfibios, imagemVoltar){
		this.largura = width/5;
		this.posX = width/6;
		this.posY = height/2;

		this.repteis = new Objetos(imagemRepteis, this.posX, this.posY * 1.1, this.largura, this.largura);
		this.aves = new Objetos(imagemAves, 3 * this.posX, this.posY * 1.1, this.largura, this.largura);
		this.anfibios = new Objetos(imagemAnfibios, 5 * this.posX, this.posY * 1.1, this.largura, this.largura);
		this.voltar = new Objetos(imagemVoltar, this.largura/4, height - this.largura/4, this.largura/4, this.largura/4);
	}

	exibir(){

		// Textos da Tela:
		fill(0);
		textFont(fonteTitulo);
		textSize(50);
		text('Biodiversidade', 3 * this.posX, this.posY/8);

		textSize(35);
		text('Répteis', this.posX, this.posY/3);

		textSize(35);
		text('Aves', 3 * this.posX, this.posY/3);

		textSize(35);
		text('Anfíbios', 5 * this.posX, this.posY/3);

		this.repteis.interacaoHoverEllipse();
		this.repteis.exibir();

		this.aves.interacaoHoverEllipse();
		this.aves.exibir();

		this.anfibios.interacaoHoverEllipse();
		this.anfibios.exibir();

		this.voltar.interacaoClicarMudarTela(EstadoTelaInicial);
		this.voltar.interacaoHoverEllipse();
		this.voltar.exibir();

		if(this.repteis.hover || this.aves.hover || this.anfibios.hover || this.voltar.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}