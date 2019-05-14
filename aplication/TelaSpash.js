class TelaSpash{

	constructor(){
		this.raio = width/6;
		this.posY = height/2;
		this.posX = width/4;
	}e

	exibir(){

		background(255);

		fill(0);
		textSize(50);
		textFont(fonteTitulo);
		text('APOIO:', 2 * this.posX, this.posY/2);

		// ATENÇÃO:
		// Ao carregar as alterações aqui, remova as linhas de fill e ellipse, e descomente as seguintes:
		// image("LogoUfc.etc", this.posX, this.posY, this.raio, this.raio);
		// image("LogoSMD.etc", 2 * this.posX, this.posY, this.raio, this.raio);
		// image("LogoParreão.etc", 3 * this.posX, this.posY, this.raio, this.raio);

/*		fill(255, 0, 0);
		ellipse(this.posX,  this.posY, this.raio, this.raio);*/
		imageMode(CENTER); // SALVADOR
		image(logoUfc, this.posX, this.posY, this.raio, this.raio*(101/225));

		// fill(0, 255, 0);
		// ellipse(2 * this.posX,  this.posY, this.raio, this.raio);

		image(logoSMD, 2 * this.posX, this.posY, this.raio, this.raio*(107/139));

		// fill(0, 0, 255);
		// ellipse(3 * this.posX, this.posY, this.raio, this.raio);

		image(logoParque, 3 * this.posX, this.posY, this.raio, this.raio*(624/646));
	}
}