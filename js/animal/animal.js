var Animal = (
	function () {
		function Animal(pnombre, pedad, paltura, ppeso, ptamanno, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			this.nombre = pnombre;
			this.edad = pedad;
			this.altura = paltura;
			this.peso = ppeso;
			this.tamanno = ptamanno;
			this.capacidadEstomago = pcapacidadEstomago;
			this.capacidadConsumoAgua = pcapacidadConsumoAgua;
			this.capacidadProduccion = pcapacidadProduccion;
			this.tipoDeProduccion = ptipoDeProduccion;
			this.felicidad = pfelicidad;
			this.apetito = papetito;
			this.sed = psed;
			this.precio = 0;

			this.tiempo = 0;
			this.FRAMERATE = 60;
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
			
		}
		//Class Methods
		Animal.prototype.comer = function () { };
		Animal.prototype.caminar = function () { };
		Animal.prototype.beber = function () { };
		Animal.prototype.acariciar = function () { };
		Animal.prototype.calcularFelicidad = function () { };
		Animal.prototype.disminuirDatos

		Animal.prototype.producir = function () {
			// console.log('Este animal no produce nada!');
		};

		Animal.prototype.crearProducto = function () {

		}

		Animal.prototype.update = function () {

		}

		return Animal;
	}
)();