class CartaoAnimal{

	// ############### NÃO MEXER ############### //
	// A não ser que seja muito importante redimensionar o cartão.
	constructor(){
		this.largura = width/3;
		this.altura = height * 0.8;
		this.posX = width/2;
		this.posY = height/2;
	}
	// ############### NÃO MEXER ############### //


	// Aqui pode alterar tudo, pois é o layout do cartão
	exibir(){
		noStroke();
		fill(255, 0, 0);
		rect(this.posX, this.posY, this.largura, this.altura); // Fundo

		fill(0, 255, 0);
		rect(this.posX, this.posY * 0.8, this.largura * 0.9, this.altura * 0.5); // Foto do animal

		fill(0);
		textSize(45);
		text('Nome do Animal', this.posX, this.posY * 0.3); // Título da Carta OU Nome do Animal.
	}
}