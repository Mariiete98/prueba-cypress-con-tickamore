import '@shelex/cypress-allure-plugin';
import { InicioData } from '../support/paginas/inicio/inicio.data';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { InicioElementos } from '../support/paginas/inicio/inicio.elementos';


describe(InicioData.titulos.login, () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('TEST 3.1. Aceptar Cookies predeterminadas y probar Login correcto', () => {

        // Test Cookies correcto:
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(InicioData.url.inicio);

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

  
    })

it('TEST 3.2. Aceptar Cookies predeterminadas y probar Login incorrecto', () => {
        Logger.pasoNumero(1);
        Logger.paso('Se carga la URL.');
        cy.visit(InicioData.url.inicio);

        Logger.pasoNumero(2);
        Logger.paso('Aceptar Cookies. Debe aparecer la ventana emergente de Cookies');
        InicioFunciones.verificarVentanaCookiesAbierta();
        cy.wait(1000);
        Logger.pasoNumero(3);
        Logger.paso('Aceptamos las Cookies predeterminadas');
        //InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
        InicioFunciones.clickAceptarTodo(); 
        // Ahora funciona por el forced to click
        
        Logger.pasoNumero(4);
        Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
        InicioFunciones.verificarVentanaCookiesCerrada();
        // cy.wait(2000)
        // Es mejor timeout

        //Logger.error('Error al verificar la ventana de cookies');
    })

})