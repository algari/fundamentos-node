/*function sumar(a,b) {
    return a + b;
}

console.log(sumar(10,20));*/

/*let sumar = (a, b) =>{
    return a + b;
}*/

let sumar = (a, b) => a + b;

console.log(sumar(10,20));

let hola = () => `Hola mundo`;
let saludar = (nombre) => `Hola ${nombre}`;

console.log(hola(), saludar('Alx'));

let deadpool = {
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    getNombre() {
        return `${this.nombre} - poder ${this.poder}`;
    }
}

console.log(deadpool.getNombre());