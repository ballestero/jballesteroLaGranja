var Animal = (
	function () {
		function Animal(pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion) {
			this.nombre = pnombre;
			this.edad = pedad;
			this.altura = paltura;
			this.tamanno = ptamanno;
			this.capacidadEstomago = pcapacidadEstomago;
			this.capacidaConsumoAgua = pcapacidadConsumoAgua;
			this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
			this.capacidadProduccion = pcapacidadProduccion;
			this.tipoDeProduccion = ptipoDeProduccion;
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