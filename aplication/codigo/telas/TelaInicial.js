class TelaInicial{

	constructor(imagemContato, imagemPassaro, imagemGMaps){
		this.diam = width/12;
		this.posX = width/4;
		this.posY = height/4;

		this.botaoPassaro = new Objetos(imagemPassaro,  this.diam, 2 * this.posY - (this.diam + this.diam/4), this.diam, this.diam);
		this.botaoContato = new Objetos(imagemContato, this.diam,  2 * this.posY, this.diam, this.diam);
		this.botaoGMaps = new Objetos(imagemGMaps,  this.diam, 2 * this.posY + (this.diam + this.diam/4), this.diam, this.diam);
	}

	exibir(){

		this.botaoPassaro.interacaoClicarMudarTela(EstadoTelaCategorias);
		this.botaoPassaro.interacaoHoverEllipse();
		this.botaoPassaro.exibir();

		this.botaoContato.interacaoClicarMudarTela(EstadoTelaContato);
		this.botaoContato.interacaoHoverEllipse();
		this.botaoContato.exibir();

		this.botaoGMaps.interacaoClicarMaps();
		this.botaoGMaps.interacaoHoverEllipse();
		this.botaoGMaps.exibir();

		if(this.botaoContato.hover || this.botaoPassaro.hover || this.botaoGMaps.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}