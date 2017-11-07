var Animal = (
	function () {
		function Animal(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad) {
			this.nombre = pnombre;
			this.edad = pedad;
			this.altura = paltura;
			this.peso = ppeso;
			this.capacidadEstomago = pcapacidadEstomago;
			this.capacidaConsumoAgua = pcapacidadConsumoAgua;
			this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
			this.capacidadProduccion = pcapacidadProduccion;
			this.tipoDeProduccion = ptipoDeProduccion;
			this.felicidad = pfelicidad;
		}
		//Class Methods
		Animal.prototype.comer = function () {
		};
		Animal.prototype.caminar = function () {
		};
		Animal.prototype.beber = function () {
		};
		Animal.prototype.producir = function () {
		};

		return Animal;
	}
)();