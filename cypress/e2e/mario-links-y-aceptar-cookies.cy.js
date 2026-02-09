import '@shelex/cypress-allure-plugin';
import { InicioData } from '../support/paginas/inicio/inicio.data';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { InicioElementos } from '../support/paginas/inicio/inicio.elementos';


describe(InicioData.titulos.vercookies, () => {

  beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
  });

  it('TEST 2.1. Probar ver Aviso Legal y Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(InicioData.url.inicio);

    Logger.pasoNumero(2);
    Logger.paso('Visitar Aviso Legal. Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(3);
    Logger.paso('Debe visitar el link Aviso Legal');
    //Se tiene que eliminar el target para que abra en mima pestaña, Cypress no abre dos
    InicioElementos.ventanaCookies.avisoLegal.invoke('removeAttr', 'target').click()
    
    Logger.pasoNumero(4);
    Logger.paso('Debe comprobar que se ubica en la url de Aviso Legal');
    cy.url().should('include', InicioData.url.avisoLegal);

    Logger.pasoNumero(5);
    Logger.paso('Debe retroceder a TickAmore');
    cy.go('back');
    cy.url().should('include', InicioData.url.inicio);

    Logger.pasoNumero(6);
    Logger.paso('Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(7);
    Logger.paso('Aceptamos las Cookies predeterminadas');
    InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

    Logger.pasoNumero(8);
    Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
    InicioFunciones.verificarVentanaCookiesCerrada();
    cy.wait(5000)
  })






  it('TEST 2.2. Probar ver Política de Cookies y Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(InicioData.url.inicio);

    Logger.pasoNumero(2);
    Logger.paso('Visitar Política de Cookies. Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(3);
    Logger.paso('Debe visitar el link Política de Cookies');
    //Se tiene que eliminar el target para que abra en mima pestaña, Cypress no abre dos
    InicioElementos.ventanaCookies.politica.invoke('removeAttr', 'target').click()
    
    Logger.pasoNumero(4);
    Logger.paso('Debe comprobar que se ubica en la url de Política de Cookies');
    cy.url().should('include', InicioData.url.politica);

    Logger.pasoNumero(5);
    Logger.paso('Debe retroceder a TickAmore');
    cy.go('back');
    cy.url().should('include', InicioData.url.inicio);

    Logger.pasoNumero(6);
    Logger.paso('Debe aparecer la ventana emergente de Cookies');
    InicioFunciones.verificarVentanaCookiesAbierta();

    Logger.pasoNumero(7);
    Logger.paso('Aceptamos las Cookies predeterminadas');
    InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

    Logger.pasoNumero(8);
    Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
    InicioFunciones.verificarVentanaCookiesCerrada();
    cy.wait(5000)
  })



})

// ¿Cómo uso los Logger?

