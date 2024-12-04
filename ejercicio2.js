const estudiantes = [
    {nombre:"ana", nota: 5.8},
    {nombre:"juan", nota: 8.5},
    {nombre:"Maria", nota: 8.5},
    {nombre:"pedro", nota: 8.5},
    {nombre:"luis", nota: 8.5}
];

const aprobados = estudiantes
.filter(estudiante => estudiante.nota >= 7)
.map(estudiante => estudiante.nombre);

console.log("Estudiate  aprobados:", aprobados )