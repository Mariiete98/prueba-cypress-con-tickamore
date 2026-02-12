import { InicioElementos } from "./inicio.elementos";

export class InicioFunciones{

    // Test Cookies 

    static verificarVentanaCookiesAbierta(){
        cy.get(InicioElementos.ventanaCookies.ventanaVisible).should('be.visible');
    }

    static verificarModalCargado(){
        cy.contains(InicioElementos.ventanaCookies.modal, 'Utilizamos cookies propias y opcionalmente').should('be.visible');;
    
    }

    static clickAceptarTodo(){
        //InicioElementos.ventanaCookies.botonAceptarTodo.should('be.visible').click({ force: true });
        //InicioElementos.ventanaCookies.botonAceptarTodo.should('be.visible').click({ force: true });
        // force true?
        cy.get(InicioElementos.ventanaCookies.botonAceptarTodo).contains('Aceptar todo y continuar').should('be.visible').click({ force: true }); 
    }
    static clickConfigurarCookies(){
        InicioElementos.ventanaCookies.botonConfigurarCookies.click();
        // force true?
    }
    static verificarSwitchDesactivado(){
        InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsSinMarcar.should('have.attr', 'aria-checked', 'false');
    }
    static clickSwitchActivar(){
        InicioElementos.ventanaCookies.switchCookiesGoogleAnalyticsSinMarcar.click();
        // force true?
    }
    static verificarSwitchActivado(elemento){
        elemento.should('have.attr', 'aria-checked', 'true');
    }
    static clickAceptarSeleccionYContinuar(){
        InicioElementos.ventanaCookies.botonAceptarSeleccionYContinuar.click();
        // force true?
    }
    static verificarVentanaCookiesCerrada(){
        //InicioElementos.ventanaCookies.ventanaVisible.should('not.be.visible');
        cy.get(InicioElementos.ventanaCookies.ventanaVisible).should('not.be.visible'); // Por si tarda
    }

    // Test Políticas y Aviso Legal

    static clickVisitarAvisoLegal(){
        InicioElementos.ventanaCookies.avisoLegal.click();
        // force true?
    }

    static clickVisitarPolitica(){
        InicioElementos.ventanaCookies.politica.click();
        // force true?
    }

    
    /*
    //Para todos los click:
    static clickElemento(elemento){
        elemento.should('be.visible').click({ force: true });
        // elemento.should('be.visible').click();
        // scrollIntoView si es tapado por algo
    }+/

    
    // Si aparece ventana de Windows:
    /*
    static verificarX(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
    */
  

}