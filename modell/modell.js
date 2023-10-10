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

    adatokKeverese(){
        for (let index = 0; index < this.#adatok.length; index++) {
           let esely = Math.floor(Math.random() * 10);
           if (esely < 5){
            this.#adatok[index] = 0;
           } else {
            this.#adatok[index] = 1;
           }
        }
    }

    setKorulotte(id){
       this.#bal(id);
       this.#jobb(id)
       this.#felette(id)
       this.#alatta(id)
    }

    #bal(id){
        id += -1;
        if (id < 0){
            return;
        } else{
            this.setAdat(id);
        }
    }
    #jobb(id){
        id += +1;
        if (id > this.#adatok.length-1){
            return;
        } else{
            this.setAdat(id);
        }
    }
    #felette(id){
        id += -this.#adatok.length/3
        if (id > this.#adatok.length-1){
            return;
        } else{
            this.setAdat(id);
        }

    }
    #alatta(id){
        id += +this.#adatok.length/3
        if (id > this.#adatok.length-1){
            return;
        } else{
            this.setAdat(id);
        }

    }




}

export default Modell;