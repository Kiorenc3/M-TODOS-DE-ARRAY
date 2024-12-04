const carrito = [
    {nombre: "lentejas", precio: 2000, cantidad: 2},
    {nombre: "arroz", precio: 2500, cantidad: 3},
    {nombre: "frijoles", precio: 1500, cantidad: 1},
    {nombre: "azucar", precio: 2200, cantidad: 2},
    {nombre: "sal", precio: 2000, cantidad: 3}
];

const calculartotal = (productos) => {
    return productos.reduce((total,producto) => {
        const subtotal = producto.precio * producto.cantidad;
        return total + subtotal;
    }, 0);
};

const total = calculartotal(carrito);
console.log("productos en carrito:",  carrito);
console.log("total a pagar:$" + total);

