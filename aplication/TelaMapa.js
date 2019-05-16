class TelaMapa{

// ############################## NÃO MEXER NESSA TELA ######################## //

	constructor(imagemVoltar){
		this.tam = width/8;

		this.posX = width/2;
		this.posY = height/2;

		this.tamObj1 = this.tam;
		this.tamObj2 = this.tam;
		this.tamObj3 = this.tam;

		this.taEmCima1 = false;
		this.taEmCima2 = false;
		this.taEmCima3 = false;

		this.voltar = new Objetos(imagemVoltar, this.posX/4, height - this.posY/4, this.tam/3, this.tam/3);
	}

	exibir(){
		background(255);

		noStroke();
		fill(0, 255, 0);

		this.interacao();
		this.exibeObj1();
		this.exibeObj2();
		this.exibeObj3();

		this.voltar.interacaoClicarMudarTela(EstadoTelaInicial);
		this.voltar.interacaoHoverEllipse();
		this.voltar.exibir();
	}

	interacao(){
		if((mouseY >= this.posY - this.tam - this.tam/2) && (mouseY <= this.posY - this.tam/2) &&
			(mouseX >= this.posX - this.tam) && mouseX <= this.posX + this.tam){
			this.taEmCima1 = true;
		}
		else{
			this.taEmCima1 = false;
		}

		if((mouseY >= this.posY - this.tam/2) && (mouseY <= this.posY + this.tam/2) &&
			(mouseX >= this.posX - this.tam/2) && mouseX <= this.posX + this.tam/2){
			this.taEmCima2 = true;
		}
		else{
			this.taEmCima2 = false;
		}

		if((mouseY >= this.posY + this.tam/2) && (mouseY <= this.posY + 2 * this.tam - this.tam/2) &&
			(mouseX >= this.posX - this.tam/2) && mouseX <= this.posX + this.tam/2){
			this.taEmCima3 = true;
		}
		else{
			this.taEmCima3 = false;
		}
	}


	exibeObj1(){
		if(this.taEmCima1){
			this.tamObj1 = this.tam+10;
		}
		else{
			this.tamObj1 = this.tam;
		}
		
		rect(this.posX, this.posY - this.tam, 2 * this.tamObj1, this.tamObj1);
	}

	exibeObj2(){
		if(this.taEmCima2){
			this.tamObj2 = this.tam+10;
		}
		else{
			this.tamObj2 = this.tam;
		}
		rect(this.posX, this.posY, this.tamObj2, this.tamObj2);
	}


	exibeObj3(){
		if(this.taEmCima3){
			this.tamObj3 = this.tam+10;
		}
		else{
			this.tamObj3 = this.tam;
		}
		rect(this.posX, this.posY + this.tam, this.tamObj3, this.tamObj3);
	}
}