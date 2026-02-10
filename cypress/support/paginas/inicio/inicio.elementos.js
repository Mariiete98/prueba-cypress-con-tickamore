export class InicioElementos{

    static get ventanaCookies(){
        return {

            // Test Cookies

            get ventanaVisible() {
                return cy.get('#cookies .modal-dialog.modal-lg');
            },
            get botonAceptarTodo() {
                //return cy.get('button.btn.btn-custom-primary').contains('Aceptar todo y continuar');
                //Con el hijo también funciona:
                return cy.get('.modal-footer > .btn-custom-primary').contains('Aceptar todo y continuar');
            },
            get botonConfigurarCookies() {
                return cy.get('button.btn.btn-outline-secondary.ng-star-inserted').contains('Configurar cookies');
            },
            get switchCookiesAspNetSessionIdMarcado() {
                return cy.get('button.mdc-switch.mdc-switch--selected.mdc-switch--checked.mdc-switch--disabled#mat-mdc-slide-toggle-1-button');
            },
            get switchCookiesGoogleAnalyticsSinMarcar() {
                return cy.get('button.mdc-switch.mdc-switch--unselected#mat-mdc-slide-toggle-2-button');
            },
            get switchCookiesGoogleAnalyticsMarcado() {
                return cy.get('button.mdc-switch.mdc-switch--selected.mdc-switch--checked#mat-mdc-slide-toggle-2-button');
            },
            get botonAceptarSeleccionYContinuar() {
                return cy.get('button.btn.btn-outline-secondary.ng-star-inserted').contains('Aceptar selección y continuar');
            },

            // Test Politicas y Aviso Legal

            get avisoLegal() {
                return cy.contains('a', 'Aviso Legal');
            },
            get politica() {
                //return cy.contains('a', 'Política de cookies');   -- No funciona, selecciona del footer
                //Con el hijo funciona:
                return cy.get('.modal-body > *').contains('Política de cookies');
            }

        }
    }

}