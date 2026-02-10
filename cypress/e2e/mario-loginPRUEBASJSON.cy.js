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


    it.only('TEST 3.1. Aceptar Cookies predeterminadas y abrir-cerrar Login', () => {

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

        Logger.pasoNumero(7);
        Logger.paso('Comprobar que se cerró la ventana');
        LoginFunciones.verificarVentanaLoginCerrada();
        cy.wait(2000);
        LoginFunciones.clickElemento(LoginElementos.login.bannerParaComprobarCierreVentana);
        Logger.verificacion('Se cerró la ventana');

    })

   
    it.only('TEST 3.2. Aceptar Cookies predeterminadas y abrir Login. Campo usuario vacío', () => {

            // Test Cookies correcto:
            Logger.pasoNumero(1);
            Logger.paso('Se carga la URL.');
            cy.visit(url);
            console.log(passError);

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
            Logger.paso('Click NO escribe en el campo Usuario');
            LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);
            cy.wait(1000);

            Logger.pasoNumero(6);
            Logger.paso('Contraseña escrita sin Usuario. Click en el campo Contraseña');
            LoginFunciones.clickElemento(LoginElementos.login.campoContrasena);
            cy.wait(1000);

                Logger.subPaso('Escribirse Contraseña');

                //Probar que el elemento campo pass sea visible y .type o .invoke con una de las 2 opciones de arriba
                
                cy.wait(1000);

                Logger.subPaso('Salta a campo Usuario');
                LoginFunciones.clickElemento(LoginElementos.login.campoUsuario);

                Logger.subPaso('Comprueba que no hay símbolo de campo vacío en Contraseña');
                LoginFunciones.verificarCampoLleno(LoginElementos.login.botonContrasenaVacia);
                Logger.subVerificacion('Se ha escrito la contraseña');

                Logger.subPaso('Comprueba que sí hay símbolo de campo vacío en Usuario');
                LoginFunciones.verificarCampoVacio(LoginElementos.login.botonUsuarioVacio);
                Logger.subVerificacion('No se ha escrito el Usuario');

            Logger.pasoNumero(7);
            Logger.paso('Comprueba la Constraseña sin enmascarar');
            LoginFunciones.clickElemento(LoginElementos.login.botonVerContrasenaOculta);
            cy.wait(1000);
                Logger.subPaso('Vuelve a enmascarar la Contraseña');
                LoginFunciones.clickElemento(LoginElementos.login.botonOcultarContrasenaDescubierta);
            
            Logger.pasoNumero(8);
            Logger.paso('Intento de inicio de sesión sin respuesta por Usuario vacío');
            LoginFunciones.clickElemento(LoginElementos.login.botonIniciarSesion);
            Logger.verificacion('No se inició sesión.');
            cy.wait(1000);

            LoginFunciones.clickElemento(LoginElementos.login.botonCerrarVentanaLogin);
            cy.wait(1000);
            LoginFunciones.verificarVentanaLoginCerrada();
            cy.wait(2000);
            LoginFunciones.clickElemento(LoginElementos.login.bannerParaComprobarCierreVentana);
            
    })

    it('TEST 3.3. Aceptar Cookies predeterminadas y abrir Login. Campo contraseña vacío', () => {
     
    })

    it('TEST 3.4. Aceptar Cookies predeterminadas y abrir Login. Ambos campos vacíos', () => {
       
    })
   
    it('TEST 3.5. Aceptar Cookies predeterminadas y abrir Login correcto', () => {
        
    })
    it('TEST 3.6. Aceptar Cookies predeterminadas y probar Login incorrecto', () => {
        
    })

    
})






