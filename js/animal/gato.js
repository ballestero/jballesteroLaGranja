var Gato = (
	function () {
		function Gato(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed);
			this.tipo ='gato';
			this.precio = 100;
			this.porcionComida = 10;
			this.porcionAgua = 5;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function (palimento) {
			this.apetito += this.porcionComida;
			palimento -= this.porcionComida;;
			return palimento;
		}

		Gato.prototype.beber = function () {
			if(this.sed < this.capacidaConsumoAgua){
				this.sed += this.porcionAgua;
			}else{
				this.sed = this.capacidaConsumoAgua;
				console.log(`El gato esta lleno`)
			};
		};

		Gato.prototype.acariciar = function () {
			if(this.felicidad < 100){
				this.felicidad += 30;
				if(this.felicidad > 100){
					this.felicidad = 100;
				}
			};
		};

	

		return Gato;
	}
)();