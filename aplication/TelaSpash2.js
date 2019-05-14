class TelaSpash2{

	constructor(){
		this.diam = width/3;
		this.posX = width/2;
		this.posY = height/2;
	}

	exibir(){
		background(255);

		// ATENÇÃO:
		// Ao carregar as alterações aqui, remova as linhas de fill e rect, e descomente as seguintes:
		// image("LogoLibertinos.etc", this.posX, this.posY, this.diam, this.diam);

		imageMode(CENTER);
		image(logoEquipe, this.posX, this.posY, this.diam, this.diam);

		// fill(0);
		// rect(this.posX, this.posY, this.diam, this.diam);
	}
}