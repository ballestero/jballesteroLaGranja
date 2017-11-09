window.addEventListener('load', init, false);

function init() {
//pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion
    var animals = [];
    var vaca = new Vaca('Matilde','10','1.40','500','200','75','125','130','Leche','100');
    vaca.color = 'blue';
    vaca.tipo = 'vaca';
    animals.push(vaca);

    vaca = new Vaca('Clotilde','15','1.30','420','180','70','110','115','Leche','100');
    vaca.color = 'green';
    vaca.tipo = 'vaca';
    animals.push(vaca);

    vaca = new Vaca('Florina','8','1.37','435','188','79','109','142','Leche','100');
    vaca.color = 'cyan';
    vaca.tipo = 'vaca';
    animals.push(vaca);

    vaca = new Vaca('Juana','12','1.45','510','225','85','140','139','Leche','100');
    vaca.color = 'brown';
    vaca.tipo = 'vaca';
    animals.push(vaca);

    var perro = new Perro('Renji','6','0.70','15','75','20','55','0','N/A','100');
    perro.color = 'purple';
    perro.tipo = 'perro'
    animals.push(perro);

    var gato = new Gato('Misifus','2','0.45','5','45','15','30','0','N/A','100');
    gato.color = 'purple';
    gato.tipo = 'gato'
    animals.push(gato);

    var cerdo = new Cerdo('Peggy','4','1','92','115','25','85','30','Tocino','100');
    cerdo.color = 'purple';
    cerdo.tipo = 'cerdo'
    animals.push(cerdo);

    var caballo = new Caballo('MR.Ed','2','1.45','5','45','15','30','0','N/A','100');
    caballo.color = 'purple';
    caballo.tipo = 'caballo';
    animals.push(caballo);

    var gallina = new Gallina('Claudia','2','0.35','3','15','6','9','30','Huevos','100');
    gallina.color = 'purple';
    gallina.tipo = 'gallina'
    animals.push(gallina);

    var pato = new Pato('Lucas','3','0.38','4','23','8','15','30','Huevos','100');
    pato.color = 'purple';
    pato.tipo = 'pato'
    animals.push(pato);
//pdinero,phuevos,pleche,ptocino,pmaiz,palmacenamiento,ppasto
    var granja = new Granja('2000','200','600','60','50','3000','1')

    console.log(animals);
    console.log(granja);



    var animalContainer_title = document.getElementById('animalTitle');
    var animalsContainer = document.getElementById('animalsContainer');
    var granjaContainer = document.getElementById('infoGranja')



//---------------------Seleccion de animal---------------------
    for (var i = 0; i < animals.length; i++) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = animals[i].nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h3');
        title.innerHTML = animals[i].nombre;
        animal.appendChild(title);

        var happiness = document.createElement('p');
        happiness.innerHTML = 'Felicidad = ' + animals[i].felicidad + '%';
        animal.appendChild(happiness);

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(animals[i].tipo);
        animal.appendChild(imageAnimal);


        animal.addEventListener('click', onAnimalCardClick, false);
    }


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
        granjaMaiz.innerHTML = "Maiz: " +granja.maiz;

        var granjaAlimento = document.getElementById('granjaAlimento');
        granjaAlimento.innerHTML = "Alimento: " +granja.alimento;

        var granjaPasto = document.getElementById('granjaPasto');
        granjaPasto.innerHTML = "Pasto: "+ granja.pasto;

//---------------------Cargar informacion Animal---------------------
    function onAnimalCardClick(event) {
        console.log(event);
        var animal = getAnimalByName(event.target.id);
        console.log(animal);
        event.target.style.background = animal.color;
        animalContainer_title.innerHTML = animal.nombre;

        
        var animalEdad = document.getElementById('animalEdad');
        animalEdad.innerHTML = "Edad: " + animal.edad + "años";

        var animalAltura = document.getElementById('animalAltura');
        animalAltura.innerHTML = "Altura: " + animal.altura + "m";

        var animalPeso = document.getElementById('animalPeso');
        animalPeso.innerHTML = "Peso: " + animal.peso + "g";

        var animalCapEstomago = document.getElementById('animalCapEstomago');
        animalCapEstomago.innerHTML = "Capacidad de estomago: " + animal.capacidadEstomago + "cc";

        var animalCapAgua = document.getElementById('animalCapAgua');
        animalCapAgua.innerHTML = "Consumo de agua: " + animal.capacidaConsumoAgua + "cc";

        var animalCapAlimento = document.getElementById('animalCapAlimento');
        animalCapAlimento.innerHTML = "Consumo de alimento: " + animal.capacidadConsumoAlimento + "cc";

        var animalCapProduccion = document.getElementById('animalCapProduccion');
        animalCapProduccion.innerHTML = "Capacidad de producción: " + animal.capacidadProduccion;

        var animalTipoProduccion = document.getElementById('animalTipoProduccion');
        animalTipoProduccion.innerHTML = "Tipo de Producción: " + animal.tipoDeProduccion;

        var animalFelicidad = document.getElementById('animalFelicidad');
        animalFelicidad.innerHTML = "Nivel de felicidad: " + animal.felicidad + "%";

        var btnComer = document.getElementById('comer');
        btnComer.innerHTML = "Comer";
        btnComer.classList.add('btnProduccion');

        var btnBeber = document.getElementById('beber');
        btnBeber.innerHTML = "Beber";
        btnBeber.classList.add('btnProduccion');

        var btnProducir = document.getElementById('producir');
        var accionProducir = determinarProduccion(animal.tipo)
        btnProducir.innerHTML = accionProducir;
        if (accionProducir ) {
            btnProducir.classList.add('btnProduccion');
            btnProducir.classList.remove('btnOcultar');
        }else{
            btnProducir.classList.remove('btnProduccion');
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

    function determinarProduccion(panimal){
        var procesoProduccion = "";

        if (panimal === 'vaca') {
            procesoProduccion = "Ordeñar";
        }else{
            if (panimal === 'gallina' || panimal === 'pato') {
                procesoProduccion = "Recolectar huevos";
            }else{
                if(panimal === 'cerdo'){
                    procesoProduccion = "Recoger tocino";
                }
            }
        }

        console.log(procesoProduccion);
        return procesoProduccion;
    }


}