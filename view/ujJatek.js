class UjJatek {
    #buttonElem;
    constructor(szuloElem){
        szuloElem.append(`<button>Új játék</button>`);
        this.#buttonElem = szuloElem.children("button");
        this.#buttonElem.on("click", () =>{
            this.#buttonTrigger();
        })
     





    }

    #buttonTrigger(){
        window.dispatchEvent(new CustomEvent("ujJatek"));
    }




}
export default UjJatek;