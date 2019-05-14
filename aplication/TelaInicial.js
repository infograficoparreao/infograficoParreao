class TelaInicial{

	// ########## NÃO MEXER ########## //
	constructor(){
		this.diam = width/8	;

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

	exibeObj1(){ // CENTRO = MAPA DO PARQUE
		if(this.taEmCima1){
			this.diamObj1 = this.diam + 10;
		} else{
			this.diamObj1 = this.diam;
		}

		imageMode(CENTER);
		image(iconeMapa, 2 * this.posX, 2 * this.posY, this.diamObj1, this.diamObj1);

		// fill(0);
		// ellipse(2 * this.posX, 2 * this.posY, this.diamObj1, this.diamObj1);
	}

	exibeObj2(){ // SUPERIOR = ENTRE EM CONTATO
		if(this.taEmCima2){
			this.diamObj2 = this.diam + 10;
		} else{
			this.diamObj2 = this.diam;
		}
		imageMode(CENTER);
		image(iconeContato, 2 * this.posX, 2 * this.posY - (this.diam + this.diam/4), this.diamObj2, this.diamObj2);
	}

	exibeObj3(){ // ESQUERDA = BIODIVERSIDADE
		if(this.taEmCima3){
			this.diamObj3 = this.diam + 10;
		}else{
			this.diamObj3 = this.diam;
		}

		imageMode(CENTER);
		image(iconePassaro, 2 * this.posX - (this.diam + this.diam/4), 2 * this.posY, this.diamObj3, this.diamObj3);
	}

	exibeObj4(){ // ABAIXO = GOOGLE MAPS
		if(this.taEmCima4){
			this.diamObj4 = this.diam + 10;
		} else{
			this.diamObj4 = this.diam;
		}

		imageMode(CENTER);
		image(iconeGMaps, 2 * this.posX, 2 * this.posY + (this.diam + this.diam/4), this.diamObj4, this.diamObj4);
		
	}

	exibeObj5(){ // DIREITA = ECOLOGIA // PRESERVE O PARQUE!
		if(this.taEmCima5){
			this.diamObj5 = this.diam + 10;
		}else{
			this.diamObj5 = this.diam;
		}

		imageMode(CENTER);
		image(iconePreserv, 2 * this.posX + (this.diam + this.diam/4), 2 * this.posY, this.diamObj5, this.diamObj5);
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