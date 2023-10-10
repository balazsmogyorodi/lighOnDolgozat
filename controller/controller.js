import Modell from "../modell/modell.js";
import JatekTer from "../view/jatekTer.js";


class Controller{
    #adatok;
    #szuloElem

    constructor(szoloElem){
        const model = new Modell();
        this.#adatok = model.getAdatok();
        this.#szuloElem = szoloElem
        new JatekTer(this.#adatok, this.#szuloElem);

        $(window).on("lampa_kapcsolas", (event) =>{
            model.setAdat(event.detail);
            this.#adatok = model.getAdatok();
            this.#szuloElem.empty();
            new JatekTer(this.#adatok, this.#szuloElem);
        });




    }
    

 


    



}

export default Controller;