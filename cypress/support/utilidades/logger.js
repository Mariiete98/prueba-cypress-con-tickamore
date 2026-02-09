export class Logger {
    static pasoNumero(numero){
        const text = `Step # ${numero}`
        cy.log(text);
        cy.allure().step(text)
    }

    static paso(descripcion){
        const text = `Step - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verificacion(descripcion){
        const text = `Verification - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subPaso(descripcion){
        const text = `Substep - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerificacion(descripcion){
        const text = `SubVerification - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }

    
    static error(descripcion){
        const text = `${descripcion}`;

        // Log normal
        cy.log(text);

        // Log en Allure
        cy.allure().step(text);

        // Que falle el test
        throw new Error(text);
    }


}