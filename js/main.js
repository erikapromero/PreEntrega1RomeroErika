let UserName = prompt ("Ingrese su usuario");
let Password= prompt ("Ingrese su contraseña");

function bienvenido (User) {
    alert ("Bienvenido" + " " + User)
} 
bienvenido(UserName);

    let pais = prompt ("Ingresar Pais (Colombia)");
    let ciudad= prompt ("Ingresar Ciudad (Medellin o Bogota)");

    if(pais==="Colombia" && ciudad==="Bogota"){ 
alert ("Hay 5 habitaciones disponibles")
}
else if (pais==="Colombia" && ciudad==="Medellin"){ 
    alert ("Hay 2 habitaciones disponibles")
    }
    else { 
    alert ("Por los momentos sòlo tenemos disponibilidad en Bogota y Medellin Colombia")
    }
const HABITACIONES = prompt ("Ingresa en número cuantas habitaciones necesitas"); 
const HABITACIONES_NUMERO = parseInt (HABITACIONES);
if (isNaN(HABITACIONES_NUMERO)){
    alert ("No es un número válido")
}




