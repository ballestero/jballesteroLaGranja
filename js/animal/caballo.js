var Caballo = (
	function () {
		function Caballo(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed);
			this.tipo ='caballo';
			this.precio = 600;
			this.porcionComida = 10;
			this.porcionAgua = 5;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function (ppasto) {
			this.apetito += this.porcionComida;
			ppasto -= this.porcionComida;;
			return ppasto;
		}

		Caballo.prototype.beber = function () {
			if(this.sed < this.capacidaConsumoAgua){
				this.sed += this.porcionAgua;
			}else{
				this.sed = this.capacidaConsumoAgua;
				console.log(`El Caballo esta lleno`)
			};
		};

		Caballo.prototype.acariciar = function () {
			if(this.felicidad < 100){
				this.felicidad += 30;
				if(this.felicidad > 100){
					this.felicidad = 100;
				}
			};
		};
		

		return Caballo;
	}
)();