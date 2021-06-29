class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada= tipoEntrada;
        this._marca = marca;
    }

    get TipoEntrada(){
        return this._tipoEntrada;
    }
    set TipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get Marca(){
        return this._marca;
    }
    set Marca(marca){
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{

}
class Teclado extends DispositivoEntrada{
    
}