const datosDoctores = [
    { id: 1, nombre: 'Dr. Silva', edad: 30, especialidad: 'Medicina' },
    { id: 2, nombre: 'Dra. Alfonso', edad: 29, especialidad: 'Odontologa' }
];

let citas = [];

// d: Parametro que representa cada elemento del array datosDoctores
// d.id: Es el id del doctor de la iteración (if)
// doctorId: Valor que se compara con el id del array
// Find: Buscar el primer elemento que cumpla
function agendarCita(paciente, doctorId, fecha, hora) {
    const doctor = datosDoctores.find(d => d.id === doctorId);
    if (!doctor) {
        return 'Doctor(a) no encontrado';
    }

    if (citaExiste(fecha, hora, doctorId)) {
        return 'Horario no disponible';
    }

    // Push: Agregar
    const nuevaCita = { id: citas.length + 1, paciente, doctor: doctor.nombre, fecha, hora };
    citas.push(nuevaCita)
    return `Cita agendada para ${paciente} con ${doctor.nombre} para la fecha ${fecha} y hora ${hora}`
}

// some: Verifica que al menos un elemento cumpla la condición
function citaExiste(fecha, hora, doctorId) {
    return citas.some(c => c.fecha === fecha && c.hora === hora && datosDoctores.find(d => d.id === doctorId && d.nombre === c.doctor))
}

function verCitas(paciente) {
    return citas.filter(c => c.paciente === paciente)
}

// findIndex: Busca un elemento del array Citas y devuelve la posición, si no encuentra nada, devuelve -1
function cancelarCita(citaId) {
    const i = citas.findIndex(c => c.id === citaId);
    if (i === -1) {
        return 'Cita no encontrada'
    }

    citas.splice(i, 1)
    return 'Cita cancelada!'

}

console.log(agendarCita('Martha Castillo', 2, '2024-12-04', '10:00'));
console.log(agendarCita('Lenis', 1, '2024-12-12', '09:00'));
console.log(verCitas('Martha Castillo'));
console.log(cancelarCita(2));



