export class InicioElementos{

    static get ventanaCookies(){
        return {
            get ventanaVisible() {
                return cy.get('#cookies .modal-dialog.modal-lg');
            },

            get avisoLegal() {
                return cy.contains('a', 'Aviso Legal')
            },
         
            get politica() {
                return cy.contains('a', 'Política de cookies')
            },

            get botonAceptarTodo() {
                return cy.get('button.btn.btn-custom-primary').contains('Aceptar todo y continuar');
            },
            get botonConfigurarCookies() {
                return cy.get('button.btn btn-outline-secondary ng-star-inserted').contains('Configurar cookies');
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
            }
        }
    }





}