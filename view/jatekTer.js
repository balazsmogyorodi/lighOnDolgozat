import JatekMezo from "./jatekMezo.js";

class JatekTer{
    #adatok;
    #szuloElem;
    constructor(adatok, szuloElem){
        this.#adatok = adatok
        this.#szuloElem = szuloElem
        this.#init();

        

    }

    #init(){
        for (let index = 0; index < this.#adatok.length; index++) {
          new JatekMezo(this.#adatok[index], this.#szuloElem, index);
        }


    }



}
export default JatekTer;