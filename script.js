const contenedor = document.getElementById("contenedor");
fetch("./database.json")

.then((Response) => Response.json())

.then(data => {

    for(const Producto of data){
        contenedor.innerHTML += `
        <div class="calzado">
            <img class="imgCalzado" src="${Producto.image}"/>
            <div class="description">
            <h2>$${Producto.price}</h2>
            <h3>${Producto.name}</h3>
            </div>
        </div>
        `










    }
})

