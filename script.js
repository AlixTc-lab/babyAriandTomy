/* =====================================
   CONTADOR REGRESIVO
===================================== */

const eventDate = new Date("June 27, 2026 18:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".timer").innerHTML =
            "✨ El gran día ha llegado ✨";
    }

},1000);





/* =====================================7
muscia */
const music = document.getElementById("bg-music");

window.addEventListener("load", () => {

    const playPromise = music.play();

    if(playPromise !== undefined){
        playPromise.catch(() => {
            console.log("Autoplay bloqueado");
        });
    }

});


document.body.addEventListener("click", () => {
    music.play();
}, { once:true });





// =====================================
// SCRIPT PARA GENERAR BURBUJAS
// =====================================
function generarBurbujasBabyShower() {
    const contenedor = document.getElementById('fondoBurbujas');
    if (!contenedor) return; // Por si acaso el HTML no ha cargado

    const burbuja = document.createElement('div');
    burbuja.classList.add('burbuja-baby');

    // Tamaño aleatorio (entre 15px y 50px para que sean tiernas y no gigantes)
    const tamano = Math.random() * 35 + 15;
    burbuja.style.width = `${tamano}px`;
    burbuja.style.height = `${tamano}px`;

    // Posición horizontal aleatoria
    burbuja.style.left = `${Math.random() * 100}%`;

    // Velocidad aleatoria (entre 5 y 10 segundos para que suban con calma)
    const duracion = Math.random() * 5 + 5;
    burbuja.style.animationDuration = `${duracion}s`;

    contenedor.appendChild(burbuja);

    // Se eliminan cuando terminan de subir para no alentar la página
    setTimeout(() => {
        burbuja.remove();
    }, duracion * 1000);
}

// Lanza una burbuja nueva cada 400 milisegundos
setInterval(generarBurbujasBabyShower, 400);