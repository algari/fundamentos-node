let empleados = [{id: 1, nombre: 'Alx'}, {id: 2, nombre: 'Jen'}, {id: 3, nombre: 'Alxjr'}, {id: 4, nombre: 'xxx'}];
let salarios = [{id: 1, salario: 1000}, {id: 2, salario: 2000}, {id: 3, salario: 5000}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe el empleado ${id}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(salario => salario.id === empleado.id);
        if (!salarioBD) {
            reject(`No existe el salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({nombre: empleado.nombre, salario: salarioBD.salario})
        }
    });

}


getEmpleado(3).then(empleado => {
    console.log("Empleado de BD", empleado);
    getSalario(empleado).then(salario => {
        console.log(salario);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})

//Promesas en cadena
getEmpleado(4).then(empleado => {
    console.log("Empleado de BD", empleado);
    return getSalario(empleado);
})
    .then(res => {
        console.log(res);
    }).catch(err => {
    console.log(err);
});