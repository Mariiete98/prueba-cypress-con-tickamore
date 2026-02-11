import '@shelex/cypress-allure-plugin';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { LoginFunciones } from '../support/paginas/login/login.funciones';
import { LoginElementos } from '../support/paginas/login/login.elementos';
import { LoginData } from '../support/paginas/login/login.data';


describe(LoginData.titulos.login, () => {

    // ¿Las quito?
    let url;

    // ¿OPTIMIZAR?
    let userCorrecto;
    let passCorrecto;
    let userIncorrecto;
    let passIncorrecto;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        
        // FALTA LINEA DONDE SE HA HARDCODEADO, USAR AQUI EL JSON

        //¿FUNCIONA LA URL?
        cy.fixture('url').then((data) => {
            url = data.url;
        }); 
        // FUNCIONA EL USUARIO?
        cy.fixture('login').then((dataUsu) => {
            userCorrecto = dataUsu.CORRECTO.user
            passCorrecto = dataUsu.CORRECTO.pass

            userIncorrecto = dataUsu.INCORRECTO.user
            passIncorrecto = dataUsu.INCORRECTO.pass
        })

    });


    it('TEST 4.1. Aceptar Cookies predeterminadas y abrir Login correcto con endpoint', () => {

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
            Logger.paso('Intento de inicio de sesión con respuesta por ambos campos escritos');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciarSesion);
            cy.wait(3000);

            Logger.pasoNumero(9)
            Logger.paso('Comprobar que se puede desplegar el botón con nombre de Usuario cargado')
            LoginFunciones.clickElemento(LoginElementos.login.botonConNombreUsuario);
            Logger.verificacion('Se inició sesión.');

            // Probar desplegable
           
            // Cierre de sesión ¿API?


    })





    it('TEST 4.2. Aceptar Cookies predeterminadas y probar Login incorrecto con endpoint', () => {
        
    })

    
})






