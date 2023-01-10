const tarjetas= document.querySelectorAll(".tarjeta");
tarjetas.forEach((tarjeta)=>{
    tarjeta.addEventListener("click", (e) => {
        leerDatosProducto(e.target.parentElement);
    });
});

let productosEnCarrito=[];


function leerDatosProducto(producto){
    const informProducto = {
        titulo: producto.querySelector(".tarjeta-titulo").textContent,
        texto: producto.querySelector(".tarjeta-precio").textContent,
        id: producto.querySelector(".botonEliminar"),
    };

   productosEnCarrito=[...productosEnCarrito, informProducto];
   carritoHTML();
}

const carrito= document.querySelector("#carrito");

function carritoHTML(){
    limpiarHTML();

    productosEnCarrito.forEach((producto)=>{
        const fila= document.createElement("p")
        fila.innerHTML= `
        <div class="container">
            <h5>${producto.titulo}</h5>
            <p>${producto.texto}</p>

            <button class="botonEliminar"id="${producto.id}">Eliminar</button>
        </div>

        `
        carrito.appendChild(fila);
       
    });
}

function limpiarHTML() {
    carrito.innerHTML = "";
  }
  
carrito.addEventListener("click", eliminarProducto);


function eliminarProducto(e) {
    if (e.target.classList.contains("#botonEliminar")) {
      let productoID = e.target.getAttribute("id");
      productosEnCarrito = productosEnCarrito.filter(
        (producto) => producto.id !== productoID
      );
      carritoHTML();
    }
  }