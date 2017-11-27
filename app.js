

window.addEventListener('load', init, false);

function init() {
    //pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion
    var animals = [];
    var currentAnimalSelected = null;

    var precioDeVaca = new Vaca().precio,
        precioDeCerdo = new Cerdo().precio,
        precioDeCaballo = new Caballo().precio,
        precioDePerro = new Perro().precio,
        precioDeGato = new Gato().precio,
        precioDeGallina = new Gallina().precio,
        precioDePato = new Pato().precio,
        precioDePasto = new Granja().precioPasto,
        precioDeAlimento = new Granja().precioAlimento,
        precioDeMaiz = new Granja().precioMaiz,
        precioDeLeche = new Granja().precioLeche,
        precioDeHuevos = new Granja().precioHuevos,
        precioDeTocino = new Granja().precioTocino,
        granja = null;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var respuesta = JSON.parse(xhttp.responseText);

            console.log(respuesta);


            var objetoAnimal = respuesta.animales,
                objetoGranja = respuesta.granja;

            for (var i = 0; i < objetoAnimal.length; i++) {


                switch (objetoAnimal[i].tipo) {
                    case "vaca":
                        var nuevoAnimal = new Vaca(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "gallina":
                        var nuevoAnimal = new Gallina(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "pato":
                        var nuevoAnimal = new Pato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "cerdo":
                        var nuevoAnimal = new Cerdo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "caballo":
                        var nuevoAnimal = new Caballo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "perro":
                        var nuevoAnimal = new Perro(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                        break;
                    case "gato":
                        var nuevoAnimal = new Gato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad);
                        animals.push(nuevoAnimal);
                }

            };


            granja = new Granja(objetoGranja[0].dinero, objetoGranja[0].huevos, objetoGranja[0].leche, objetoGranja[0].tocino, objetoGranja[0].maiz, objetoGranja[0].alimento, objetoGranja[0].pasto);


        }





    };
    xhttp.open("GET", "animal.json", false);
    xhttp.send();



    console.log(animals);
    console.log(granja);

    var animalContainer_title = document.getElementById('animalTitle');
    var animalsContainer = document.getElementById('animalsContainer');
    var granjaContainer = document.getElementById('infoGranja');

    var btnComprar = document.getElementById('btnComprar');
    var btnVender = document.getElementById('btnVender');
    var btnCerrarPopUpVentas = document.getElementById('cerrarPopUpV');
    var btnCerrarPopUpCompras = document.getElementById('cerrarPopUpC');

    var popUpVentas = document.getElementById('popUpVentas');
    popUpVentas.classList.add('ocultarPopUp');

    var popUpCompras = document.getElementById('popUpCompras');
    popUpCompras.classList.add('ocultarPopUp')

    //---------------------Seleccion de animal---------------------

    for (var i = 0; i < animals.length; i++) {
        crearAnimalUI(animals[i]);
    }

    for (var i = 0; i < animals.length; i++) {
        crearAnimalUI(animals[i]);
    }

    function update() {
        for (var i = 0; i < animals.length; i++) {
            animals[i].update();
        }

        window.requestAnimationFrame(update);
    }

    update();

    //---------------------Cargar informacion Animal---------------------

    var granjaDinero = document.getElementById('granjaDinero');
    granjaDinero.innerHTML = "Dienero: " + "$" + granja.dinero;

    var granjaHuevos = document.getElementById('granjaHuevos');
    granjaHuevos.innerHTML = "Huevos: " + granja.huevos;

    var granjaLeche = document.getElementById('granjaLeche');
    granjaLeche.innerHTML = "Leche: " + granja.leche;

    var granjaTocino = document.getElementById('granjaTocino');
    granjaTocino.innerHTML = "Tocino: " + granja.tocino;

    var granjaMaiz = document.getElementById('granjaMaiz').innerHTML = "Maiz: " + granja.maiz;

    var granjaAlimento = document.getElementById('granjaAlimento');
    granjaAlimento.innerHTML = "Alimento: " + granja.alimento;

    var granjaPasto = document.getElementById('granjaPasto');
    granjaPasto.innerHTML = "Pasto: " + granja.pasto;


    document.getElementById('btnComprarAnimal').addEventListener('click', btnComprarAnimal, false);
    document.getElementById('btnComprarAlimento').addEventListener('click', btnComprarAlimento, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);
    document.getElementById('btnVenderProducto').addEventListener("click", venderProducto, false);

    //---------------------Cargar informacion Animal---------------------

    function onAnimalCardClick(event) {

        currentAnimalSelected = getAnimalByName(event.target);
        console.log(currentAnimalSelected);

        animalContainer_title.innerHTML = currentAnimalSelected.nombre;

        var animalEdad = document.getElementById('animalEdad');
        animalEdad.innerHTML = `Edad: ${currentAnimalSelected.edad} años`;

        var animalAltura = document.getElementById('animalAltura');
        animalAltura.innerHTML = `Altura: ${currentAnimalSelected.altura}m`;

        var animalPeso = document.getElementById('animalPeso');
        animalPeso.innerHTML = `Peso: ${currentAnimalSelected.peso} g`;

        var animalCapEstomago = document.getElementById('animalCapEstomago');
        animalCapEstomago.innerHTML = `Capacidad de estomago: ${currentAnimalSelected.capacidadEstomago}`;

        var animalCapAgua = document.getElementById('animalCapAgua');
        animalCapAgua.innerHTML = `Consumo de agua: ${currentAnimalSelected.capacidaConsumoAgua}`;

        var animalCapAlimento = document.getElementById('animalCapAlimento');
        animalCapAlimento.innerHTML = `Consumo de alimento: ${currentAnimalSelected.capacidadConsumoAlimento}`;

        //var animalCapProduccion = document.getElementById('animalCapProduccion');
        //animalCapProduccion.innerHTML = `Cantidad de producción: ${currentAnimalSelected.cantidadDeProducto}`;

        var animalCapProduccion = document.getElementById('animalCapProduccion');
        animalCapProduccion.innerHTML = `Cantidad de producción: ${parseFloat(Math.round(currentAnimalSelected.cantidadDeProducto * 100) / 100).toFixed(2)}`;

        var animalTipoProduccion = document.getElementById('animalTipoProduccion');
        animalTipoProduccion.innerHTML = `Tipo de Producción: ${currentAnimalSelected.tipoDeProduccion}`;

        var animalFelicidad = document.getElementById('animalFelicidad');
        animalFelicidad.innerHTML = `Nivel de felicidad: ${currentAnimalSelected.felicidad}%`;

        var btnComer = document.getElementById('comerBtn');
        btnComer.innerHTML = "Comer";
        btnComer.classList.add('btnStyle');

        var btnBeber = document.getElementById('beberBtn');
        btnBeber.innerHTML = "Beber";
        btnBeber.classList.add('btnStyle');

        var btnProducir = document.getElementById('producirBtn');
        var accionProducir = determinarProduccion(currentAnimalSelected.tipo)

        btnProducir.innerHTML = accionProducir;

        if (accionProducir) {
            btnProducir.classList.add('btnStyle');
            btnProducir.classList.remove('btnOcultar');
        } else {
            btnProducir.classList.remove('btnStyle');
            btnProducir.classList.add('btnOcultar');
        };
    }

    function getAnimalByName(target) {

        var animal = null;

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === target.id) {
                animal = animals[i];
            }
        }

        if (animal === null && target.parentElement !== null) {
            return getAnimalByName(target.parentElement);
        } else if (animal !== null) {
            return animal;
        } else {
            return null;
        }

    }

    function determinarProduccion(panimal) {
        var procesoProduccion = "";

        switch (panimal) {
            case "vaca":
                procesoProduccion = "Ordeñar";
                break;
            case "gallina":
                procesoProduccion = "Recolectar huevos";
                break;
            case "pato":
                procesoProduccion = "Recolectar huevos";
                break;
            case "cerdo":
                procesoProduccion = "Recoger tocino";
        }

        console.log(procesoProduccion);
        return procesoProduccion;
    }

    //---------------------PopUps---------------------


    btnComprar.addEventListener('click', mostrarPopupCompra, false);

    btnVender.addEventListener('click', mostrarPopupVenta, false);

    btnCerrarPopUpVentas.addEventListener('click', ocultarPopUp, false);
    btnCerrarPopUpCompras.addEventListener('click', ocultarPopUp, false);

    function mostrarPopupCompra() {
        popUpCompras.classList.remove('ocultarPopUp');
    }

    function mostrarPopupVenta() {
        popUpVentas.classList.remove('ocultarPopUp');
    }

    function ocultarPopUp() {
        popUpVentas.classList.add('ocultarPopUp');
        popUpCompras.classList.add('ocultarPopUp');

    }




    function btnComprarAnimal(e) {


        var nombreNuevoAnimal = document.getElementById('nombreAnimalNuevo').value;

        var animalSeleccionado = document.getElementById('sltAnimal').value

        var nuevoAnimal,
            precioDeAnimal;


        if (nombreNuevoAnimal == "") {
            console.log("ingrese un nombre valido");
        } else {
            console.log(animals);
            switch (animalSeleccionado) {
                case 'vaca':
                    precioDeAnimal = precioDeVaca;
                    nuevoAnimal = new Vaca(nombreNuevoAnimal, 1, 2, 100, 100, 5, 5, 5, 'leche', 100);
                    break;

                case 'cerdo':
                    precioDeAnimal = precioDeCerdo;
                    nuevoAnimal = new Cerdo(nombreNuevoAnimal, 4, 1, 92, 115, 25, 85, 30, 'Tocino', 100);
                    break;

                case 'caballo':
                    precioDeAnimal = precioDeCaballo;
                    nuevoAnimal = new Caballo(nombreNuevoAnimal, 2, 1.45, 5, 45, 15, 30, 0, 'N/A', 100);
                    break;

                case 'gallina':
                    precioDeAnimal = precioDeGallina;
                    nuevoAnimal = new Gallina(nombreNuevoAnimal, 2, 0.35, 3, 15, 6, 9, 30, 'Huevos', 100);
                    break;

                case 'pato':
                    precioDeAnimal = precioDePato;
                    nuevoAnimal = new Pato(nombreNuevoAnimal, 3, 0.38, 4, 23, 8, 15, 30, 'Huevos', 100);
                    break;

                case 'perro':
                    precioDeAnimal = precioDePerro;
                    nuevoAnimal = new Perro(nombreNuevoAnimal, 6, 0.70, 15, 75, 20, 55, 0, 'N/A', 100);
                    break;

                case 'gato':
                    precioDeAnimal = precioDeGato;
                    nuevoAnimal = new Gato(nombreNuevoAnimal, 2, 0.45, 5, 45, 15, 30, 0, 'N/A', 100);
                    break;

                default:
                    console.log('Selecione un animal');
            }


            if (granja.dinero >= precioDeAnimal) {
                granja.dinero -= precioDeAnimal;

                animals.push(nuevoAnimal);

                crearAnimalUI(nuevoAnimal);
                document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}`;
            }

            ocultarPopUp();

        }

    }



    function btnComprarAlimento(e) {
        var alimentoSeleccionado = document.getElementById('sltAlimento').value;
        var cantidadAComprar = parseInt(document.getElementById('cantidadAlimento').value);
        console.log(cantidadAComprar);
        var determinarPrecioAlimento = null;
        var actualizarDato = null;
        var producto = null;


        //Validar la comprar = dinero para comprar la vaca
        console.log("llegue");
        switch (alimentoSeleccionado) {
            case 'alimento':
                determinarPrecioAlimento = precioDeAlimento;
                actualizarDato = document.getElementById('granjaAlimento');
                producto = granja.alimento;

                break;

            case 'pasto':
                determinarPrecioAlimento = precioDePasto;
                actualizarDato = document.getElementById('granjaPasto');
                producto = granja.pasto;
                break;

            case 'maiz':
                determinarPrecioAlimento = precioDeMaiz;
                actualizarDato = document.getElementById('granjaMaiz');
                producto = granja.maiz;
                break;

            default:
                console.log('Selecione un alimento');
        }

        var costoTotalCompra = determinarPrecioAlimento * cantidadAComprar;

        if (granja.dinero >= costoTotalCompra) {
            granja.dinero -= costoTotalCompra;

            producto += cantidadAComprar;

            document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}`;


            if (alimentoSeleccionado == "alimento") {
                document.getElementById('granjaAlimento').innerHTML = `Alimento ${producto}`;
            } else {
                if (alimentoSeleccionado == "pasto") {
                    document.getElementById('granjaPasto').innerHTML = `Pasto ${producto}`;
                } else {
                    if (alimentoSeleccionado == "maiz") {
                        document.getElementById('granjaMaiz').innerHTML = `Maiz ${producto}`;
                    }
                }
            }




        }

        ocultarPopUp();

    }

    function crearAnimalUI(panimal) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = panimal.nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h3');
        title.innerHTML = panimal.nombre;
        animal.appendChild(title);

        var happiness = document.createElement('p');
        happiness.innerHTML = `Felicidad = ${panimal.felicidad} %`;
        animal.appendChild(happiness);

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(panimal.tipo);
        animal.appendChild(imageAnimal);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function producirBtnAction(e) {
        console.log(e);
        currentAnimalSelected.producir();
    }

    function venderProducto(e) {
        var productoAVender = document.getElementById('sltVender').value;
        var cantidadAVender = parseInt(document.getElementById('cantidadProducto').value);
        var ganancia = null;

        switch (productoAVender) {
            case 'leche':
                if (granja.leche >= cantidadAVender) {
                    granja.leche -= cantidadAVender;
                    ganancia = precioDeLeche * cantidadAVender;
                    granja.dinero += ganancia;

                    document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}`;
                    document.getElementById('granjaLeche').innerHTML = `Leche: ${granja.leche}`;
                    ocultarPopUp();
                } else {
                    console.log(`No hay suficiente producto`);
                };
                break;

            case 'huevos':
                if (granja.huevos >= cantidadAVender) {
                    granja.huevos -= cantidadAVender;
                    ganancia = precioDeHuevos * cantidadAVender;
                    granja.dinero += ganancia;

                    document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}`;
                    document.getElementById('granjaHuevos').innerHTML = `Huevos: ${granja.huevos}`;
                    ocultarPopUp();
                } else {
                    console.log(`No hay suficiente producto`);
                };
                break;

            case 'tocino':
                if (granja.tocino >= cantidadAVender) {
                    granja.tocino -= cantidadAVender;
                    ganancia = precioDeTocino * cantidadAVender;
                    granja.dinero += ganancia;

                    document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}`;
                    document.getElementById('granjaTocino').innerHTML = `Tocino: ${granja.tocino}`;
                    ocultarPopUp();
                } else {
                    console.log(`No hay suficiente producto`);
                };
        }




    };





};