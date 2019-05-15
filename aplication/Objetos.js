class Objetos{
	constructor(img, x, y, a, l){
		this.imagem = img;
		this.raioABase = a;
		this.raioLBase = l;
		this.posX = x;
		this.posY = y;

		this.hover = false;

		this.raioA = this.raioABase;
		this.raioL = this.raioLBase;
	}

	interacaoHoverEllipse(){
		if(dist(mouseX, mouseY, this.posX, this.posY) <= this.raioABase/2){
			this.raioA = this.raioABase + 15;
			this.raioL = this.raioLBase + 15;
			this.hover = true;
		}
		else{
			this.raioA = this.raioABase;
			this.raioL = this.raioLBase;
			this.hover = false;
		}
	}

	exibir(){
		image(this.imagem, this.posX, this.posY, this.raioA, this.raioL);
	}
}