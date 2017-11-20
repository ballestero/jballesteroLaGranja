var Perro = (
	function () {
		function Perro(pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad) {
			Animal.call(this, pnombre,pedad,paltura,ppeso,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion,pfelicidad);
			this.tipo ='perro';
			this.precio = 150;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function () {
			console.log(this.nombre + ' soy una Perro y estoy comiendo.');
		}

		Perro.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Perro y estoy comiendo.');
		}

		return Perro;
	}
)();