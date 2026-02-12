import '@shelex/cypress-allure-plugin';
import { InicioData } from '../support/paginas/inicio/inicio.data';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { InicioElementos } from '../support/paginas/inicio/inicio.elementos';
import { LoginFunciones } from '../support/paginas/login/login.funciones';


describe(InicioData.titulos.cookies, () => {
    let url;

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();

        cy.fixture('url').then((data) => {
            url = data.url;
        });
    });


    it.only('TEST 1.1. Probar confirmación de Cookies. Aceptar todo.', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(url);
        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();
   
        Logger.pasoNumero(3);
        InicioFunciones.verificarModalCargado();
        cy.wait(1000) // CON WAIT SI QUE FUNCIONA
        Logger.paso('Aceptamos las Cookies predeterminadas');
        InicioFunciones.clickAceptarTodo(); 
        // Ahora funciona por el forced to click
        
        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();

        //Logger.error('Error al verificar la ventana de cookies');
    })


    it.only('TEST 1.2. Probar confirmación de Cookies. Configurar Cookies. 1 switch activado. Aceptar todo y continuar', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(url);

        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();
        
        Logger.pasoNumero(3);
        Logger.paso('Entramos en Configurar Cookies');
        InicioFunciones.clickConfigurarCookies();
        //cy.wait(2000)
        // Es mejor timeout

        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que el primer switch está activado automáticamente');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

        Logger.pasoNumero(5);
        Logger.paso('Comprobamos que el segundo switch está desactivado');
        InicioFunciones.verificarSwitchDesactivado();
        cy.wait(1000) // CON WAIT SI QUE FUNCIONA
        Logger.pasoNumero(6);
        Logger.paso('Aceptamos las Cookies predeterminadas');
        InicioFunciones.clickAceptarTodo(); 
        Logger.pasoNumero(7);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();

        //Logger.error('Error al verificar la ventana de cookies');
    })

    it('TEST 1.3. Probar confirmación de Cookies. Configurar Cookies. 2 switch activados. Aceptar todo y continuar', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(url);
        //cy.wait(2000)

        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();

        Logger.pasoNumero(3);
        Logger.paso('Entramos en Configurar Cookies');
        InicioFunciones.clickConfigurarCookies();
        //cy.wait(2000)

        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que el primer switch está activado automáticamente');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

        Logger.pasoNumero(5);
        Logger.paso('Comprobamos que se hace clcik al segundo switch');
        InicioFunciones.clickSwitchActivar(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsSinMarcar);

        Logger.pasoNumero(6);
        Logger.paso('Comprobamos que el segundo switch también está activado');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsMarcado)
        cy.wait(1000) // CON WAIT SI QUE FUNCIONA
        Logger.pasoNumero(7);
        Logger.paso('Aceptamos las Cookies predeterminadas');
        InicioFunciones.clickAceptarTodo(); 

        Logger.pasoNumero(8);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();

        //Logger.error('Error al verificar la ventana de cookies');
    })


    it('TEST 1.4. Probar confirmación de Cookies. Configurar Cookies. 1 switch activado. Aceptar selección y continuar', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(url);

        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();

        Logger.pasoNumero(3);
        Logger.paso('Entramos en Configurar Cookies');
        InicioFunciones.clickConfigurarCookies();
        //cy.wait(2000);

        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que el primer switch está activado automáticamente');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

        Logger.pasoNumero(5);
        Logger.paso('Comprobamos que el segundo switch está desactivado');
        InicioFunciones.verificarSwitchDesactivado();
        //cy.wait(500);

        Logger.pasoNumero(6);
        Logger.paso('Aceptación Selectiva (sólo está seleccionado el primer switch automáticamente');
        InicioFunciones.clickAceptarSeleccionYContinuar();

        Logger.pasoNumero(7);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();

        //Logger.error('Error al verificar la ventana de cookies');

    })

    it('TEST 1.5. Probar confirmación de Cookies. Configurar Cookies. 2 switch activados. Aceptar selección y continuar', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(url);
        Logger.verificacion('Se entró en TickAmore')

        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();
        Logger.verificacion('Se cargó Cookies')

        Logger.pasoNumero(3);
        Logger.paso('Entramos en Configurar Cookies');
        InicioFunciones.clickConfigurarCookies();
        Logger.verificacion('Se entró en Configurar Cookies')
        //cy.wait(2000);

        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que el primer switch está activado automáticamente');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)
        Logger.verificacion('Está activado switch 1')

        Logger.pasoNumero(5);
        Logger.paso('Comprobamos que se hace click al segundo switch');
        InicioFunciones.clickSwitchActivar(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsSinMarcar);

        Logger.pasoNumero(6);
        Logger.paso('Comprobamos que el segundo switch también está activado');
        InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsMarcado)
        Logger.verificacion('Está activado switch 2')

        Logger.pasoNumero(7);
        Logger.paso('Aceptación Selectiva (pero están ambos switch seleccionados');
        InicioFunciones.clickAceptarSeleccionYContinuar();
        Logger.verificacion('Se aceptaron las Cookies');

        Logger.pasoNumero(8);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();
        Logger.verificacion('Se cerró las Cookies')

        //Logger.error('Error al verificar la ventana de cookies');
    
      });

  })

