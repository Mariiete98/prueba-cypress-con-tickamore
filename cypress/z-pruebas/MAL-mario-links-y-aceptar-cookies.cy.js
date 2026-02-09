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

  it('TEST 1. Probar ver Aviso Legal y Aceptar todo.', () => {
    Logger.pasoNumero(1);
    Logger.paso('Se carga la URL.');
    cy.visit(InicioData.url.inicio);

    cy.allure().step('Visitar Aviso Legal', () => {
      Logger.pasoNumero(2);
      Logger.paso('Debe aparecer la ventana emergente de Cookies');
     
      Cypress.Promise.try(() => {
          return InicioFunciones.verificarVentanaCookiesAbierta();
      }).then(() => {

          Logger.pasoNumero(3);
          Logger.paso('Debe visitar el link Aviso Legal');

          Cypress.Promise.try(() => {
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.avisoLegal);
            cy.url().should('include', InicioData.url.avisoLegal);
            cy.wait(2000)
          }).then(() => {

            Logger.pasoNumero(4);
            Logger.paso('Debe retroceder a TickAmore');
            cy.wait(2000)

            Cypress.Promise.try(() => {
                
                cy.go('back');
                cy.url().should('include', InicioData.url.inicio);

            }).then(() => {




            }).catch(() => {
              Logger.error('Error al retroceder a TickAmore');
            });


          }).catch(() => {
            Logger.error('Error al visitar el link de Aviso Legal');
          });

      })
      .catch(() => {
          Logger.error('Error al verificar la ventana de cookies');
      });











      Cypress.Promise.try(() => {
          return InicioFunciones.verificarVentanaCookiesAbierta();
      }).then(() => {
          Logger.pasoNumero(3);
          Logger.paso('Aceptamos las Cookies predeterminadas');
          InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

          Logger-pasonumero(4);
          Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
          InicioFunciones.verificarVentanaCookiesCerrada();
          cy.wait(2000)

      })
      .catch(() => {
          Logger.error('Error al verificar la ventana de cookies');
      });

    });

  })








})