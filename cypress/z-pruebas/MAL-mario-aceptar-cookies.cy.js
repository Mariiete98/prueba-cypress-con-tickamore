
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
    cy.visit(InicioData.url.inicio);

    cy.allure().step('Aceptar Cookies', () => {
      Logger.pasoNumero(2);
      Logger.paso('Debe aparecer la ventana emergente de Cookies');

      
      InicioFunciones.verificarVentanaCookiesAbierta();
      
      cy.then(() => {
          Logger.pasoNumero(3);
          Logger.paso('Aceptamos las Cookies predeterminadas');
          InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);
      });
      
      cy.then(() => {
          Logger.pasonumero(4);
          Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
          InicioFunciones.verificarVentanaCookiesCerrada();
          cy.wait(2000)

      })
      .catch(() => {
          Logger.error('Error al verificar la ventana de cookies');
      });


    });

  })


  it('TEST 2. Probar confirmación de Cookies. Configurar Cookies. 1 switch activado. Aceptar todo y continuar', () => {
      Logger.pasoNumero(1);
      Logger.paso('Se carga la URL.');
      cy.visit(InicioData.url.inicio);

      cy.allure().step('Aceptar Cookies', () => {
        Logger.pasoNumero(2);
        Logger.paso('Debe aparecer la ventana emergente de Cookies');

        Cypress.Promise.try(() => {
            return InicioFunciones.verificarVentanaCookiesAbierta();
        })
        .then(() => {

            Logger.pasoNumero(3);
            Logger.paso('Entramos en Configurar Cookies');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonConfigurarCookies);
            cy.wait(2000)

            Logger.pasonumero(4);
            Logger.paso('Comprobamos que el primer switch está activado automáticamente');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

            Logger.pasonumero(5);
            Logger.paso('Comprobamos que el segundo switch está desactivado');
            InicioFunciones.verificarSwitchDesactivado;

            Logger.pasoNumero(6);
            Logger.paso('Aceptamos las Cookies predeterminadas');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

            Logger.pasonumero(7);
            Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
            InicioFunciones.verificarVentanaCookiesCerrada();

        })
        .catch(() => {
            Logger.error('Error al verificar la ventana de cookies');
        });


      });

  })

  it('TEST 3. Probar confirmación de Cookies. Configurar Cookies. 2 switch activados. Aceptar todo y continuar', () => {
      Logger.pasoNumero(1);
      Logger.paso('Se carga la URL.');
      cy.visit(InicioData.url.inicio);

      cy.allure().step('Aceptar Cookies', () => {
        Logger.pasoNumero(2);
        Logger.paso('Debe aparecer la ventana emergente de Cookies');

        Cypress.Promise.try(() => {
            return InicioFunciones.verificarVentanaCookiesAbierta();
        })
        .then(() => {

            Logger.pasoNumero(3);
            Logger.paso('Entramos en Configurar Cookies');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonConfigurarCookies);
            cy.wait(2000)

            Logger.pasonumero(4);
            Logger.paso('Comprobamos que el primer switch está activado automáticamente');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

            Logger.pasonumero(5);
            Logger.paso('Comprobamos que el segundo switch también está activado');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsMarcado)

            Logger.pasoNumero(6);
            Logger.paso('Aceptamos las Cookies predeterminadas');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarTodo);

            Logger.pasonumero(7);
            Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
            InicioFunciones.verificarVentanaCookiesCerrada();

        })
        .catch(() => {
            Logger.error('Error al verificar la ventana de cookies');
        });


      });

  })


  it('TEST 4. Probar confirmación de Cookies. Configurar Cookies. 1 switch activado. Aceptar selección y continuar', () => {
      Logger.pasoNumero(1);
      Logger.paso('Se carga la URL.');
      cy.visit(InicioData.url.inicio);

      cy.allure().step('Aceptar Cookies', () => {
        Logger.pasoNumero(2);
        Logger.paso('Debe aparecer la ventana emergente de Cookies');

        Cypress.Promise.try(() => {
            return InicioFunciones.verificarVentanaCookiesAbierta();
        })
        .then(() => {

            Logger.pasoNumero(3);
            Logger.paso('Entramos en Configurar Cookies');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonConfigurarCookies);
            cy.wait(2000);

            Logger.pasonumero(4);
            Logger.paso('Comprobamos que el primer switch está activado automáticamente');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)

            Logger.pasonumero(5);
            Logger.paso('Comprobamos que el segundo switch está desactivado');
            InicioFunciones.verificarSwitchDesactivado;

            Logger.pasoNumero(5);
            Logger.paso('Aceptación Selectiva (sólo está seleccionado el primer switch automáticamente');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarSeleccionYContinuar);

            Logger.pasonumero(6);
            Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
            InicioFunciones.verificarVentanaCookiesCerrada();

        })
        .catch(() => {
            Logger.error('Error al verificar la ventana de cookies');
        });


      });

  })

  it('TEST 5. Probar confirmación de Cookies. Configurar Cookies. 2 switch activados. Aceptar selección y continuar', () => {
      Logger.pasoNumero(1);
      Logger.paso('Se carga la URL.');
      cy.visit(InicioData.url.inicio);
      Logger.verificacion('Se entró en TickAmore')

      cy.allure().step('Aceptar Cookies', () => {
        Logger.pasoNumero(2);
        Logger.paso('Debe aparecer la ventana emergente de Cookies');

        Cypress.Promise.try(() => {
            return InicioFunciones.verificarVentanaCookiesAbierta();
        })
        .then(() => {
            Logger.verificacion('Se cargó Cookies')
            Logger.pasoNumero(3);
            Logger.paso('Entramos en Configurar Cookies');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonConfigurarCookies);
            Logger.verificacion('Se entró en Configurar Cookies')
            cy.wait(2000);

            Logger.pasonumero(4);
            Logger.paso('Comprobamos que el primer switch está activado automáticamente');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesAspNetSessionIdMarcado)
            Logger.verificacion('Está activado switch 1')

            Logger.pasonumero(5);
            Logger.paso('Comprobamos que el segundo switch también está activado');
            InicioFunciones.verificarSwitchActivado(InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsMarcado)
            Logger.verificacion('Está activado switch 2')

            Logger.pasoNumero(5);
            Logger.paso('Aceptación Selectiva (pero están ambos switch seleccionados');
            InicioFunciones.clickElemento(InicioElementos.ventanaCookies.botonAceptarSeleccionYContinuar);
            Logger.verificacion('Se aceptaron las Cookies');

            Logger.pasonumero(6);
            Logger.paso('Comprobamos que se ha cerrado el recuadro de Cookies');
            InicioFunciones.verificarVentanaCookiesCerrada();
            Logger.verificacion('Se cerró las Cookies')

        })
        .catch(() => {
            Logger.error('Error al verificar la ventana de cookies');
        });

      });

  })

})