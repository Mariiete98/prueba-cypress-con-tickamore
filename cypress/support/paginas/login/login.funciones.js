import { Logger } from "../../utilidades/logger";
import { LoginElementos } from "./login.elementos";


export class LoginFunciones{

    // Test Login

    static clickAbrirLogin(){
        LoginElementos.login.botonIniciar.click();
        // force true?
    }

    static verificarVentanaLoginAbierta(){
        LoginElementos.login.ventanaLoginVisible.should('be.visible');
    }

    static verificarVentanaConTitulo(){
        LoginElementos.login.tituloVentanaLogin.should('be.visible');
    }

    static clickCerrarVentana(){
        LoginElementos.login.botonCerrarVentanaLogin.click();
        // force true?
    }

    static verificarVentanaLoginCerrada(){
        LoginElementos.login.ventanaLoginVisible.should('not.be.visible');
        // Si tarda usar { timeout: 10000 }).should('not.exist');
    }

    static clickBannerVerificaCierre(){
        LoginElementos.login.bannerParaComprobarCierreVentana.click();
        // force true?
    }






    static clickUsuario(){
        LoginElementos.login.campoUsuario.click();
        // force true?
    }

    static clickContraseña(){
        LoginElementos.login.campoContrasena.click();
        // force true?
    }



    static clickVerContrasena(){
        LoginElementos.login.botonVerContrasenaOculta.click();
        // force true?
    }
    static clickOcultarContrasena(){
        LoginElementos.login.botonOcultarContrasenaDescubierta.click();
        // force true?
    }
    static clickIniciarSesion(){
        LoginElementos.login.botonIniciarSesion.click();
        // force true?
    }



    static insertarUsuario(user){
        //LoginElements.obtenerCampos.username.type(username)
        // falla que a veces inserta y otras no, usar:
        //LoginElements.obtenerCampos.username.invoke('val', username)
        LoginElementos.login.campoUsuario.should('be.visible').clear().type(user);
    }
    static insertarPassword(pass){
        //LoginElements.obtenerCampos.password.type(password)
        // falla que a veces inserta y otras no, usar:
        //LoginElements.obtenerCampos.password.invoke('val', password)
        LoginElementos.login.campoContrasena.should('be.visible').clear().type(pass);
        
    }




    static verificarCampoLleno(botonVacio){
        botonVacio.should('not.exist');
    }

    static verificarCampoVacio(botonVacio){
        botonVacio.should('be.visible');
    }


    /* :: after?
    static verificarNombreMenu(botonMenu){
        botonMenu.should('be.visible');
    }
    */

    static verificarMensajeErrorAbierto(mensajeError) {
        mensajeError.should('exist').should('be.visible');
    }

    static verificarMensajeErrorCerrado(mensajeError) {
        mensajeError.should('not.exist');
        // sin not.be.visible, porque como ya no existe, no hay comprobacion
    }


    

    














    // Test Cambiar Contrasena

    static clickOlvidada(){
        LoginElementos.login.botonOlvidadoContrasena.click();
        // force true?
    }

    // Test Registrar Usuario

    static clickRegistro(){
        LoginElementos.login.botonRegistrar.click();
        // force true?
    }

    // Test Cerrar Sesion 

    static clickRegistro(){
        LoginElementos.login.botonRegistrar.click();
        // force true?
    }





    //Para todos los click:
    static clickElemento(elemento){
        elemento.should('be.visible').click();
        // force true?
        // scrollIntoView si es tapado por algo
    }

    //Para login automático
    static loginCompleto(username, password){
        /*
        Logger.subStep('Insert username')
        this.insertarUsuario(username)
        Logger.subStep('Insert password')
        this.insertarPassword(password)
        Logger.subStep('Click on login button')
        this.clickIniciarSesion()
        */
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