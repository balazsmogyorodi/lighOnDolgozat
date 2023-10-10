import { lampaAllapotok } from "../modell/adatok.js";

class Modell {
    #adatok;
    constructor() {
        this.#adatok = lampaAllapotok;


    }

    getAdatok() {
        return this.#adatok;
    }

    setAdat(id){
        this.#adatok[id] += 1;
        if (this.#adatok[id] > 1) {
            this.#adatok[id] = 0;
        }
    }




}

export default Modell;