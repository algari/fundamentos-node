let empleados = [{id: 1, nombre: 'Alx'}, {id: 2, nombre: 'Jen'}, {id: 3, nombre: 'Alxjr'}, {id: 4, nombre: 'xxx'}];
let salarios = [{id: 1, salario: 1000}, {id: 2, salario: 2000}, {id: 3, salario: 5000}];

let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe el empleado ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = (empleado) => {

    let salarioBD = salarios.find(salario => salario.id === empleado.id);
    if (!salarioBD) {
        throw new Error(`No existe el salario para el empleado ${empleado.nombre}`)
    } else {
        return ({nombre: empleado.nombre, salario: salarioBD.salario})
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return (`${empleado.nombre} tiene un salario de ${salario.salario}`);
}

getInformacion(3).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
});

let getInfo = async (id) => {
    let emp = await getEmpleado(id);
    let res = await getSalario(emp);
    console.log(res);
}

getInfo(2);