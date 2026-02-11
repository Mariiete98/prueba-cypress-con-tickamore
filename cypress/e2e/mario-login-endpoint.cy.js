import '@shelex/cypress-allure-plugin';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { LoginFunciones } from '../support/paginas/login/login.funciones';
import { LoginElementos } from '../support/paginas/login/login.elementos';
import { LoginData } from '../support/paginas/login/login.data';


describe(LoginData.titulos.loginAPI, () => {

    // CON JSON SIN HARDCODEAR
    let url;
    let endpointLogin;

    let usuarioCorrecto;
    let contrasenaCorrecta;
    let usuarioIncorrecto;
    let contrasenaIncorrecta;

    // La API Login devuelve 200 y 200 en el error de ambas credenciales ingresadas
    // Credenciales vacías devolvería error 400, pero ya se encarga el botón de no llamar a la API

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.fixture('url').then((data) => {
            url = data.url;
            endpointLogin = data.apiLogin;
        }); 

        cy.fixture('login').then((dataLogin) => {
            usuarioCorrecto = dataLogin.CORRECTO.user;
            contrasenaCorrecta = dataLogin.CORRECTO.pass;
            usuarioIncorrecto = dataLogin.INCORRECTO.user;
            contrasenaIncorrecta = dataLogin.INCORRECTO.pass;
            
        }); 

    });

    it('TEST 4.1. Aceptar Cookies predeterminadas y abrir Login correcto con endpoint. Status 200.', () => {

            // Test Cookies correcto:
            Logger.pasoNumero(1);
            Logger.paso('Se carga la URL.');
            cy.visit(url);

            Logger.pasoNumero(2);
            Logger.paso('Aceptar Cookies.');
            InicioFunciones.verificarVentanaCookiesAbierta();
            cy.wait(1000);
            //InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
            InicioFunciones.clickAceptarTodo(); 
            // Ahora funciona por el forced to click
            InicioFunciones.verificarVentanaCookiesCerrada();
        
            Logger.pasoNumero(3);
            Logger.paso('Abrimos la ventana del Login');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciar);

            Logger.pasoNumero(4);
            Logger.paso('Comprobar carga de ventana Login');
            LoginFunciones.verificarVentanaLoginAbierta();
            Logger.verificacion('Se abrió el Login');

            Logger.pasoNumero(5);
            Logger.paso('Comprobar que carga la ventana Login');
            LoginFunciones.verificarVentanaConTitulo();
            Logger.verificacion('Se cargó la ventana');
            cy.wait(2000);

            Logger.pasoNumero(6);
            Logger.paso('Usuario y Contraseña completos. Click en Usuario');
            LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);
            cy.wait(1000);

                Logger.subPaso('Escribe el Usuario');
                LoginFunciones.insertarUsuario(usuarioCorrecto)
                cy.wait(1000)

                Logger.subPaso('Salta a campo Contraseña');
                LoginFunciones.clickElemento(LoginElementos.login.campoContrasena);
                cy.wait(1000);

                Logger.subPaso('Escribe la Contraseña');
                LoginFunciones.insertarPassword(contrasenaCorrecta)
                cy.wait(1000)

                Logger.subPaso('Vuelve a saltar a campo Usuario');
                LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);
                cy.wait(1000);

                Logger.subPaso('Comprueba que no hay símbolo de campo vacío en Usuario');
                LoginFunciones.verificarCampoLleno(LoginElementos.login.botonUsuarioVacio);
                Logger.subVerificacion('Se ha escrito el Usuario');

                Logger.subPaso('Comprueba que no hay símbolo de campo vacío en Contraseña');
                LoginFunciones.verificarCampoLleno(LoginElementos.login.botonContrasenaVacia);
                Logger.subVerificacion('Se ha escrito la Contraseña');

            Logger.pasoNumero(7);
            Logger.paso('Comprueba boton desactivar Constraseña enmascarada');
            LoginFunciones.clickElemento(LoginElementos.login.botonVerContrasenaOculta);
            cy.wait(1000);
                Logger.subPaso('Vuelve a activar enmascarar la Contraseña');
                LoginFunciones.clickElemento(LoginElementos.login.botonOcultarContrasenaDescubierta);








            
            Logger.pasoNumero(8);
            Logger.paso('Llamar a la API de Login');
            //cy.intercept('POST', '**/WEBAPICoreBridge/api/Autorizacion/Clientes/Login').as('apiLogin');
            cy.intercept('POST', endpointLogin).as('apiLogin');
            
            // Prueba de obtener todas api
            // cy.intercept('POST', '**').as('todasLasPost');

            Logger.pasoNumero(9);
            Logger.paso('Intento de disparar API. Intento de inicio de sesión con respuesta por ambos campos escritos');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciarSesion);

            Logger.pasoNumero(10);
            Logger.paso('Esperar a que se dispare la API, pudiendo ser correcto/incorrecto. Esta vez correcto');
            cy.wait('@apiLogin').then((interception) => {
            
            /* Prueba de obtener todas api
            cy.wait('@todasLasPost').then((interception) => {
                Logger.subVerificacion('URL REAL:', interception.request.url);
                Logger.subVerificacion('STATUS:', interception.response?.statusCode);
                Logger.subVerificacion('BODY:', interception.response?.body); */
            

                //el 'expect(interception.response.statusCode).to.eq(200)' no devuelve true para usarlo en if, hay que asignarlo

                const statusC = interception.response.statusCode;
                const contenido = interception.response.body;

                // pruebas de respuesta
                Logger.subVerificacion('CODIGO RECUPERADO: ', statusC);
                Logger.subVerificacion('BODY RECUPERADO: ', contenido);


                Logger.subPaso('Si fue correcto el Login, devuelve 200. Sino, se cierra el Login');
                //el error tambien devuelve 200, hay que comparar el body si es null
                if (statusC === 200 && contenido.datosResult !== null) {

                    Logger.subVerificacion('Login Correcto. Comprobar que se obtiene el usuario que carga en botón del menú');
                    // donde se ve?
                    Logger.subVerificacion('Usuario: ', interception.response.body.datosResult.clienteNombre); // DatosResult es Objeto
                   
                    
                    Logger.pasoNumero(11)
                    Logger.paso('Comprobar que se puede desplegar el botón con nombre de Usuario cargado')
                    LoginFunciones.clickElemento(LoginElementos.login.botonConNombreUsuario);
                    Logger.verificacion('Se inició sesión.');

                    // Probar desplegable
                
                    // Cierre de sesión ¿API?

                } else {

                    Logger.error('Fallo de Test, porque debería logearse.')

                } 

            })

    })


    it('TEST 4.2. Aceptar Cookies predeterminadas y probar Login incorrecto con endpoint. Error. Status 200 pero body null, por ambas credenciales incorrectas', () => {

            // Test Cookies correcto:
            Logger.pasoNumero(1);
            Logger.paso('Se carga la URL.');
            cy.visit(url);

            Logger.pasoNumero(2);
            Logger.paso('Aceptar Cookies.');
            InicioFunciones.verificarVentanaCookiesAbierta();
            cy.wait(1000);
            //InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
            InicioFunciones.clickAceptarTodo(); 
            // Ahora funciona por el forced to click
            InicioFunciones.verificarVentanaCookiesCerrada();
        
            Logger.pasoNumero(3);
            Logger.paso('Abrimos la ventana del Login');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciar);

            Logger.pasoNumero(4);
            Logger.paso('Comprobar carga de ventana Login');
            LoginFunciones.verificarVentanaLoginAbierta();
            Logger.verificacion('Se abrió el Login');

            Logger.pasoNumero(5);
            Logger.paso('Comprobar que carga la ventana Login');
            LoginFunciones.verificarVentanaConTitulo();
            Logger.verificacion('Se cargó la ventana');
            cy.wait(2000);

            Logger.pasoNumero(6);
            Logger.paso('Usuario y Contraseña completos. Click en Usuario');
            LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);
            cy.wait(1000);

                Logger.subPaso('Escribe el Usuario');
                LoginFunciones.insertarUsuario(usuarioIncorrecto)
                cy.wait(1000)

                Logger.subPaso('Salta a campo Contraseña');
                LoginFunciones.clickElemento(LoginElementos.login.campoContrasena);
                cy.wait(1000);

                Logger.subPaso('Escribe la Contraseña');
                LoginFunciones.insertarPassword(contrasenaIncorrecta)
                cy.wait(1000)

                Logger.subPaso('Vuelve a saltar a campo Usuario');
                LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);
                cy.wait(1000);

                Logger.subPaso('Comprueba que no hay símbolo de campo vacío en Usuario');
                LoginFunciones.verificarCampoLleno(LoginElementos.login.botonUsuarioVacio);
                Logger.subVerificacion('Se ha escrito el Usuario');

                Logger.subPaso('Comprueba que no hay símbolo de campo vacío en Contraseña');
                LoginFunciones.verificarCampoLleno(LoginElementos.login.botonContrasenaVacia);
                Logger.subVerificacion('Se ha escrito la Contraseña');

            Logger.pasoNumero(7);
            Logger.paso('Comprueba boton desactivar Constraseña enmascarada');
            LoginFunciones.clickElemento(LoginElementos.login.botonVerContrasenaOculta);
            cy.wait(1000);
                Logger.subPaso('Vuelve a activar enmascarar la Contraseña');
                LoginFunciones.clickElemento(LoginElementos.login.botonOcultarContrasenaDescubierta);





            
            Logger.pasoNumero(8);
            Logger.paso('Llamar a la API de Login');
            // cy.intercept('POST', '**/WEBAPICoreBridge/api/Autorizacion/Clientes/Login').as('apiLogin');
            cy.intercept('POST', endpointLogin).as('apiLogin');
            // Prueba de obtener todas api
            // cy.intercept('POST', '**').as('todasLasPost');

            Logger.pasoNumero(9);
            Logger.paso('Intento de disparar API. Intento de inicio de sesión con respuesta por ambos campos escritos');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciarSesion);

            Logger.pasoNumero(10);
            Logger.paso('Esperar a que se dispare la API, pudiendo ser correcto/incorrecto. Esta vez correcto');
            cy.wait('@apiLogin').then((interception) => {
            
            /* Prueba de obtener todas api
            cy.wait('@todasLasPost').then((interception) => {
                Logger.subVerificacion('URL REAL:', interception.request.url);
                Logger.subVerificacion('STATUS:', interception.response?.statusCode);
                Logger.subVerificacion('BODY:', interception.response?.body); */
            
                const statusC = interception.response.statusCode;
                const contenido = interception.response.body;

                Logger.subVerificacion('CODIGO RECUPERADO: ', statusC);
                Logger.subVerificacion('BODY RECUPERADO: ', contenido);

                //el 'expect(interception.response.statusCode).to.eq(200)' no devuelve true, mejor asignarlo
                




                Logger.subPaso('Si fue correcto el Login, devuelve 200. Sino, se cierra el Login');
                //el error tambien devuelve 200, redundante, hay que comparar el body si es null
                if (statusC === 200 && contenido.datosResult !== null) { //datosResult

                   Logger.error('Fallo de Test, porque no debería logearse.')

                } else {

                    Logger.subVerificacion('Login incorrecto');
                    Logger.subVerificacion('Error: ', contenido.mensajes[0].descripcionMensaje); //Mensaje es Array de 1 único Objeto
                    Logger.pasoNumero(11)
                    Logger.paso('Comprobar que se salta el mensaje de error')
                    LoginFunciones.verificarMensajeErrorAbierto(LoginElementos.login.ventanaErrorLogin);
                    Logger.verificacion('Saltó el mensaje de error.');
                    cy.wait(6000);

                    Logger.pasoNumero(12);
                    Logger.paso('Cerrar ventana Login');

                            Logger.subPaso('Comprobar que desaparece mensaje de error de Login porque se solapa.')
                            LoginFunciones.verificarMensajeErrorCerrado(LoginElementos.login.ventanaErrorLogin);
                            Logger.subVerificacion('Tarda como 7 segundos en desaparecer.')

                            Logger.subPaso('Cerrar la ventana de Login')
                            LoginFunciones.clickCerrarVentana();
                            Logger.verificacion('Se cerró la ventana');

                            Logger.subPaso('Comprobar que se cerró la ventana');
                            LoginFunciones.verificarVentanaLoginCerrada();
                            cy.wait(2000);
                            LoginFunciones.clickElemento(LoginElementos.login.bannerParaComprobarCierreVentana);
                            Logger.verificacion('Se cerró la ventana');

                } 

            })

    })
 
 
})






