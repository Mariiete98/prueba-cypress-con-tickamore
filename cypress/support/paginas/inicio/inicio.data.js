export class InicioData{

    static get url(){
        return {
            get inicio() {
                return 'https://tickamore.webventa.iacposdes.com/tickamore';
            },
            get avisoLegal() {
                return cy.contains('a', 'Aviso Legal').invoke('attr', 'href').then((href) => {
                    const enlace = href;
                    cy.log(enlace);
                });
            },
            get politica() {
                 return cy.contains('a', 'Política de cookies').invoke('attr', 'href').then((href) => {
                    const enlace = href;
                    cy.log(enlace);
                });

            },

         
        }
    }

    static get titulos(){
        return {
            cookies: "Aceptar Cookies",
            vercookies: "Ver links y Aceptar Cookies",
        };
    }



}