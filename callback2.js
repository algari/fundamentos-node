let empleados = [{id:1, nombre:'Alx'},{id:2, nombre:'Jen'},{id:3, nombre:'Alxjr'}];
let salarios = [{id:1,salario:1000},{id:2,salario:2000},{id:3,salario:5000}];

let getEmpleado = (id, callback) => {
    let empleadoDB= empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe el empleado ${id}`);
    }else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado,callback) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id);
    if(!salarioBD){
        callback(`No existe el salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null,{nombre:empleado.nombre, salario:salarioBD.salario})
    }
}

getEmpleado(3, (err, empleado)=>{
    if(err){
        return console.log(err);
    }
    console.log(empleado);
    getSalario(empleado,(err, callback)=>{
        if (err) {
            return console.log(err);
        }
        console.log(callback);
    })
});