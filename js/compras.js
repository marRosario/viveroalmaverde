
  
      carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      mostrarCarrito();
      actualizarContadorCarrito();
    
      // Añadir evento para el botón de limpiar carrito
      const botonLimpiarCarrito = document.getElementById('limpiar-carrito');
      if (botonLimpiarCarrito) {
        console.log('Botón de limpiar carrito encontrado');
        botonLimpiarCarrito.addEventListener('click', limpiarCarrito);
      } else {
        console.error('Botón de limpiar carrito no encontrado');
      }

      const botonEnviar = document.getElementById('botonEnviar');
      if (botonEnviar) { 
        botonEnviar.addEventListener('click', enviarFormulario); 
      } else { console.error('Botón de enviar formulario no encontrado'); }

    
    
    function mostrarCarrito() {
      const carritoContenido = document.getElementById('carrito-contenido');
      const totalElemento = document.getElementById('total');
    
      carritoContenido.innerHTML = '';  // Limpia el contenido antes de agregar productos
      let total = 0;
    
      carrito.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.classList.add('producto');
        productoElemento.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
          <h3>${producto.titulo}</h3>
          <p>Precio: $${producto.precio}</p> 
         <button class="eliminar-producto">Eliminar</button>
          `;
          
        carritoContenido.appendChild(productoElemento);
        total += producto.precio;
      });
    
      totalElemento.textContent = total.toFixed(2);

function eliminarProducto(event) {
  const boton = event.target; // Botón clickeado
  const productoTitulo = boton.parentElement.querySelector('h3').textContent;

  // Filtrar el carrito para eliminar el producto seleccionado
  carrito = carrito.filter(producto => producto.titulo !== productoTitulo);

  // Actualizar el carrito en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Volver a mostrar el carrito actualizado
  mostrarCarrito();
}

const botonesEliminar = document.querySelectorAll('.eliminar-producto');
      botonesEliminar.forEach(boton => { boton.addEventListener('click', eliminarProducto);

        });

    }

    

    function limpiarCarrito() {
      console.log('Limpiar carrito ejecutado');
      carrito = [];
      localStorage.removeItem('carrito');
      mostrarCarrito();
      actualizarContadorCarrito();
    }
    
    function actualizarContadorCarrito() {
      const contador = document.getElementById('carrito-contador');
      if (contador) {
        contador.textContent = carrito.length;
      } else {
        console.error('Elemento con ID "carrito-contador" no encontrado');
      }
    }
    
    function enviarFormulario(event) {
      event.preventDefault(); 
    
      const nombre = document.getElementById('nombre').value.trim(); 
      const apellido = document.getElementById('apellido').value.trim(); 
      const domicilio = document.getElementById('domicilio').value.trim(); 
      const email = document.getElementById('contactoEmail').value.trim(); 
      const telefono = document.getElementById('telefono').value.trim(); 
      if (!nombre || !apellido ||!domicilio || !email || !telefono) {
      alert("Por favor, completa todos los campos de contacto.");
          return; 
      } 
          
          // Crea el listado del carrito 
          
      let carritoContenido = '';
      carrito.forEach(producto => { 
      carritoContenido += `${producto.titulo} - $${producto.precio}\n`;
    });
          
      const total = carrito.reduce((sum, producto) => sum + producto.precio, 0).toFixed(2);


      document.getElementById('carritoData').value = carritoContenido; 
      document.getElementById('totalCarrito').value = total;  
      document.getElementById('formulario-carrito').submit();

      }

