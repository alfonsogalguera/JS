class Producto{
    static contadorProductos = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get IdProducto(){
        return this._idProducto;
    }

    get Nombre(){
        return this._nombre;
    }
    set Nombre(Nombre){
        this._nombre = nombre;
    }

    get Precio(){
        return this._precio;
    }

    set Precio(precio){
        this._precio=precio;
    }
    toString(){
        return this._idProducto + ' ' + this._nombre + ' ' + this._precio;
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this.contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log('No se pueden agregar mas productos.')
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += _producto._precio;//TOTAL VENTA = TOTAL VENTA + PRODUCTO.PRECIO
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{'+producto.toString() + ' }';
        }
        console.log('Orden: '+ this._idOrden + ' Total: ' +this.calcularTotal + 'Productos: ' + productosOrden);
    }
}
let producto1 =  new Producto('Motita', 200);
let producto2 = new Producto('coquita', 500);
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();