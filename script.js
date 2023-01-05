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
    };

    // console.log(informProducto);
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

            <button id="botonEliminar">Eliminar</button>
        </div> 
        `
        carrito.appendChild(fila);
    });
}

