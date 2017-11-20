var Gallina = (
	function () {
		function Gallina(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad);
			this.tipo = 'gallina';
			this.precio = 75;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gallina.prototype = Object.create(Animal.prototype);
		Gallina.prototype.constructor = Animal;

		//Class Methods
		Gallina.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}

		Gallina.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}
		

		return Gallina;
	}
)();