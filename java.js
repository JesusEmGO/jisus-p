
document.addEventListener('DOMContentLoaded', (event) => {

    const parrafo = document.getElementById('parrafo');
    const boton = document.getElementById('Boton');


    function cambiarColorDeFondo() {

        const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);

        parrafo.style.backgroundColor = colorAleatorio;
    }

    boton.addEventListener('click', cambiarColorDeFondo);
});
