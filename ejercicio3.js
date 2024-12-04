const inter=[
    {producto:"doritos", categoria:"papas fritas", monto:2400 },
    {producto:"detoditos", categoria:"papas fritas", monto:2800 },
    {producto:"manzana", categoria:"bebidas", monto:2500 },
    {producto:"colombiana", categoria:"bebidas", monto:2500 },
    {producto:"margaritas", categoria:"papas fritas", monto:2300 }
];

const interPorCategoria = inter.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
    }, {});
    console.log("inter por categoría:", interPorCategoria);