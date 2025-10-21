// Selecciona todos los elementos con clase "boton" para asignar eventos de clic
let botones = document.querySelectorAll(".boton");
// Itera sobre cada botón para añadir un evento de clic que ejecuta la función mostrarSeccion
for (let i = 0; i < botones.length; i++) {
    const botonHTML = botones[i];
    botonHTML.addEventListener("click", mostrarSeccion);
}

// Función que maneja el evento de clic en un botón para mostrar una sección específica
function mostrarSeccion() {
    // Obtiene el ID del botón clicado
    let idBoton = this.getAttribute("id");
    // Genera el ID de la sección correspondiente convirtiendo la primera letra del ID del botón a minúscula
    let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4);
    // Cambia a la sección correspondiente
    cambiarSeccion(idSeccion);
}

// Función que muestra u oculta botones según el tipo de usuario (invitado, cliente o paseador)
function mostrarBotones(tipoUsuario) {
    // Selecciona todos los botones
    let botones = document.querySelectorAll(".boton");
    // Oculta todos los botones inicialmente
    for (let i = 0; i < botones.length; i++) {
        const botonHTML = botones[i];
        botonHTML.style.display = "none";
    }
    // Muestra solo los botones correspondientes al tipo de usuario
    let botonesMostrar = document.querySelectorAll("." + tipoUsuario);
    for (let i = 0; i < botonesMostrar.length; i++) {
        const botonHTML = botonesMostrar[i];
        botonHTML.style.display = "block";
    }
}

// Inicializa la interfaz mostrando botones para un usuario "invitado"
mostrarBotones("invitado");

// Función que cambia la sección visible según el ID proporcionado
function cambiarSeccion(seccionNueva) {
    // Oculta todas las secciones
    ocultarSecciones();
    // Muestra la sección solicitada
    document.querySelector("#" + seccionNueva).style.display = "block";
    // Ejecuta funciones específicas según la sección mostrada
    switch (seccionNueva) {
        case "seccionSeleccionDePaseador":
            mostrarPaseador();
            break;
        case "seccionGestionContratacionPaseador":
            actualizarListaContratacionesPaseador();
            break;
        case "seccionVerPerrosAsignados":
            listarPerrosAsignados();
            break;
        case "seccionGestionContratacion":
            mostrarContratacionPendiente();
            break;
        case "seccionListaPaseadores":
            mostrarListadePaseadores();
            break;
        case "seccionContratacionPendientePaseador":
            actualizarListaContratacionesPaseador();
            break;
        case "seccionPerrosAsignadosPaseador":
            listarPerrosAsignados();
            break;
    }
}

// Inicializa la interfaz mostrando la sección de inicio
cambiarSeccion("seccionInicio");

// Función que oculta todas las secciones con clase "seccion"
function ocultarSecciones() {
    let secciones = document.querySelectorAll(".seccion");
    for (let i = 0; i < secciones.length; i++) {
        const seccionHTML = secciones[i];
        seccionHTML.style.display = "none";
    }
}

// --------------------------------------------- Clases ----------------------------------------------

// Clase que representa una contratación de un paseador para un perro
class Contratacion {
    constructor(id, nombrePerro, tamanio, nombre, nombreP, estado) {
        this.id = id; // ID único de la contratación
        this.nombrePerro = nombrePerro; // Nombre del perro
        this.tamanioPerro = tamanio; // Tamaño del perro (Chico, Mediano, Grande)
        this.nombreC = nombre; // Nombre del cliente
        this.nombreP = nombreP; // Nombre del paseador
        this.estado = estado; // Estado de la contratación (pendiente, aprobado, rechazado)
    }
}

// Clase que representa un cliente registrado
class Cliente {
    constructor(nombre, usuarioMin, contrasenia, nombrePerro, tamanio) {
        this.nombre = nombre; // Nombre del cliente
        this.usuario = usuarioMin; // Nombre de usuario en minúsculas
        this.contrasenia = contrasenia; // Contraseña
        this.nombrePerro = nombrePerro; // Nombre del perro del cliente
        this.tamanio = tamanio; // Tamaño del perro
    }
}

// Clase que representa un paseador registrado
class Paseador {
    constructor(idP, nombreP, usuarioP, contraseniaP, cupoP) {
        this.id = idP; // ID único del paseador
        this.nombre = nombreP; // Nombre del paseador
        this.usuario = usuarioP; // Nombre de usuario
        this.contrasenia = contraseniaP; // Contraseña
        this.cupo = cupoP; // Cupo máximo de perros que puede manejar
    }
}

// Clase que representa un cliente logueado
class ClienteLogeado {
    constructor(
        nombreCL,
        usuarioCL,
        contraseniaCL,
        nombrePerroCL,
        tamanioCL,
        contratacionActiva
    ) {
        this.nombre = nombreCL; // Nombre del cliente
        this.usuario = usuarioCL; // Nombre de usuario
        this.contrasenia = contraseniaCL; // Contraseña
        this.nombrePerro = nombrePerroCL; // Nombre del perro
        this.tamanio = tamanioCL; // Tamaño del perro
        this.contratacionActiva = contratacionActiva; // Estado de contratación activa
    }
}

// Clase que representa un paseador logueado
class PaseadorLogeado {
    constructor(idPL, nombrePL, usuarioPL, contraseniaPL, cupoPL) {
        this.id = idPL; // ID del paseador
        this.nombre = nombrePL; // Nombre del paseador
        this.usuario = usuarioPL; // Nombre de usuario
        this.contrasenia = contraseniaPL; // Contraseña
        this.cupo = cupoPL; // Cupo máximo
    }
}

// Clase que gestiona el sistema de paseadores y clientes
class Sistema {
    constructor() {
        // Lista de clientes registrados con datos iniciales
        this.clientesRegistrados = [
            new Cliente("Lionel Messi", "messi10", "Thegoat2022", "Pulga", "Chico"),
            new Cliente("Elon Musk", "melonhusk", "Watermelon1", "Marte", "Grande"),
            new Cliente(
                "Mala Fama",
                "elmalafama",
                "Malafamaysb123",
                "Pibito",
                "Mediano"
            ),
            new Cliente(
                "Ana de Armas",
                "anitaballerina",
                "Ballerina05",
                "Salsa",
                "Grande"
            ),
            new Cliente(
                "T所有reto Furioso",
                "toretoveloz",
                "Toretoelrapido05",
                "Dodge",
                "Chico"
            ),
            new Cliente(
                "Nelson Ferrari",
                "nelson24",
                "Ferrari57",
                "Charles",
                "Grande"
            ),
            new Cliente(
                "Pablo Redbull",
                "pablorb",
                "Pablitoredbull529",
                "Bobby",
                "Grande"
            ),
            new Cliente("Juan Disney", "juan08", "Juandisney19", "Mickey", "Mediano"),
            new Cliente("Luis Suarez", "pistolero09", "Luis09", "Kira", "Chico"),
            new Cliente(" joys", "joaquin10", "Joa10", "Zeus", "Grande"),
            new Cliente("Karen Molina", "karen11", "mMlina11", "Milo", "Chico"),
            new Cliente("Lucas Fernández", "lucas12", "Lucas444", "Gerard", "Grande"),
            new Cliente("María Silva", "maria13", "Silva13", "Chispa", "Chico"),
            new Cliente("Javier Cabrera", "javi07", "Cangrejo7", "Thor", "Grande"),
            new Cliente("Olga Díaz", "olga15", "Diaz2025", "Canela", "Mediano"),
            new Cliente("Pablo Martínez", "pablo16", "Martinez16", "Bruno", "Grande"),
            new Cliente("Marcelo Tinelli", "marceti2", "Marce1960", "Rex", "Chico"),
            new Cliente("Santiago López", "santi18", "Lopezpass7", "Jack", "Mediano"),
            new Cliente("Tamara Pérez", "tamara19", "Tami123", "Ricardo", "Grande"),
            new Cliente(
                "Ulises Romero",
                "ulises20",
                "Romo2020",
                "Mauricio",
                "Mediano"
            ),
        ];

        // Lista de paseadores registrados
        this.paseadores = [
            new Paseador(0, "Javier", "javi1891", "Javidelcap5", 12),
            new Paseador(1, "Manuel", "manuel1891", "Manueldelcap5", 12),
            new Paseador(2, "Lorenzo", "lolo1891", "Lolodelcap5", 10),
            new Paseador(3, "Ezequiel", "eze1891", "Ezedelcap5", 8),
            new Paseador(4, "Ronald", "ron1891", "Rondelcap5", 12),
        ];

        // Lista de contrataciones iniciales
        this.contrataciones = [
            new Contratacion(
                0,
                "Bobby",
                "Grande",
                "Pablo Redbull",
                "Ezequiel",
                "aprobado"
            ),
            new Contratacion(
                1,
                "Mauricio",
                "Mediano",
                "Ulises Romero",
                "Javier",
                "aprobado"
            ),
            new Contratacion(
                2,
                "Ricardo",
                "Grande",
                "Tamara Pérez",
                "Lorenzo",
                "aprobado"
            ),
            new Contratacion(
                3,
                "Rex",
                "Chico",
                "Marcelo Tinelli",
                "Javier",
                "pendiente"
            ),
            new Contratacion(
                4,
                "Gerard",
                "Grande",
                "Lucas Fernández",
                "Manuel",
                "pendiente"
            ),
            new Contratacion(
                5,
                "Pulga",
                "Chico",
                "Lionel Messi",
                "Javier",
                "aprobado"
            ),
            new Contratacion(
                6,
                "Pibito",
                "Mediano",
                "Mala Fama",
                "Lorenzo",
                "aprobado"
            ),
            new Contratacion(
                7,
                "Marte",
                "Grande",
                "Elon Musk",
                "Ezequiel",
                "aprobado"
            ),
            new Contratacion(
                8,
                "Kira",
                "Chico",
                "Luis Suarez",
                "Javier",
                "pendiente"
            ),
            new Contratacion(
                9,
                "Canela",
                "Mediano",
                "Olga Díaz",
                "Manuel",
                "pendiente"
            ),
            new Contratacion(
                10,
                "Thor",
                "Grande",
                "Javier Cabrera",
                "Lorenzo",
                "pendiente"
            ),
            new Contratacion(
                11,
                "Jack",
                "Mediano",
                "Santiago López",
                "Lorenzo",
                "pendiente"
            ),
        ];

        // Listas para almacenar los usuarios logueados
        this.clienteLogeado = [];
        this.paseadorLogeado = [];
    }

    // Calcula el cupo disponible de cada paseador y verifica si tienen perros grandes o chicos
    calcularCupoDisponible() {
        let resultado = [];
        // Itera sobre cada paseador
        for (let i = 0; i < this.paseadores.length; i++) {
            const paseador = this.paseadores[i];
            let espaciosOcupados = 0;
            let tieneGrande = false;
            let tieneChico = false;

            // Calcula los espacios ocupados según las contrataciones aprobadas
            for (let j = 0; j < this.contrataciones.length; j++) {
                const contratacion = this.contrataciones[j];
                if (
                    contratacion.nombreP === paseador.nombre &&
                    contratacion.estado === "aprobado"
                ) {
                    switch (contratacion.tamanioPerro) {
                        case "Chico":
                            espaciosOcupados += 1;
                            tieneChico = true;
                            break;
                        case "Mediano":
                            espaciosOcupados += 2;
                            break;
                        case "Grande":
                            espaciosOcupados += 4;
                            tieneGrande = true;
                            break;
                    }
                }
            }

            // Calcula los cupos disponibles
            let cuposDisponibles = paseador.cupo - espaciosOcupados;
            resultado.push({
                id: paseador.id,
                nombre: paseador.nombre,
                cuposDisponibles: cuposDisponibles,
                tieneGrande: tieneGrande,
                tieneChico: tieneChico,
            });
        }
        return resultado;
    }
}

// Instancia del sistema
let sistema = new Sistema();

// --------------------------------------------- Registro ----------------------------------------------

// Asigna el evento de clic al botón de registro
document.querySelector("#Registrarse").addEventListener("click", Registro);

// Función para registrar un nuevo cliente
function Registro() {
    // Obtiene los valores de los campos de registro
    let nombre = document.querySelector("#nombre").value;
    let usuario = document.querySelector("#usuario").value;
    let contrasenia = document.querySelector("#contrasenia").value;
    let nombrePerro = document.querySelector("#nombrePerro").value;
    let tamanio = document.querySelector("#tamanio").value;
    let usuarioMin = usuario.toLowerCase();

    let cantidadMin = 0;
    let cantidadMay = 0;
    let cantidadNum = 0;

    // Verifica si el nombre de usuario ya existe
    let usuarioRepetido = false;
    for (let i = 0; i < sistema.clientesRegistrados.length; i++) {
        let cliente = sistema.clientesRegistrados[i];
        if (cliente.usuario === usuarioMin) {
            usuarioRepetido = true;
            break;
        }
    }

    if (usuarioRepetido) {
        document.querySelector("#Respuesta").innerHTML =
            "Ese nombre de usuario ya está en uso.";
        return;
    }

    // Valida la contraseña
    for (let i = 0; i < contrasenia.length; i++) {
        let letras = contrasenia.charAt(i);
        if (letras >= "a" && letras <= "z") {
            cantidadMin++;
        } else if (letras >= "A" && letras <= "Z") {
            cantidadMay++;
        } else if (letras >= "0" && letras <= "9") {
            cantidadNum++;
        }
    }

    // Verifica los requisitos de la contraseña y los datos del perro
    if (
        contrasenia.length < 5 ||
        cantidadMin === 0 ||
        cantidadMay === 0 ||
        cantidadNum === 0
    ) {
        document.querySelector("#Respuesta").innerHTML =
            "SU CONTRASEÑA DEBE CONTENER AL MENOS UNA MAYÚSCULA, UNA MINÚSCULA Y UN NÚMERO.";
        return;
    } else if (nombrePerro === "" || nombrePerro === " ") {
        document.querySelector("#Respuesta").innerHTML =
            "DEBE INGRESAR EL NOMBRE DEL PERRO.";
        return;
    } else if (tamanio === "xx") {
        document.querySelector("#Respuesta").innerHTML =
            "DEBE SELECCIONAR UN TAMAÑO VÁLIDO (CHICO, MEDIANO O GRANDE).";
        return;
    }

    // Crea y registra un nuevo cliente
    let objNuevoCliente = new Cliente(
        nombre,
        usuarioMin,
        contrasenia,
        nombrePerro,
        tamanio
    );
    sistema.clientesRegistrados.push(objNuevoCliente);
    document.querySelector("#Respuesta").innerHTML = `Registro exitoso.`;
}

// --------------------------------------------- Inicio de sesión ----------------------------------------------

// Asigna el evento de clic al botón de login
document.querySelector("#Logeo").addEventListener("click", Login);

// Función para iniciar sesión
function Login() {
    let usuarioLogin = document
        .querySelector("#usuarioLogin")
        .value.toLowerCase();
    let contraseniaLogin = document.querySelector("#contraseniaLogin").value;
    let tipoUsuario = "";
    let usuarioEncontrado = false;

    document.querySelector("#RespuestaLogin").innerHTML = "";
    // Verifica si el usuario es un cliente
    for (let i = 0; i < sistema.clientesRegistrados.length; i++) {
        const cliente = sistema.clientesRegistrados[i];
        if (
            usuarioLogin === cliente.usuario &&
            contraseniaLogin === cliente.contrasenia
        ) {
            tipoUsuario = "cliente";
            usuarioEncontrado = true;
            sistema.clienteLogeado.push(cliente);
            cambiarSeccion("seccionSeleccionDePaseador");
            break;
        }
    }
    // Verifica si el usuario es un paseador
    if (!usuarioEncontrado) {
        for (let j = 0; j < sistema.paseadores.length; j++) {
            const paseador = sistema.paseadores[j];
            if (
                usuarioLogin === paseador.usuario &&
                contraseniaLogin === paseador.contrasenia
            ) {
                tipoUsuario = "paseador";
                usuarioEncontrado = true;
                sistema.paseadorLogeado.push(paseador);
                cambiarSeccion("seccionInicio");
                break;
            }
        }
    }

    // Muestra un mensaje de error si el usuario no se encuentra
    if (!usuarioEncontrado) {
        document.querySelector(
            "#RespuestaLogin"
        ).innerHTML = `USUARIO O CONTRASEÑA INCORRECTOS.`;
        return;
    }

    // Muestra los botones correspondientes al tipo de usuario y limpia los campos
    mostrarBotones(tipoUsuario);
    document.querySelector("#usuarioLogin").value = "";
    document.querySelector("#contraseniaLogin").value = "";
}

// --------------------------------------------- Cierre de sesión ----------------------------------------------

// Asigna el evento de clic al botón de cerrar sesión
document
    .querySelector("#btnSeccionCerrarSesion")
    .addEventListener("click", cerrarSesion);

// Función para cerrar la sesión
function cerrarSesion() {
    document.querySelector("#infoContratacionError").innerHTML = "";
    sistema.paseadorLogeado = [];
    sistema.clienteLogeado = [];
    mostrarBotones("invitado");
    cambiarSeccion("seccionInicio");
}

// --------------------------------------------- Generación de Contratación ----------------------------------------------

// Asigna eventos a los botones de contratación
document
    .querySelector("#btnSeccionContratarPaseador")
    .addEventListener("click", seccionContratarPaseador);
document
    .querySelector("#btnSeccionContratacionPendiente")
    .addEventListener("click", seccionGestionContratacion);

// Cambia a la sección de contratar paseador
function seccionContratarPaseador() {
    document.querySelector("#infoContratacionError").innerHTML = "";
    cambiarSeccion("seccionSeleccionDePaseador");
}

// Cambia a la sección de gestión de contrataciones
function seccionGestionContratacion() {
    cambiarSeccion("seccionGestionContratacion");
}

// Muestra los paseadores disponibles según el tamaño del perro del cliente
function mostrarPaseador() {
    let opciones = "";
    let tamanioCL = sistema.clienteLogeado[0].tamanio;
    let tamanioNumerico = 0;
    // Asigna un valor numérico al tamaño del perro
    switch (tamanioCL) {
        case "Chico":
            tamanioNumerico = 1;
            break;
        case "Mediano":
            tamanioNumerico = 2;
            break;
        case "Grande":
            tamanioNumerico = 4;
            break;
    }

    // Obtiene los paseadores con cupo disponible
    let datos = sistema.calcularCupoDisponible();
    for (let i = 0; i < datos.length; i++) {
        const paseador = datos[i];
        if (paseador.cuposDisponibles >= tamanioNumerico) {
            opciones += `<option value="${paseador.id}">${paseador.nombre}</option>`;
        }
    }

    // Muestra un mensaje si no hay paseadores disponibles
    if (opciones === "") {
        opciones = `<option value="slc" disabled >NO HAY PASEADORES DISPONIBLES PARA EL TAMAÑO DE SU PERRO EN ESTE MOMENTO.</option>`;
    } else {
        opciones = '<option value="slc">Seleccione...</option>' + opciones;
    }

    document.querySelector("#comboPaseadores").innerHTML = opciones;
}

// Genera un ID único para una nueva contratación
function obtenerNuevoId() {
    let maxId = -1;
    for (let i = 0; i < sistema.contrataciones.length; i++) {
        if (sistema.contrataciones[i].id > maxId) {
            maxId = sistema.contrataciones[i].id;
        }
    }
    return maxId + 1;
}

// Muestra las contrataciones pendientes del cliente logueado
function mostrarContratacionPendiente() {
    const clienteLogeado = sistema.clienteLogeado[0];
    let tienePendiente = false;
    let infoContratacion = "";

    for (let i = 0; i < sistema.contrataciones.length; i++) {
        const contratacion = sistema.contrataciones[i];
        if (
            contratacion.nombreC === clienteLogeado.nombre &&
            contratacion.estado === "pendiente"
        ) {
            tienePendiente = true;
            infoContratacion = `<strong>Paseador:</strong> ${contratacion.nombreP} <br><br> <strong>Estado:</strong> ${contratacion.estado} <br>`;
            document.querySelector("#btnCancelarContratacion").style.display =
                "block";
            break;
        }
    }

    if (!tienePendiente) {
        infoContratacion = "NO HAY CONTRATACIONES PENDIENTES EN ESTE MOMENTO.";
        document.querySelector("#btnCancelarContratacion").style.display = "none";
    }

    document.querySelector("#infoContratacion").innerHTML = infoContratacion;
}

// Asigna el evento de clic al botón de contratar paseador
document
    .querySelector("#ContratarPaseador")
    .addEventListener("click", contratarPaseador);

// Crea una nueva contratación
function contratarPaseador() {
    document.querySelector("#infoContratacionError").innerHTML = "";
    let paseadorSeleccionado = document.querySelector("#comboPaseadores").value;

    if (paseadorSeleccionado === "slc" || paseadorSeleccionado === null) {
        document.querySelector("#infoContratacionError").innerHTML =
            "POR FAVOR, SELECCIONE UN PASEADOR VÁLIDO.";
        return;
    }

    let paseador = Number(paseadorSeleccionado);
    const clienteLogeado = sistema.clienteLogeado[0];
    let nombrePerro = clienteLogeado.nombrePerro;
    let tamanio = clienteLogeado.tamanio;
    let nombreC = clienteLogeado.nombre;

    // Valida si el cliente ya tiene una contratación pendiente o aprobada
    for (let i = 0; i < sistema.contrataciones.length; i++) {
        const contratacion = sistema.contrataciones[i];
        if (
            contratacion.nombreC === nombreC &&
            contratacion.estado === "pendiente"
        ) {
            document.querySelector("#infoContratacionError").innerHTML =
                "NO PUEDE CONTRATAR HASTA CANCELAR O ESPERAR RESPUESTA DE LA CONTRATACIÓN ACTUAL.";
            mostrarContratacionPendiente();
            return;
        } else if (
            contratacion.nombreC === nombreC &&
            contratacion.estado === "aprobado"
        ) {
            document.querySelector("#infoContratacionError").innerHTML =
                "NO PUEDE CONTRATAR A OTRO PASEADOR SI YA TIENE UNA CONTRATACIÓN APROBADA";
            mostrarContratacionPendiente();
            return;
        }
    }

    // Crea una nueva contratación
    let nombreP = sistema.paseadores[paseador].nombre;
    let estadoContratacion = "pendiente";
    let objNuevaContratacion = new Contratacion(
        obtenerNuevoId(),
        nombrePerro,
        tamanio,
        nombreC,
        nombreP,
        estadoContratacion
    );

    sistema.contrataciones.push(objNuevaContratacion);
    mostrarContratacionPendiente();
    cambiarSeccion("seccionGestionContratacion");
}

// Asigna el evento de clic al botón de cancelar contratación
document
    .querySelector("#btnCancelarContratacion")
    .addEventListener("click", cancelarContratacion);

// Cancela una contratación pendiente
function cancelarContratacion() {
    let clienteLogeado = sistema.clienteLogeado[0];
    let ultimaContratacion = null;

    for (let i = 0; i < sistema.contrataciones.length; i++) {
        const contratacion = sistema.contrataciones[i];
        if (
            contratacion.nombreC === clienteLogeado.nombre &&
            contratacion.estado === "pendiente"
        ) {
            ultimaContratacion = contratacion;
            break;
        }
    }

    if (ultimaContratacion !== null) {
        ultimaContratacion.estado = "rechazado";
        mostrarContratacionPendiente();
    } else {
        document.querySelector("#infoContratacion").innerHTML =
            "NO SE PUEDE CANCELAR UNA CONTRATACIÓN YA GESTIONADA.";
    }
}

// --------------------------------------------- Gestión de contrataciones pendientes (paseador) ----------------------------------------------

// Asigna el evento de clic al botón para mostrar contrataciones pendientes del paseador
document
    .querySelector("#btnSeccionContratacionPendientePaseador")
    .addEventListener("click", mostrarPendientesPaseador);

// Cambia a la sección de contrataciones pendientes para el paseador
function mostrarPendientesPaseador() {
    cambiarSeccion("seccionGestionContratacionPaseador");
    actualizarListaContratacionesPaseador();
}

// Actualiza la lista de contrataciones pendientes del paseador logueado
function actualizarListaContratacionesPaseador() {
    let infoContratacion = "";
    let contratacionPendiente = false;

    for (let j = 0; j < sistema.contrataciones.length; j++) {
        const contratacion = sistema.contrataciones[j];
        if (
            contratacion.nombreP === sistema.paseadorLogeado[0].nombre &&
            contratacion.estado === "pendiente"
        ) {
            contratacionPendiente = true;
            infoContratacion += `Contratación #${contratacion.id} <br><br> Cliente: ${contratacion.nombreC}<br><br>Perro: ${contratacion.nombrePerro} (${contratacion.tamanioPerro})<br>
            <br> <input type="button" value="Procesar" id="${contratacion.id}" class="procesarSolicitud"> <hr>`;
        }
    }

    if (contratacionPendiente) {
        document.querySelector("#infoContratacionPaseador").innerHTML =
            infoContratacion;
        // Asigna eventos a los botones de procesar
        let botonesProcesar = document.querySelectorAll(".procesarSolicitud");
        for (let i = 0; i < botonesProcesar.length; i++) {
            botonesProcesar[i].addEventListener(
                "click",
                procesarContratacionPaseador
            );
        }
    } else {
        document.querySelector("#infoContratacionPaseador").innerHTML =
            "NO TIENE CONTRATACIONES PENDIENTES.";
    }
}

// Procesa una contratación pendiente (aprobar o rechazar)
function procesarContratacionPaseador() {
    let idBoton = this.id;
    let contratacion = null;
    let tamanioNumerico = 0;
    let paseador = null;
    let compatible = true;
    let avisoRechazoAutomatico = null;

    // Busca la contratación por ID
    for (let i = 0; i < sistema.contrataciones.length; i++) {
        if (Number(idBoton) === sistema.contrataciones[i].id) {
            contratacion = sistema.contrataciones[i];
            break;
        }
    }

    // Obtiene los datos del paseador logueado
    let datos = sistema.calcularCupoDisponible();
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].id === sistema.paseadorLogeado[0].id) {
            paseador = datos[i];
            break;
        }
    }

    // Verifica compatibilidad de tamaños
    if (contratacion !== null && paseador !== null) {
        if (contratacion.tamanioPerro === "Grande" && paseador.tieneChico) {
            compatible = false;
        } else if (contratacion.tamanioPerro === "Chico" && paseador.tieneGrande) {
            compatible = false;
        }

        // Asigna valor numérico al tamaño del perro
        switch (contratacion.tamanioPerro) {
            case "Chico":
                tamanioNumerico = 1;
                break;
            case "Mediano":
                tamanioNumerico = 2;
                break;
            case "Grande":
                tamanioNumerico = 4;
                break;
        }

        // Procesa la contratación según compatibilidad y cupo
        if (compatible && paseador.cuposDisponibles >= tamanioNumerico) {
            contratacion.estado = "aprobado";
            alert("CONTRATACIÓN APROBADA CORRECTAMENTE");
        } else if (!compatible) {
            contratacion.estado = "rechazado";
            alert("CONTRATACIÓN RECHAZADA POR INCOMPATIBILIDAD DE TAMAÑO DE PERROS");
        } else if (paseador.cuposDisponibles < tamanioNumerico) {
            contratacion.estado = "rechazado";
            alert("CONTRATACIÓN RECHAZADA POR FALTA DE CUPO DISPONIBLE");
        }

        // Actualiza el cupo disponible
        datos = sistema.calcularCupoDisponible();
        paseador = null;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].id === sistema.paseadorLogeado[0].id) {
                paseador = datos[i];
                break;
            }
        }

        // Rechaza automáticamente otras contrataciones incompatibles
        for (let i = 0; i < sistema.contrataciones.length; i++) {
            let otraContratacion = sistema.contrataciones[i];
            if (
                otraContratacion.estado === "pendiente" &&
                otraContratacion.nombreP === paseador.nombre &&
                otraContratacion.id !== contratacion.id
            ) {
                let tamanioOtro = 0;
                switch (otraContratacion.tamanioPerro) {
                    case "Chico":
                        tamanioOtro = 1;
                        break;
                    case "Mediano":
                        tamanioOtro = 2;
                        break;
                    case "Grande":
                        tamanioOtro = 4;
                        break;
                }

                let compatibleOtro = true;
                if (otraContratacion.tamanioPerro === "Grande" && paseador.tieneChico) {
                    compatibleOtro = false;
                } else if (
                    otraContratacion.tamanioPerro === "Chico" &&
                    paseador.tieneGrande
                ) {
                    compatibleOtro = false;
                }

                if (!compatibleOtro || paseador.cuposDisponibles < tamanioOtro) {
                    otraContratacion.estado = "rechazado";
                    avisoRechazoAutomatico =
                        "Fueron rechazadas las contrataciones con incompatibilidad de tamaño de perros o cupo insuficiente.";
                }
            }
        }

        actualizarListaContratacionesPaseador();
    }
    if (avisoRechazoAutomatico !== null) {
        alert(avisoRechazoAutomatico);
    }
}

// --------------------------------------------- Listado de perros asignados (paseador) ----------------------------------------------

// Asigna el evento de clic al botón para mostrar los perros asignados
document
    .querySelector("#btnSeccionPerrosAsignadosPaseador")
    .addEventListener("click", mostrarPerrosAsignados);

// Cambia a la sección de perros asignados
function mostrarPerrosAsignados() {
    cambiarSeccion("seccionVerPerrosAsignados");
}

// Lista los perros asignados al paseador logueado
function listarPerrosAsignados() {
    document.querySelector("#tblListaPerrosAsignados").innerHTML = "";
    let cupoMaximo = sistema.paseadorLogeado[0].cupo;
    let paseadorLogeado = sistema.paseadorLogeado[0];
    let infoPerros = "";
    let cuposOcupados = 0;
    let porcentajeCupoOcupado = 0;

    // Itera sobre las contrataciones para listar los perros asignados
    for (let i = 0; i < sistema.contrataciones.length; i++) {
        const contratacion = sistema.contrataciones[i];
        let tamanioNumerico = 0;
        if (
            contratacion.nombreP === paseadorLogeado.nombre &&
            contratacion.estado === "aprobado"
        ) {
            switch (contratacion.tamanioPerro) {
                case "Chico":
                    tamanioNumerico = 1;
                    break;
                case "Mediano":
                    tamanioNumerico = 2;
                    break;
                case "Grande":
                    tamanioNumerico = 4;
                    break;
            }

            cuposOcupados += tamanioNumerico;
            document.querySelector(
                "#tblListaPerrosAsignados"
            ).innerHTML += `<tr><td>${contratacion.nombrePerro}</td><td>${contratacion.tamanioPerro}</td></tr>`;
        }
    }

    // Calcula el porcentaje de ocupación
    porcentajeCupoOcupado = (cuposOcupados * 100) / cupoMaximo;
    infoPerros = `Cupo Maximo: ${cupoMaximo} <br><br>
Cupos Ocupados: ${cuposOcupados}<br><br>
Ocupacion Actual: ${porcentajeCupoOcupado}%`;
    document.querySelector("#infoPerrosAsignados").innerHTML = infoPerros;
}

// --------------------------------------------- Listado de paseadores ----------------------------------------------

// Muestra una lista de paseadores con la cantidad de perros asignados
function mostrarListadePaseadores() {
    document.querySelector("#listaPaseadores").innerHTML = "";
    let listaHTML = "";

    for (let i = 0; i < sistema.paseadores.length; i++) {
        const paseador = sistema.paseadores[i];
        let perrosAsignados = 0;
        for (let j = 0; j < sistema.contrataciones.length; j++) {
            const contratacion = sistema.contrataciones[j];
            if (
                paseador.nombre === contratacion.nombreP &&
                contratacion.estado === "aprobado"
            ) {
                perrosAsignados++;
            }
        }
        listaHTML += `<li>${paseador.nombre} - ${perrosAsignados} perros asignados</li>`;
    }
    document.querySelector("#listaPaseadores").innerHTML = listaHTML;
}
