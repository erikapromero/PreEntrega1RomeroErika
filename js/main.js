let UserName = prompt ("Ingrese su usuario");
let Password= prompt ("Ingrese su contraseña");

function bienvenido (User) {
    alert ("Bienvenido" + " " + User)
} 
bienvenido(UserName);

    let pais = prompt ("Ingresar Pais").toLowerCase();
    let ciudad= prompt ("Ingresar Ciudad").toLowerCase();
    let continuar;
 while (pais == "Colombia" && ciudad == "Bogota") { 
        alert ("Hay 5 habitaciones disponibles");
        }
if (pais == "Colombia" && ciudad == "Bogota") { 
alert ("Hay 5 habitaciones disponibles");
}
else { 
    alert ("Por los momentos sólo tenemos disponibilidad en Bogota Colombia");
    }


 
const HABITACIONES = prompt ("Ingresa en número cuantas habitaciones necesitas"); 
const HABITACIONES_NUMERO = parseInt (HABITACIONES);
if (isNaN(HABITACIONES_NUMERO)){
    alert ("No es un número válido")
}



