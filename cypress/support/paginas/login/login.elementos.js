export class LoginElementos{

     static get login(){
        return { 

            // Test Login

            get botonIniciar() {
                // role button, aria-label Iniciar, class li.mat-mdc-tooltip-trigger.nav-item.user.separator.ml-2.inmenu.custom-focus.ng-star-inserted
                return cy.contains('li[aria-label="Iniciar"]', 'Iniciar');
            },

            get ventanaLoginVisible() {
                return cy.get('div#login .col-md-6.col-sm-12');
            },

            get tituloVentanaLogin() {
                return cy.contains('h5.login-window-title', 'Iniciar Sesión');
            },

            get botonCerrarVentanaLogin() {
                return cy.get('button[aria-label="Cerrar"].');
                // .mat-mdc-tooltip-trigger.btn-close
            },

            get campoUsuario() {
                return cy.get('div.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c1205077789-0.mdc-text-field--outlined')
                // .mat-mdc-form-field-flex.ng-tns-c1205077789-0
            },

            get campoContrasena() {
                return cy.get('div.mat-mdc-text-field-wrapper.mdc-text-field.ng-tns-c1205077789-1.mdc-text-field--outlined')
                // .mat-mdc-form-field-flex.ng-tns-c1205077789-1
            },

            get botonUsuarioVacio() {
                return cy.get('input[formcontrolname="username"]').closest('.mat-mdc-form-field').find('button[aria-label="alert icon with tooltip"]')

            },

            get botonContrasenaVacia() {
                return cy.get('input[formcontrolname="password"]').closest('.mat-mdc-form-field').find('button[aria-label="alert icon with tooltip"]')
            },

            get botonVerContrasenaOculta() {
                return cy.get('button[aria-label="Mostrar contraseña"]');
                // return cy.get('button[aria-pressed="true"]');
            },

            get botonOcultarContrasenaDescubierta() {
                return cy.get('button[aria-label="Ocultar contraseña"]');
                // return cy.get('button[aria-pressed="false"]');
            },

            get botonIniciarSesion() {
                return cy.get('button').contains('Iniciar Sesión');
                // .btn.btn-custom-primary.col-12.btn-height
                // type submit
                
            },

            get ventanaErrorLogin() {
                return cy.get('div#toast-container > div');
            },

            get nombreUsuario() {
                return cy.get('i.bi.bi-person-fill.size-cesta text-black')
                // el nombre del usuario está en un ::before...
            },


            // Test Cambio Contraseña

            get botonOlvidadoContrasena() {
                return cy.get('button').contains('¿Has olvidado tu contraseña?');
                // .no-button.link.text-decoration-underline
            },


            // Test Registro

            get botonRegistrar() {
                return cy.get('button').contains('Registrar nuevo usuario');
                // .btn.btn-custom-primary.col-12.btn-height
                // type button
            }

        }

    }


}


/* Para encontrar selector del botón de aviso de campo vacío:

div class mat-mdc-form-field-infix.ng-tns-c1205077789-0
    input autocomplete="off" formcontrolname="username" type="password"

    div class ng-tns-c1205077789-0
        div class error-icon ng-star-inserted
        <button _ngcontent-ng-c1370199521 mat-icon-button= aria-label="alert icon with tooltip" class="mat-mdc-tooltip-trigger disable mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-ripple-loader-class-name="mat-mdc-button-ripple" mat-ripple-loader-centered="" aria-describedby="cdk-describedby-message-ng-1-5" cdk-describedby-host="ng-1"></button>



div class mat-mdc-form-field-infix.ng-tns-c1205077789-1
    input autocomplete="new-password" formcontrolname="password" type="password"

    div class ng-tns-c1205077789-1
        div class error-icon ng-star-inserted
        <button _ngcontent-ng-c1370199521= mat-icon-button aria-label="alert icon with tooltip" class="mat-mdc-tooltip-trigger disable mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base" mat-ripple-loader-class-name="mat-mdc-button-ripple" mat-ripple-loader-centered="" aria-describedby="cdk-describedby-message-ng-1-5" cdk-describedby-host="ng-1"></button>

*/

/* Para encontrar selector de alerta login incorrecto:

cy.get('div#toast-container > div');

div id toast-container class toast-top-right.toast-container
    div class ng-tns-c2308121496-20 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error
*/