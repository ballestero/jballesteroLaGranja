var Vaca = (
	function () {

		function Vaca(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 500;
			this.tipo = 'vaca';
			this.porcionComida = null;
			this.porcionAgua = null;

			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = null;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Vaca.prototype = Object.create(Animal.prototype);
		Vaca.prototype.constructor = Animal;

		//Class Methods
		Vaca.prototype.comer = function (ppasto) {
			if (ppasto > 0) {
				if (this.apetito < this.capacidadEstomago) {
					this.porcionComida = this.capacidadEstomago - this.apetito;
					if (this.porcionComida <= ppasto) {
						this.apetito += this.porcionComida;
						ppasto -= this.porcionComida;
						return ppasto;
					} else { 
						this.apetito += ppasto;
						ppasto = 0;
						return ppasto;
					}

				} else {
					this.apetito = this.capacidadEstomago;
					console.log('La vaca esta llena');
					return ppasto;
				}
			} else {
				console.log('No hya suficiente alimento para este animal');
				return ppasto;
			}


		}

		Vaca.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.porcionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.porcionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log(`La vaca esta llena`)
			};
		};

		Vaca.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Vaca.prototype.producir = function (pproductoGranja) {

			console.log(pproductoGranja);
			pproductoGranja += this.cantidadDeProducto;
			this.cantidadDeProducto = 0;


			console.log(pproductoGranja);

			return pproductoGranja;
		};

		Vaca.prototype.crearProducto = function () {
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);

			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						this.tiempo = 0;
						this.felicidad -= 1;
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
		}

		Vaca.prototype.calcularFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3;

			//console.log(this.nombre + ' felicidad: ' + this.felicidad);
		}




		Vaca.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
			this.calcularFelicidad();

		}

		return Vaca;
	}


)();