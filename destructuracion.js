let deadpool = {
   nombre:'Wade',
   apellido:'Winston',
    poder:'Regeneracion',
    getNombre: function () {
        return `${this.nombre} - poder ${this.poder}`;
    }
}

//console.log(deadpool.getNombre());

/*
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
*/

//Destructuracion
let {nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);