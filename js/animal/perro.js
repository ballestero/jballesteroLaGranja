var Perro = (
	function () {
		function Perro(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed);
			this.tipo ='perro';
			this.precio = 150;
			this.porcionComida = null;
			this.porcionAgua = null;

			this.tiempoDeActualizacion = 2 * this.FRAMERATE;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function (palimento) {
			if (palimento > 0) {
				if (this.apetito < this.capacidadEstomago) {
					this.porcionComida = this.capacidadEstomago - this.apetito;
					if (this.porcionComida <= palimento) {
						this.apetito += this.porcionComida;
						palimento -= this.porcionComida;
						return palimento;
					} else { 
						this.apetito += palimento;
						palimento = 0;
						return palimento;
					}

				} else {
					this.apetito = this.capacidadEstomago;
					console.log('El Perro esta lleno');
					return palimento;
				}
			} else {
				console.log('No hay suficiente alimento para este animal');
				return palimento;
			}


		}

		Perro.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.porcionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.porcionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log(`El Perro esta lleno`)
			};
		};

		Perro.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Perro.prototype.disminuirDatos = function () {

			if (this.felicidad > 0) {
				
					if (this.tiempo >= this.tiempoDeActualizacion) {
						
						this.tiempo = 0;
						if (this.apetito > 0) {
							this.apetito -= 0.5;
						}
						if (this.sed > 0) {
							this.sed -= 0.5
						}
						if (this.caricia > 0) {
							this.caricia -= 2;
						}

					}
			}
		}

		Perro.prototype.calcularFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3; 
		}




		Perro.prototype.update = function () {
			this.tiempo++;
			this.disminuirDatos();
			this.calcularFelicidad();

		}


		return Perro;
	}
)();