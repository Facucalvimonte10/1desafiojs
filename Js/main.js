// let numero = parseInt(prompt("Ingrese un numero del que desee saber su tabla"));

// for ( i = 1; i <= 20; i++ ){
// console.log(numero + " x " + i + " es igual a " + numero*i);}

// } if(numero*i == 15);
//   console.log("No se puede seguir multiplicando la tabla");


//DESAFIO PARA ENTREGAR

let nombreAlumno= prompt("Nombre completo del alumno/a")
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

promediar(7,3,4,2);