// elementos del carrusel

const productosCarrusel =
document.querySelectorAll('.producto');

const botonAnterior =
document.querySelector('.prev');

const botonSiguiente =
document.querySelector('.next');


// elementos de la tarjeta

const nombreProducto =
document.getElementById('nombreProducto');

const descripcionProducto =
document.getElementById('descripcionProducto');

const precioProducto =
document.getElementById('precioProducto');

const tallasProducto =
document.getElementById('tallasProducto');

// botón Ver más
const botonVerMas =
document.querySelector('.ver-mas');


//contador de cantidad

const botonMenos =
document.getElementById('btn-menos');

const botonMas =
document.getElementById('btn-mas');

const cantidadNumero =
document.getElementById('cantidad-numero');


// infromacion de los productos

const productos = [

    {
        nombre: 'Nike Air Jordan 1 Retro High Flyknit "Wolf Grey"',

        descripcion:
        'Zapatillas clásicas que combinan el diseño tradicional con la tecnología moderna de tejido, destacando por ser flexibles, ligeras y transpirables.',

        precio: '$1.600.000 COP',

        tallas: [36, 37, 38, 39, 40],
        url: 'Nike-Air.html'
    },


    {
        nombre: 'Nike Air Jordan 1 Retro High OG Chicago',

        descripcion:
        'Las Air Jordan 1 Retro High OG "Chicago" son las zapatillas más famosas de la historia. Tienen cuero suave en colores rojo, blanco y negro que recuerdan al equipo de baloncesto Chicago Bulls.',

        precio: '$1.450.000 COP',

        tallas: [37, 38, 39, 40, 41],
        url: 'Nike-Air-Jordan-1.html'
    },


    {
        nombre: 'Nike Air Max 97 "Silver Bullet"',

        descripcion:
        'Las Nike Air Max 97 "Silver Bullet" son uno de los modelos más icónicos de la historia de las sneakers, lanzadas originalmente en 1997 y diseñadas por Christian Tresser. Este colorway es considerado el más emblemático y codiciado de la línea Air Max 97.',

        precio: '$1.350.000 COP',

        tallas: [36, 37, 38, 39, 40],
        url: 'Nike-Air-Max-97.html'
    },


    {
        nombre: 'Nike Air Max 1 Sneakers',

        descripcion:
        'Zapatillas casuales con un estilo urbano y versátil. Su diseño permite combinarlas fácilmente con diferentes tipos de prendas.',

        precio: '$1.200.000 COP',

        tallas: [38, 39, 40, 41, 42],
        url: 'Nike-Air-Max-1-Sneakers.html'
    },


    {
        nombre: 'Nike Air Jordan 5 Retro "Fire Red"',

        descripcion:
        ' Diseñadas originalmente por el legendario Tinker Hatfield y lanzadas por primera vez en 1990, estas zapatillas son un pilar fundamental en la historia del baloncesto y de la cultura urbana.',

        precio: '$1.450.000 COP',

        tallas: [36, 37, 38, 39, 40, 41],
        url: 'Nike-Air-Jordan-5.html'
    }

];


// producto actual
let indiceActual = 0;


// actualizar la tarjeta del producto

function actualizarTarjeta() {

    const productoActual = productos[indiceActual];


    // cambiar nombre

    nombreProducto.textContent = productoActual.nombre;


    // cambiar descripción

    descripcionProducto.textContent = productoActual.descripcion;


    // cambiar precio

    precioProducto.textContent = productoActual.precio;


    // limpiar tallas

    tallasProducto.innerHTML = '';


    // crear nuevas tallas

    productoActual.tallas.forEach(talla => {

        const span = document.createElement('span');

        span.textContent =talla;

        tallasProducto.appendChild(span);

    });


    // reiniciar cantidad a 0

    cantidadNumero.textContent = '1';

}


// actualizar la imagen del carrusel

function actualizarCarrusel() {


    // eliminar clases

    productosCarrusel.forEach(producto => {

        producto.classList.remove(
            'activo',
            'izquierda',
            'derecha'
        );

    });


    const total =
    productosCarrusel.length;


    // imagen izquierda

    const anterior =
    (indiceActual - 1 + total) % total;


    // imagen derecha

    const siguiente =
    (indiceActual + 1) % total;


    // imagen principal

    productosCarrusel[indiceActual]
    .classList.add('activo');


    // imagen izquierda

    productosCarrusel[anterior]
    .classList.add('izquierda');


    // imagen derecha

    productosCarrusel[siguiente]
    .classList.add('derecha');


    // actualizar tarjeta

    actualizarTarjeta();

}


// boton siguiente

botonSiguiente.addEventListener('click', () => {
    const total = productosCarrusel.length;
    indiceActual = (indiceActual + 1) % total;
    actualizarCarrusel();
});


// boton antes

botonAnterior.addEventListener('click', () => {
    const total = productosCarrusel.length;
    // El operador de módulo (%) puede dar negativo en JS, por eso se suma el total.
    indiceActual = (indiceActual - 1 + total) % total;
    actualizarCarrusel();
});


// seleccionar tallas

tallasProducto.addEventListener('click', (e) => {

    if (e.target.tagName === 'SPAN') {

        const tallaSeleccionada = e.target;

        const estabaSeleccionada = tallaSeleccionada.classList.contains('talla-seleccionada');

        const todasLasTallas = tallasProducto.querySelectorAll('span');
        todasLasTallas.forEach(span => {
            span.classList.remove('talla-seleccionada');
        });

        if (!estabaSeleccionada) {
            tallaSeleccionada.classList.add('talla-seleccionada');
        }

    }

});


// contador de cantidad

botonMas.addEventListener('click', () => {

    let cantidadActual = parseInt(cantidadNumero.textContent);

    cantidadActual++;

    cantidadNumero.textContent = cantidadActual;

});


botonMenos.addEventListener('click', () => {

    let cantidadActual = parseInt(cantidadNumero.textContent);

    if (cantidadActual > 1) {

        cantidadActual--;

        cantidadNumero.textContent = cantidadActual;

    }

});

// evento para el botón "Ver más"
botonVerMas.addEventListener('click', () => {
    const productoActual = productos[indiceActual];
    if (productoActual.url) {
        window.location.href = productoActual.url;
    }
});

// iniciar

actualizarCarrusel();
