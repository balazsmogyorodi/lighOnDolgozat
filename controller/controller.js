import Modell from "../modell/modell.js";
import JatekTer from "../view/jatekTer.js";
import UjJatek from "../view/ujJatek.js";


class Controller{
    #adatok;
    #articleElem;
    #navElem;



    constructor(szoloElem, navElem){
        const model = new Modell();
        this.#adatok = model.getAdatok();
        this.#articleElem = szoloElem
        new JatekTer(this.#adatok, this.#articleElem);
        this.#navElem = navElem;
        new UjJatek(this.#navElem);
        $(window).on("lampa_kapcsolas", (event) =>{
            model.setAdat(event.detail);
            model.setKorulotte(event.detail);
            this.#adatok = model.getAdatok();
            this.#articleElem.empty();
            new JatekTer(this.#adatok, this.#articleElem);
        });
        $(window).on("ujJatek", () =>{
            console.log("uj");
            model.adatokKeverese();
            this.#adatok = model.getAdatok();
            this.#articleElem.empty();
            new JatekTer(this.#adatok, this.#articleElem);
        })
    }
}

export default Controller;