class JatekMezo{
    #adat;
    #divElem;
    #id;
    constructor(adat, szuloElem, id){
        this.#adat = adat;
        szuloElem.append("<div></div>");
        this.#divElem = szuloElem.children("div:last-child");
        this.#id = id;
        this.#elemAllapotEllenorzo();
        this.#divElem.on("click", () =>{
            this.#trigger();
        })
        
    }

    #elemAllapotEllenorzo(){
        if (this.#adat == 1){
            this.#divElem.addClass("bekapcs")
        }
         else {
            this.#divElem.addClass("kikapcs")
        }
    }



    #trigger(){
        window.dispatchEvent(new CustomEvent("lampa_kapcsolas",{detail: this.#id}));
    }

}
export default JatekMezo;