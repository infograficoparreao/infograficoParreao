class TelaInicial{

	// ########## NÃO MEXER ########## //
	constructor(){
		this.diam = width/8;

		this.posX = width/4;
		this.posY = height/4;

		this.diamObj1 = this.diam;
		this.diamObj2 = this.diam;
		this.diamObj3 = this.diam;
		this.diamObj4 = this.diam;
		this.diamObj5 = this.diam;

		this.taEmCima1 = false;
		this.taEmCima2 = false;
		this.taEmCima3 = false;
		this.taEmCima4 = false;
		this.taEmCima5 = false;
	}

	exibir(){
		// Pode retirar estas linhas quando terminar.
		background(255);
		noStroke();

		this.interacao();
		this.exibeObj1();
		this.exibeObj2();
		this.exibeObj3();
		this.exibeObj4();
		this.exibeObj5();
	}

	// Nestes métodos substituir APENAS o fill e ellipse pela imagem ou inserir um texto.
	// NÃO MEXA NOS IF ELSE.
	exibeObj1(){
		if(this.taEmCima1){
			this.diamObj1 = this.diam + 10;
		}else{
			this.diamObj1 = this.diam;
		}

		fill(0);
		ellipse(2 * this.posX, 2 * this.posY, this.diamObj1, this.diamObj1);
	}

	exibeObj2(){
		if(this.taEmCima2){
			this.diamObj2 = this.diam + 10;
		}else{
			this.diamObj2 = this.diam;
		}

		fill(255, 0, 0);
		ellipse(2 * this.posX, 2 * this.posY - (this.diam + this.diam/4), this.diamObj2, this.diamObj2);
	}

	exibeObj3(){
		if(this.taEmCima3){
			this.diamObj3 = this.diam + 10;
		}else{
			this.diamObj3 = this.diam;
		}

		fill(0, 255, 0);
		ellipse(2 * this.posX - (this.diam + this.diam/4), 2 * this.posY, this.diamObj3, this.diamObj3);
	}

	exibeObj4(){
		if(this.taEmCima4){
			this.diamObj4 = this.diam + 10;
		}else{
			this.diamObj4 = this.diam;
		}
		
		fill(0, 0, 255);
		ellipse(2 * this.posX, 2 * this.posY + (this.diam + this.diam/4), this.diamObj4, this.diamObj4);
	}

	exibeObj5(){
		if(this.taEmCima5){
			this.diamObj5 = this.diam + 10;
		}else{
			this.diamObj5 = this.diam;
		}

		fill(255, 0, 255);
		ellipse(2 * this.posX + (this.diam + this.diam/4), 2 * this.posY, this.diamObj5, this.diamObj5);
	}


	// ############################ NÃO MEXER ################# NÃO MEXER ############################ //
	interacao(){
		// Objeto 1: Mapa do parque
		if(dist(mouseX, mouseY, 2 * this.posX, 2 * this.posY) <= this.diam/2){
			this.taEmCima1 = true;
		}
		else{
			this.taEmCima1 = false;
		}

		// Objeto 2: Entre em contato
		if(dist(mouseX, mouseY, 2 * this.posX, 2 * this.posY - (this.diam + this.diam/4)) <= this.diam/2){
			this.taEmCima2 = true;
		}
		else{
			this.taEmCima2 = false;
		}

		// Objeto 3: Biodiversidade
		if(dist(mouseX, mouseY, 2 * this.posX - (this.diam + this.diam/4), 2 * this.posY) <= this.diam/2){
			this.taEmCima3 = true;
		}
		else{
			this.taEmCima3 = false;
		}

		// Objeto 4: Google Maps
		if(dist(mouseX, mouseY, 2 * this.posX, 2 * this.posY + (this.diam + this.diam/4)) <= this.diam/2){
			this.taEmCima4 = true;
		}
		else{
			this.taEmCima4 = false;
		}

		// Objeto 5: Preservação Ambiental
		if(dist(mouseX, mouseY, 2 * this.posX + (this.diam + this.diam/4), 2 * this.posY) <= this.diam/2){
			this.taEmCima5 = true;
		}
		else{
			this.taEmCima5 = false;
		}
	}
}