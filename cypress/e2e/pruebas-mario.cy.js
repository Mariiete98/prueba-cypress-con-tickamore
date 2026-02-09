
import '@shelex/cypress-allure-plugin';
import { InicioData } from '../support/paginas/inicio/inicio.data';
import { Logger } from '../support/utilidades/logger';
import { InicioFunciones } from '../support/paginas/inicio/inicio.funciones';
import { InicioElementos } from '../support/paginas/inicio/inicio.elementos';


describe(InicioData.titulos.cookies, () => {

  beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
  });

  it.only('TEST 1. Probar confirmación de Cookies. Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(InicioData.url);

    cy.allure().step('Aceptar Cookies', () => {
      Logger.pasoNumero(2);
      Logger.paso('Debe aparecer la ventana emergente de Cookies');

      Cypress.Promise.try(() => {
          return InicioFunciones.verificarVentanaCookiesAbierta();
      })
      .then(() => {
          Logger.pasoNumero(3);
          Logger.paso('Aceptamos las Cookies predeterminadas');
          InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

          Logger-pasonumero(4);
          Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
          InicioFunciones.verificarVentanaCookiesCerrada();

      })
      .catch(() => {
          Logger.error('Error al verificar la ventana de cookies');
      });


    });

  })





/*

  it('Probar confirmación de Cookies. Configurar Cookies. Opcion 1 Session ID', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Probar confirmación de Cookies. Configurar Cookies. Opcion 2 Analytics', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Porbar confirmación de Cookies. Configurar Cookies. Ambas Opciones', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Porbar confirmación de Cookies. Configurar Cookies. Aceptar Todo', () => {
    cy.visit('https://example.cypress.io')
  })


*/

})