//OBJETO CONSTRUCTOR 

/*class Producto{
    constructor(id, nombre, categoria, precio){
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        
    }
}*/

//ARRAY DE OBJETOS
let stockProductos = [
    {id: 105, nombre:'Campera coral', categoria:'Urbano', precio: 5000, img:'/media/imgPaginaVenta/campera.jpg'},
    {id: 106, nombre:'Conjunto de invierno',categoria:'Urbano', precio: 4500, img:'/media/imgPaginaVenta/campera.jpg'},
    {id: 107, nombre:'Conjunto de otoño',categoria:'Urbano', precio: 6000, img:'/media/imgPaginaVenta/campera.jpg'},
    {id: 108, nombre:'Conjunto elegante',categoria:'Fiesta', precio: 5500, img:'/media/imgPaginaVenta/campera.jpg'},
    {id: 109, nombre:'Conjunto top invierno',categoria:'Fiesta', precio: 6200, img:'/media/imgPaginaVenta/campera.jpg'},
];

let aux = localStorage.getItem('productoEnCarro');
let productoEnCarro;

if (!aux) {
    productoEnCarro=[];
    
} else {
    productoEnCarro = JSON.parse(aux);
    pintarCarro();
}

//FUNCION PARA AGREGAR AL CARRO

function agregarAlCarro(objetoProducto){
    productoEnCarro.push(objetoProducto);
    localStorage.setItem('productoEnCarro',JSON.stringify(productoEnCarro));
    pintarCarro();

}
//FUNCION PARA QUITAR DEL CARRO

function quitarDelCarro(id){
    productoEnCarro.splice(id,1);
    localStorage.setItem('productoEnCarro',JSON.stringify(productoEnCarro));
    pintarCarro();
}

//FUNCION PARA PINTAR EL DOM


function pintarStock(){
    let aux= '';
    for (let i=0; i < stockProductos.length; i++) {

        aux = 
        aux + 
        `<div onclick= "agregarAlCarro({id: '${stockProductos[i].id}', nombre: '${stockProductos[i].nombre}', precio: '${stockProductos[i].precio}'})" class="productos"  style="border: 2px solid black;";>
                <p>Id Producto: ${stockProductos[i].id}</p>
                <h3>${stockProductos[i].nombre}</h3>
                <p>Categoria: ${stockProductos[i].categoria}</p>
                <p>$ ${stockProductos[i].precio}</p>
                <button type="submit"> Agregar al Carro</button>
        
                    </div>`;
    }

    //VINCULAR JS A DOM 

    document.getElementById('divProductos').innerHTML = aux;
    
}

pintarStock();

function pintarCarro(){
    let aux= '';
    for (let i=0; i < productoEnCarro.length; i++) {

        aux = 
        aux + 
        `<div class="productos" style="border: 2px solid yellow;";>

                <img src="${stockProductos[i].imagen}">
                <p>Id Producto: ${productoEnCarro[i].id}</p>
                <h3>${productoEnCarro[i].nombre}</h3>
                <p>$ ${productoEnCarro[i].precio}</p>
                <button onclick= "quitarDelCarro(${i})"> Quitar </button>
        
                    </div>`;
    }

    document.getElementById('divProductosEnCarro').innerHTML = aux;
    
    
}