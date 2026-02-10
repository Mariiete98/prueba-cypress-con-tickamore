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

    
    // Si aparece ventana de Windows:
    /*
    static verificarX(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }
    */
  

}