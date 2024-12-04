const cuentasUsuarios = [
    { id: 1, nomUsuario: 'lenis', contraseña: '12345', saldo: 1000 },
    { id: 2, nomUsuario: 'johan', contraseña: '23456', saldo: 10500 }
];

let transaccion = [];

function retiros(Usuario, contraseña, costo) {
    const infoCuenta = cuentasUsuarios.find(ic => ic.id === Usuario && ic.contraseña === contraseña);
    if (!infoCuenta)
        return "No es válido";
    if (cuentasUsuarios.saldo < costo)
        return "No se puede retirar POBRE";
    if (costo > 100000)
        return "El costo esta con limite de 100000";

    infoCuenta.saldo -= costo;
    transacion(Usuario, costo, 'retiro');
    return `Nuevo saldo : ${infoCuenta.saldo}`;

}

function depositos (Usuario, contraseña, costo){
    const infoCuenta = cuentasUsuarios.find(ic => ic.id === Usuario && ic.contraseña === contraseña);
    if (!infoCuenta)
        return "No es válido";

    infoCuenta.saldo += costo;
    transacion(Usuario, costo, 'deposito');
    return `Nuevo saldo : ${infoCuenta.saldo}`;


}

// .toLocaleString(): Se obtiene la fecha en formato local '11/23/2024 3:45:00 AM'
function transacion(Usuario, costo, tipoTransaccion) {
    transaccion.push({ fecha: new Date().toLocaleString(), Usuario, costo, tipoTransaccion })
}

console.log(retiros(2, '23456', 500))
console.log(depositos(1,'12345', 1000));
