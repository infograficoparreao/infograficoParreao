class TelaInicial{

	constructor(imagemMapa, imagemContato, imagemPassaro, imagemGMaps, imagemPreserv){
		this.diam = width/8;
		this.posX = width/4;
		this.posY = height/4;

		this.botaoMapa = new Objetos(imagemMapa, 2 * this.posX, 2 * this.posY, this.diam, this.diam);
		this.botaoContato = new Objetos(imagemContato, 2 * this.posX, 2 * this.posY - (this.diam + this.diam/4), this.diam, this.diam);
		this.botaoPassaro = new Objetos(imagemPassaro, 2 * this.posX - (this.diam + this.diam/4), 2 * this.posY, this.diam, this.diam);
		this.botaoGMaps = new Objetos(imagemGMaps, 2 * this.posX, 2 * this.posY + (this.diam + this.diam/4), this.diam, this.diam);
		this.botaoPreserv = new Objetos(imagemPreserv, 2 * this.posX + (this.diam + this.diam/4), 2 * this.posY, this.diam, this.diam);
	}

	exibir(){
		this.botaoMapa.interacaoClicarMudarTela(EstadoTelaMapa);
		this.botaoMapa.interacaoHoverEllipse();
		this.botaoMapa.exibir();

		this.botaoContato.interacaoClicarMudarTela(EstadoTelaContato);
		this.botaoContato.interacaoHoverEllipse();
		this.botaoContato.exibir();

		this.botaoPassaro.interacaoClicarMudarTela(EstadoTelaBiodiversidade);
		this.botaoPassaro.interacaoHoverEllipse();
		this.botaoPassaro.exibir();

		this.botaoGMaps.interacaoClicarMaps();
		this.botaoGMaps.interacaoHoverEllipse();
		this.botaoGMaps.exibir();

		this.botaoPreserv.interacaoClicarMudarTela(EstadoTelaPreservacao);
		this.botaoPreserv.interacaoHoverEllipse();
		this.botaoPreserv.exibir();

		if(this.botaoMapa.hover || this.botaoContato.hover || this.botaoPassaro.hover || this.botaoGMaps.hover || this.botaoPreserv.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}