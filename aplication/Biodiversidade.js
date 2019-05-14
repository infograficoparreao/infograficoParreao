class Biodiversidade{

	// ############### NÃO MEXER ############### //
	constructor(){
		this.largura = width/5;
		this.altura = 3 * (height/5);
		this.posX = width/6;
		this.posY = height/2;
	}
	// ############### NÃO MEXER ############### //



	exibir(){

		// Testos da Tela:
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


		fill(255, 0, 0);

		// Subistituir os rects pelas imagens que desejar que represente cada categoria.
		rect(this.posX, this.posY * 1.1, this.largura, this.altura);

		rect(3 * this.posX, this.posY * 1.1, this.largura, this.altura);

		rect(5 * this.posX, this.posY * 1.1, this.largura, this.altura);
	}
}