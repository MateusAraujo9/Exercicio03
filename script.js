class carta{
	constructor(numero, naipe){
		this.numero = numero;
		this.naipe = naipe;
	}

	exibir(){
		alert("Carta escolhida: "+this.numero+" de "+this.naipe);
	}

	getCarta(){
		return (this.numero+" de "+this.naipe);
	}
};