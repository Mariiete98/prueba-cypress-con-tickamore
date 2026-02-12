import '@shelex/cypress-allure-plugin';
import { InicioData } from '../support/paginas/inicio/inicio.data';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { InicioElementos } from '../support/paginas/inicio/inicio.elementos';


describe(InicioData.titulos.vercookies, () => {

  let url;

  beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
  
        cy.fixture('url').then((data) => {
            url = data.url;
        });
  });

  it('TEST 2.1. Probar ver Aviso Legal y Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(url);

    Logger.pasoNumero(2);
    Logger.paso('Visitar Aviso Legal. Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(3);
    Logger.paso('Debe visitar el link Aviso Legal');
    //Se tiene que eliminar el target para que abra en misma pestaña, Cypress no abre dos
    InicioElementos.ventanaCookies.avisoLegal.invoke('removeAttr', 'target').click()
    
    Logger.pasoNumero(4);
    Logger.paso('Debe comprobar que se ubica en la url de Aviso Legal');
    cy.url().should('include', InicioData.url.avisoLegal);
    //cy.wait(2000);

    Logger.pasoNumero(5);
    Logger.paso('Debe retroceder a TickAmore');
    
    cy.go('back');
    cy.wait(2000);
    cy.url().should('include', url);

    Logger.pasoNumero(6);
    Logger.paso('Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();
    cy.wait(1000);

    Logger.pasoNumero(7);
    Logger.paso('Aceptamos las Cookies predeterminadas');
    //InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
    InicioFunciones.clickAceptarTodo(); // con forced to

    Logger.pasoNumero(8);
    Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
    InicioFunciones.verificarVentanaCookiesCerrada();
  })






  it('TEST 2.2. Probar ver Política de Cookies y Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(url);
    cy.wait(2000);

    Logger.pasoNumero(2);
    Logger.paso('Visitar Política de Cookies. Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(3);
    Logger.paso('Debe visitar el link Política de Cookies');
    //Se tiene que eliminar el target para que abra en misma pestaña, Cypress no abre dos
    InicioElementos.ventanaCookies.politica.invoke('removeAttr', 'target').click()
    
    Logger.pasoNumero(4);
    Logger.paso('Debe comprobar que se ubica en la url de Política de Cookies');
    cy.url().should('include', InicioData.url.politica);

    Logger.pasoNumero(5);
    Logger.paso('Debe retroceder a TickAmore');
    cy.go('back');
    cy.url().should('include', url);

    Logger.pasoNumero(6);
    cy.wait(2000);
    Logger.paso('Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();
    cy.wait(1000);

    Logger.pasoNumero(7);
    Logger.paso('Aceptamos las Cookies predeterminadas');
    //InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
    InicioFunciones.clickAceptarTodo(); // con forced to

    Logger.pasoNumero(8);
    Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
    InicioFunciones.verificarVentanaCookiesCerrada();
  })



})

// ¿Cómo uso los Logger?

