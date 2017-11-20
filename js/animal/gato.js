var Gato = (
	function () {
		function Gato(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad);
			this.tipo ='gato';
			this.precio = 100;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gato y estoy comiendo.');
		}

		Gato.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Gato y estoy comiendo.');
		}

		return Gato;
	}
)();