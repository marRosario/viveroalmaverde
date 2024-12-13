

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
actualizarContadorCarrito();

document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
  botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', agregarProducto);
  });
});

function agregarProducto(event) {
  event.preventDefault();
  const boton = event.target;
  const producto = {
    titulo: boton.dataset.titulo,
    precio: parseFloat(boton.dataset.precio),
    imagen: boton.closest('.card').querySelector('img').src
  };

  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  
  actualizarContadorCarrito();

  // Mostrar el alert
  const seguirComprando = confirm(`Se agregó ${producto.titulo} al carrito. ¿Quieres seguir comprando?`);
  if (!seguirComprando) {
    window.location.href = 'compras.html';
  }
}

function actualizarContadorCarrito() {
  const contador = document.getElementById('carrito-contador');
  if (contador) {
    contador.textContent = carrito.length;
  } else {
    console.error('Elemento con ID "carrito-contador" no encontrado');
  }

}


function mostrarDescripcion(elemento, descripcion) {
  const descripcionDiv = elemento.parentNode.querySelector('.descripcion');
  descripcionDiv.innerHTML = descripcion;
  descripcionDiv.style.display = 'block'; // Muestra la descripción dentro de la tarjeta
}


