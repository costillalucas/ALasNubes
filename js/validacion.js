const regexNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;   // nombre apellido
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                                // ejemplo@hotmail.com
const regexnumTel1 = /^\d{10}$/;                                                // 10 dígitos
const regexnumTel2 = /^\d{11}$/;                                                // 11 dígitos
const regexciudad = /^[A-Za-z0-9\sáéíóúÁÉÍÓÚñÑüÜ\s.,:;]+$/;                     // cualquier direccion...
const presupuestoMin = 1000;                                                    // presupuesto minimo para un viaje
const presupuestoMax = 999999;                                                  // presupuesto maximo para un viaje

function configurarFechaActual() {
    var FechaSalida = document.getElementById('fecha-salida');
    // Obtener la fecha actual
    const fechaActual = new Date();
    // Obtener la fecha en el formato YYYY-MM-DD
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    // Establecer el valor del input
    FechaSalida.value = fechaFormateada;
    FechaSalida.setAttribute('min', fechaFormateada); 
    }

function tipoDeViaje() {
    // Habilita o deshabilita el campo de fecha de regreso según el tipo de viaje seleccionado.
    var viajeSeleccionado = document.querySelector('input[name="viaje"]:checked').value;
    var fechaRegresoInput = document.getElementById("fecha-regreso");
    if (viajeSeleccionado === "ida") {
        fechaRegresoInput.disabled = true;
        fechaRegresoInput.value = "";
        } 
    else 
        fechaRegresoInput.disabled = false;    
  }

function setearFechaRegreso(){
    // cuando se hace click en el calendario de fecha-regreso, se setea la fecha minina de ese viaje.
    var fechaRegresoInput = document.getElementById("fecha-regreso");
    var FechaSalida = document.getElementById('fecha-salida');

    fechaRegresoInput.setAttribute('min',FechaSalida.value ); 
  }

function ResetarFechaRegreso(){
    // cuando se hace clic en fecha-salida, se resetea la fecha del viaje de regreso.
    var fechaRegresoInput = document.getElementById("fecha-regreso");
    
    fechaRegresoInput.value=''; 
  }

function inputInvalido(inputUsuario){
    // un mensaje de error que se utiliza cuando el usurio ingresa un valor inválido.
    return "Ud. ha ingresado " + inputUsuario + " inválido.\nPor favor, intente nuevamente";
    } 

function NombreApellidoInvalido(nombreApellido){
    // verifica que el nombre y apellido esté separado por un espacio.
    // si es un nombre invalido devuelve true, sino false.
    return !regexNombreApellido.test(nombreApellido);
    }

function emailInvalido(email) {
    // verifica que cumpla con el formato de un email.
    return ! regexEmail.test(email);
    }

function ciudadInvalida(ciudad) {
    // Verifica nombre de ciudad.
    return !regexciudad.test(ciudad);
    }

function telefonoInvalido(tel){
    // verifica que el numero ingresado tenga 10 u 11 digitos.
    return ! ( regexnumTel1.test(tel) || regexnumTel2.test(tel) ) ;
    }

function presupuestoInvalido(presup) {
    // si el presupuesto está fuera del valor presupuesto Minimo o maximo, retorna true.
    const intPresup = parseInt(presup);
    return intPresup < presupuestoMin || presupuestoMax < intPresup;
    }

function limpiarFormulario(){
    var UserNombre = document.getElementById("nombre").value='';
    var UserEmail = document.getElementById("email").value='';
    var UserTelefono = document.getElementById("telefono").value='';
    var UserOrigen = document.getElementById("origen").value='';
    var UserDestino = document.getElementById("destino").value='';
    var Userpresupuesto = document.getElementById("presupuesto").value='';
    }

function validarFormulario() {
    // valida que cada input ingresado cumple con las condiciones requeridas.
    // si todas estan bien, envia el formulario. Sino, se pide corregir los inputs.
    let ret= true;
    var UserNombre = document.getElementById("nombre").value.trim();
    var UserEmail = document.getElementById("email").value.trim();   
    var UserTelefono = document.getElementById("telefono").value.trim();
    var UserOrigen = document.getElementById("origen").value.trim();
    var UserDestino = document.getElementById("destino").value.trim();
    var Userpresupuesto = document.getElementById("presupuesto").value.trim();

    if (NombreApellidoInvalido(UserNombre)){
        alert(inputInvalido("un nombre"));
        ret= false;
        }

    if (emailInvalido(UserEmail)){
        alert(inputInvalido("un email"));
        ret= false;
        }  

    if (telefonoInvalido(UserTelefono)){
        alert(inputInvalido("un telefono"));
        ret= false;
        }   

    if (ciudadInvalida(UserOrigen)){
        alert(inputInvalido("un origen"));
        ret= false;
        }

    if (ciudadInvalida(UserDestino)){
        alert(inputInvalido("un destino"));
        ret= false;
        }        

    if (presupuestoInvalido(Userpresupuesto)){
        alert(inputInvalido("un presupuesto"));
        ret= false;
        }

    if (ret){
        // enviarEmailACordinador()     <-- mediante un servicio externo
        alert("Formulario enviado correctamente.");
        limpiarFormulario();
        }

    return false;
    }

function suscribirse(){
    // valida el Email, comprueba que no esté registrado y ¿se guarda en BBDD?
    var ret1= true;
    var susEmail = document.getElementById("Suscribite").value.trim();   
    if (emailInvalido(susEmail)){
        alert(inputInvalido("un email"));
        ret1 = false;
        } 
    /*
    if (estaRegistrado(susEmail)){
        alert("Error: Este email ya está registrado.");
        ret1 = false;
        }
    */     

    if(ret1){
        alert("Gracias por suscribirte!\nComenzaras a recibir novedades!");
        susEmail = document.getElementById("Suscribite").value='';
        // suscribir(susEmail);
        }

    return false;
    }

configurarFechaActual();    // esto se ejecuta cuando se carga la pagina por primera vez.
