var Perro = (
	function () {
		function Perro(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed);
			this.tipo ='perro';
			this.precio = 150;
			this.porcionComida = 10;
			this.porcionAgua = 5;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function (palimento) {
			this.apetito += this.porcionComida;
			palimento -= this.porcionComida;;
			return palimento;
		}

		Perro.prototype.beber = function () {
			if(this.sed < this.capacidaConsumoAgua){
				this.sed += this.porcionAgua;
			}else{
				this.sed = this.capacidaConsumoAgua;
				console.log(`La el perro esta lleno`)
			};
		};

		Perro.prototype.acariciar = function () {
			if(this.felicidad < 100){
				this.felicidad += 30;
				if(this.felicidad > 100){
					this.felicidad = 100;
				}
			};
			
		};


		return Perro;
	}
)();