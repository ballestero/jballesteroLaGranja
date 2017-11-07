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

    var perro = new Perro('Rufus','6','70','15','75','20','55','0','N/A','100');
    perro.color = 'purple';
    perro.tipo = 'perro'
    animals.push(perro);

    var gato = new Gato('Misifus','2','45','5','45','15','30','0','N/A','100');
    gato.color = 'purple';
    gato.tipo = 'gato'
    animals.push(gato);

    var cerdo = new Cerdo('Peggy','4','100','92','115','25','85','30','Tocino','100');
    cerdo.color = 'purple';
    cerdo.tipo = 'cerdo'
    animals.push(cerdo);

    var caballo = new Caballo('MR.Ed','2','45','5','45','15','30','0','N/A','100');
    caballo.color = 'purple';
    caballo.tipo = 'caballo';
    animals.push(caballo);

    var gallina = new Gallina('Claudia','2','35','3','15','6','9','30','Huevos','100');
    gallina.color = 'purple';
    gallina.tipo = 'gallina'
    animals.push(gallina);

    var pato = new Pato('Lucas','3','38','4','23','8','15','30','Huevos','100');
    pato.color = 'purple';
    pato.tipo = 'pato'
    animals.push(pato);

   

    console.log(animals);

    var animalContainer_title = document.getElementById('animalTitle');

    var animalsContainer = document.getElementById('animalsContainer');

    for (var i = 0; i < animals.length; i++) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = animals[i].nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h3');
        title.innerHTML = animals[i].nombre;;
        animal.appendChild(title);

        var happiness = document.createElement('p');
        happiness.innerHTML = 'Felicidad = ' + animals[i].felicidad + '%';
        animal.appendChild(happiness);

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(animals[i].tipo);
        animal.appendChild(imageAnimal);


        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function onAnimalCardClick(event) {
        console.log(event);
        var animal = getAnimalByName(event.target.id);
        console.log(animal);
        event.target.style.background = animal.color;
        animalContainer_title.innerHTML = animal.nombre;

    }

    function getAnimalByName(nombre) {
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === nombre) {
                return animals[i];
            }
        }
        return null;
    }


}