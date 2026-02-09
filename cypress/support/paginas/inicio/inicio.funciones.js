import { InicioElementos } from "./inicio.elementos";

export class InicioFunciones{

    static verificarVentanaCookiesAbierta(){
        InicioElementos.ventanaCookies.ventanaVisible.should('be.visible');
    }

    static clickVisitarAvisoLegal(){
        InicioElementos.ventanaCookies.avisoLegal.click();
    }

    static clickVisitarPolitica(){
        InicioElementos.ventanaCookies.politica.click();
    }

    static clickAceptarTodo(){
        InicioElementos.ventanaCookies.botonAceptarTodo.click();
        // force true?
    }
    static clickConfigurarCookies(){
        InicioElementos.ventanaCookies.botonConfigurarCookies.click();
    }
    static verificarSwitchDesactivado(){
        InicioElementos.ventanaCookies.switchCookiesGoogleAnalytics.should('have.attr', 'aria-checked', 'false');
    }
    static clickSwitchActivar(){
        InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsSinMarcar.click();
    }
    static verificarSwitchActivado(elemento){
         elemento.should('have.attr', 'aria-checked', 'true');
    }
    static clickAceptarSeleccionYContinuar(){
         InicioElementos.ventanaCookies.botonAceptarSeleccionYContinuar.click();
    }

    static verificarVentanaCookiesCerrada(){
        InicioElementos.ventanaCookies.ventanaCookies.should('not.be.visible');
    }


    static clickElemento(elemento){
        elemento.should('be.visible').click();
        // force true?
        // scrollIntoView si es tapado por algo
    }


   
    

    // Si aparece ventana de Windows:
    /*
    static verificarX(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
    */
  

}