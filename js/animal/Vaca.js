var Vaca = (
	function () {

		function Vaca(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 500;
			this.tipo = 'vaca';
			this.porcionComida = 10;
			this.porcionAgua = 5;

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Vaca.prototype = Object.create(Animal.prototype);
		Vaca.prototype.constructor = Animal;

		//Class Methods
		Vaca.prototype.comer = function (ppasto) {
			this.apetito += this.porcionComida;
			ppasto -= this.porcionComida;
			return ppasto;
		}

		Vaca.prototype.beber = function () {
			if(this.sed < this.capacidaConsumoAgua){
				this.sed += this.porcionAgua;
			}else{
				this.sed = this.capacidaConsumoAgua;
				console.log(`La vaca esta llena`)
			};
		};

		Vaca.prototype.acariciar = function () {
			if(this.felicidad < 100){
				this.felicidad += 30;
				if(this.felicidad > 100){
					this.felicidad = 100;
				}
			};
			this.update();
		};

		Vaca.prototype.producir = function (pproductoGranja) {
			console.log(pproductoGranja);
			pproductoGranja += this.cantidadDeProducto;
			this.cantidadDeProducto = 0;

			console.log(pproductoGranja);

			return pproductoGranja;
		};

		Vaca.prototype.crearProducto = function () {
			//this.capacidadProduccion
			//this.cantidadDeProducto = 0;
			//this.velocidadDeProducion = 0
			
			if (this.capacidadProduccion >= this.cantidadDeProducto ) {
				if (this.tiempo >= this.tiempoDeProduction) {
					this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
					this.tiempo = 0;
					//console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
				}
			} else {
				//console.log(this.nombre + 'lleno su producción');
			}

		}

		Vaca.prototype.reducirFelicidad = function () {
			var reductor = (this.apetito / 50) * 10000 ;

			if(this.felicidad > 0){
			this.felicidad -= this.FRAMERATE / reductor;
			//console.log(this.felicidad);
			reductor = 0;
			}else{
				this.felicidad = 0;
			}

			console.log()
		}

		Vaca.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
			this.reducirFelicidad();

		}

		return Vaca;
	}
)();