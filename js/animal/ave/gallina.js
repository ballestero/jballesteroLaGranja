var Gallina = (
	function () {
		function Gallina(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad, papetito, psed);
			this.tipo = 'gallina';
			this.precio = 75;
			this.porcionComida = 10;
			this.porcionAgua = 5;

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gallina.prototype = Object.create(Animal.prototype);
		Gallina.prototype.constructor = Animal;

		//Class Methods
		Gallina.prototype.comer = function (pmaiz) {
			this.apetito += this.porcionComida;
			pmaiz -= this.porcionComida;;
			return pmaiz;
		}

		Gallina.prototype.beber = function () {
			if(this.sed < this.capacidaConsumoAgua){
				this.sed += this.porcionAgua;
			}else{
				this.sed = this.capacidaConsumoAgua;
				console.log(`La Gallina esta llena`)
			};
		};

		Gallina.prototype.acariciar = function () {
			if(this.felicidad < 100){
				this.felicidad += 30;
				if(this.felicidad > 100){
					this.felicidad = 100;
				}
			};
			this.update();
		};

		Gallina.prototype.producir = function (pproductoGranja) {
			console.log(pproductoGranja);
			pproductoGranja += this.cantidadDeProducto;
			this.cantidadDeProducto = 0;

			console.log(pproductoGranja);

			return pproductoGranja;
		};

		Gallina.prototype.crearProducto = function () {
			//this.capacidadProduccion
			//this.cantidadDeProducto = 0;
			//this.velocidadDeProducion = 0
			if (this.capacidadProduccion >= this.cantidadDeProducto) {
				if (this.tiempo >= this.tiempoDeProduction) {
					this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
					this.tiempo = 0;
					//console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
				}
			} else {
				//console.log(this.nombre + ' lleno su producción');
			}

		}

		Gallina.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();

		}
		

		return Gallina;
	}
)();