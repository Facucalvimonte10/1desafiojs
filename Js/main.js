// let numero = parseInt(prompt("Ingrese un numero del que desee saber su tabla"));

// for ( i = 1; i <= 20; i++ ){
// console.log(numero + " x " + i + " es igual a " + numero*i);}

// } if(numero*i == 15);
//   console.log("No se puede seguir multiplicando la tabla");


//DESAFIO PARA ENTREGAR





/*let nombreAlumno= prompt("Nombre completo del alumno/a")
let resultado;

function promediar(a,b,c,d) {
    resultado = (a + b + c + d) / 4;
    console.log(`El promedio final del alumno ${nombreAlumno} es ${resultado}`);

    if (resultado >= 6){
        console.log(`Felicidades! ${nombreAlumno} has aprobado la materia`); 
} else if (resultado >= 5){
    console.log(`Lo lamento ${nombreAlumno} debes rendir un tema a eleccion en diciembre`);
} else 
    console.log(`Lo lamento ${nombreAlumno} debes rendir la materia completa en febrero`);
}

promediar(7,3,4,2);*/


/*class Alumno{
    constructor(nombre,edad,nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

}

const persona = new Alumno ("Facundo", 19, 6);
const persona2 = new Alumno ("Fabricio", 20, 7);
const persona3 = new Alumno ("Candela", 21, 4);
const persona4 = new Alumno ("Rocio", 20, 2);
const persona5 = new Alumno ("Franco", 219, 3);
const persona6 = new Alumno ("Camila", 22, 9);

console.log(persona);
console.log(persona2);
console.log(persona3);
console.log(persona4);

let arrayAlumnosDesaprobados = ["Candela", "Rocio","Franco"];
console.log(arrayAlumnosDesaprobados);

let arrayAlumnosAprobados = ["Facundo", "Fabricio","Camila"];
console.log(arrayAlumnosAprobados);

//Cantidad de alumnos en total de la camada 2022

const camadaEstudiantes2022 = arrayAlumnosAprobados.concat(arrayAlumnosDesaprobados);
console.log(camadaEstudiantes2022);


let entrada = prompt("Ingresar nombre del alumno/a que requiere informacion");
if(entrada == "Candela"){
    entrada = persona3;
    console.log(entrada);
} else if(entrada == "Rocio"){
    entrada = persona4;
    console.log(entrada);
} else if(entrada == "Franco"){
    entrada = persona5;
    console.log(entrada);
}else if(entrada == "Camila"){
    entrada = persona6;
    console.log(entrada);
}else if(entrada == "Fabricio"){
    entrada = persona2;
    console.log(entrada);
} else { entrada == "Facundo"
    entrada = persona;
    console.log(entrada);
}*/

class Producto{
    constructor(id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}
    let productos = [
        new Producto (100, "campera coral", 100, "urbano"),
        new Producto (101, "conjunto de invierno", 150, "urbano"),
        new Producto (102, "conjunto de otoño", 300, "urbano"),
        new Producto (103, "conjunto elegante", 400, "fiesta"),
        new Producto (104, "conjunto top invierno", 500, "fiesta"),
    ];

    let categorias = ["urbano","fiesta"];
    let productosEnCarro = [];
    let categoria = "";



while (categoria != "salir" && categoria != null){
    let aux = categorias.join (" o ");
    categoria = prompt("Ingrese la categoria de ropa que quiere comprar o ingrese salir para finalizar: \n(" + aux + ")");
    
    if (categoria != "salir" && categoria != null) {
        let productosFiltradoPorCategoria = productos.filter(
         (item) => item.categoria == categoria);


        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
        cartel += 
            " id: " +
            productosFiltradoPorCategoria[i].id + 
            " precio: " + 
            productosFiltradoPorCategoria[i].precio + 
            " " +
            " producto: " +
            productosFiltradoPorCategoria[i].nombre +
            "\n"
        }
        
        //alert("Seleccione el id del producto que quiere comprar \n" + cartel);
        
        let idSeleccionado = parseInt(prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel ));
        let productosParaCarro = productosFiltradoPorCategoria.find(
            item =>item.id === idSeleccionado);

        console.log(productosParaCarro);
    }
}

   