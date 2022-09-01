//Declarar unas variables
let nombreUsuario = "Cristian"; 
let saldoCuenta = 50000; 
let limiteExtraccion = 500;
let claveCorrecta = 1234; 

iniciarSesion();

function iniciarSesion(){
    let clave = prompt("Digite su clave")     //Alerta de entrada

    if (clave == claveCorrecta){     //mismo caracter y tipo de dato ===
        //Bienvenido + nombreUsuario
        alert('Bienvenido ${nombreUsuario}');
        document.body.style.display = "block";     //Si la conraseña es correcta mostrar la pag
        window.onload = function(){
            cargarNombreEnPantalla();
        }
    }else{
        saldoCuenta = 0;
        alert("Clave incorrecta, tu dinero ha sido retenido por cuestiones de seguridad");
    }
        
}

//Funciones para actualizar el valor de las variables html

function cargarNombreEnPantalla(){
    document.gerElementById("nombre").innerHTML;
    "Bienvenido/a " + nombreUsuario;
}