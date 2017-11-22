

window.addEventListener('load', init, false);

function init() {
    //pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion
    var animals = [];
    var currentAnimalSelected = null;

    var granja = new Granja(2000, 10, 10, 10, 10, 100, 10),
        precioDeVaca = new Vaca().precio,
        precioDeCerdo = new Cerdo().precio,
        precioDeCaballo = new Caballo().precio,
        precioDePerro = new Perro().precio,
        precioDeGato = new Gato().precio,
        precioDeGallina = new Gallina().precio,
        precioDePato = new Pato().precio,
        precioDePasto = new Granja().precioPasto,
        precioDeAlimento = new Granja().precioAlimento,
        precioDeMaiz = new Granja().precioMaiz;

    


    /*var vaca = new Vaca('Matilde', 10, 1.40, 500, 200, 75, 125, 80, 'Leche', 60);
    animals.push(vaca);

    vaca = new Vaca('Clotilde', 15, 1.30, 420, 180, 70, 110, 60, 'Leche', 10);
    animals.push(vaca);

    vaca = new Vaca('Florina', 8, 1.37, 435, 188, 79, 109, 40, 'Leche', 100);
    animals.push(vaca);

    vaca = new Vaca('Juana', 12, 1.45, 510, 225, 85, 140, 100, 'Leche', 70);
    animals.push(vaca);

    var perro = new Perro('Renji', 6, 0.70, 15, 75, 20, 55, 0, 'N/A', 100);
    animals.push(perro);

    var gato = new Gato('Misifus', 2, 0.45, 5, 45, 15, 30, 0, 'N/A', 100);
    animals.push(gato);

    var cerdo = new Cerdo('Peggy', 4, 1, 92, 115, 25, 85, 30, 'Tocino', 100);
    animals.push(cerdo);

    var caballo = new Caballo('MR.Ed', 2, 1.45, 5, 45, 15, 30, 0, 'N/A', 100);
    animals.push(caballo);

    var gallina = new Gallina('Claudia', 2, 0.35, 3, 15, 6, 9, 30, 'Huevos', 100);
    animals.push(gallina);

    var pato = new Pato('Lucas', 3, 0.38, 4, 23, 8, 15, 30, 'Huevos', 100);
    animals.push(pato);*/

    //Pesticion a server para llamar objeto desde un archivo .json

     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         var respuesta = JSON.parse(xhttp.responseText);

         console.log(respuesta.animales.length);

         var animalObject = respuesta.animales;


         for(var i = 0; i < animalObject.length; i++){


         switch (animalObject[i].tipo) {
            case "vaca":
                var nuevoAnimal = new Vaca (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "gallina":
                var nuevoAnimal = new Gallina (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "pato":
                var nuevoAnimal = new Pato (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "cerdo":
                var nuevoAnimal = new Cerdo (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "caballo":
                var nuevoAnimal = new Caballo (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "perro":
                var nuevoAnimal = new Perro (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
                break;
            case "gato":
                var nuevoAnimal = new Gato (animalObject[i].nombre,animalObject[i].edad,animalObject[i].altura,animalObject[i].peso,animalObject[i].tamanno,animalObject[i].capacidadEstomago,animalObject[i].capacidadConsumoAgua,animalObject[i].capacidadProduccion,animalObject[i].tipoDeProduccion,animalObject[i].felicidad);
                animals.push(nuevoAnimal);
        }

    };

       }


       for (var i = 0; i < animals.length; i++) {
        crearAnimalUI(animals[i]);
        }


     };
     xhttp.open("GET", "animal.json", true);
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
    popUpVentas.classList.add('ocultarPopUp')

    var popUpCompras = document.getElementById('popUpCompras');
    popUpCompras.classList.add('ocultarPopUp')

    //---------------------Seleccion de animal---------------------
    


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

    var granjaMaiz = document.getElementById('granjaMaiz');
    granjaMaiz.innerHTML = "Maiz: " + granja.maiz;

    var granjaAlimento = document.getElementById('granjaAlimento');
    granjaAlimento.innerHTML = "Alimento: " + granja.alimento;

    var granjaPasto = document.getElementById('granjaPasto');
    granjaPasto.innerHTML = "Pasto: " + granja.pasto;


    document.getElementById('btnComprarAnimal').addEventListener('click', btnComprarAnimal, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);

    //---------------------Cargar informacion Animal---------------------
    function onAnimalCardClick(event) {
        // console.log(event);

        currentAnimalSelected = getAnimalByName(event.target.id);
        console.log(currentAnimalSelected);

        // event.target.style.background = animal.color;
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

        var animalCapProduccion = document.getElementById('animalCapProduccion');
        animalCapProduccion.innerHTML = `Cantidad de producción: ${currentAnimalSelected.cantidadDeProducto}`;

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

    function getAnimalByName(nombre) {
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === nombre) {
                return animals[i];
            }
        }
        return null;
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
        var animalSeleccionado = document.getElementById('sltAnimal').value

        var nuevoAnimal,
            precioDeAnimal;


        //1. Validar la comprar = dinero para comprar la vaca
        console.log(animals);
        switch(animalSeleccionado){
            case 'vaca':
                precioDeAnimal = precioDeVaca;
                nuevoAnimal = new Vaca('Clara', 1, 2, 100, 100, 5, 5, 5, 'leche', 100);
                break;
        
            case 'cerdo':
                precioDeAnimal = precioDeCerdo;
                nuevoAnimal = new Cerdo('Simon', 4, 1, 92, 115, 25, 85, 30, 'Tocino', 100);   
                break;
        
            case 'caballo':
                precioDeAnimal= precioDeCaballo;
                nuevoAnimal = new Caballo('Macoy', 2, 1.45, 5, 45, 15, 30, 0, 'N/A', 100);
                break;
            
            case 'gallina':
                precioDeAnimal = precioDeGallina;
                nuevoAnimal = new Gallina('Carmen', 2, 0.35, 3, 15, 6, 9, 30, 'Huevos', 100);
                break;

            case 'pato':
                precioDeAnimal = precioDePato;
                nuevoAnimal = new Pato('Donald', 3, 0.38, 4, 23, 8, 15, 30, 'Huevos', 100);
                break;

            case 'perro':
                precioDeAnimal = precioDePerro;
                nuevoAnimal = new Perro('Calo', 6, 0.70, 15, 75, 20, 55, 0, 'N/A', 100);    
                break;

            case 'gato':
                precioDeAnimal = precioDeGato;
                nuevoAnimal = new Gato('Lucy', 2, 0.45, 5, 45, 15, 30, 0, 'N/A', 100);    
                break;

            default:
                console.log('Selecione un animal');
        }


        if (granja.dinero >= precioDeAnimal) {
            granja.dinero -= precioDeAnimal;

            animals.push(nuevoAnimal);

            crearAnimalUI(nuevoAnimal);
            document.getElementById('granjaDinero').innerHTML = `Dinero: $ ${granja.dinero}` ;
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


   

    


}