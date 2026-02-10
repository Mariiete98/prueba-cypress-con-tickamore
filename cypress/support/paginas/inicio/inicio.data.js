export class InicioData{

    static get url(){
        return {

            // En url.json
            /*
            get inicio() {
                return 'https://tickamore.webventa.iacposdes.com/tickamore';
            },*/

            get avisoLegal() {
                return 'https://www.realescuela.org/aviso-legal/';
            },

            get politica() {
                return 'https://www.realescuela.org/politica-de-cookies/';
            }
          
        }
    }

    static get titulos(){
        return {
            cookies: "Aceptar Cookies",
            vercookies: "Ver links y Aceptar Cookies",
        };
    }



}