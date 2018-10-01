
//async convierte el metodo en una promesa automaticamente
let getNombre = async() =>{

    //En caso que quiera retornar un error controlado
    //throw new Error('No existe un nombre en la BD');

    return 'alx';
};

getNombre().then(nombre=>{
    console.log(nombre);
}).catch(e=>{
    console.log('Error async',e);
})

let getNombre2 = ()=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('alx Jr');
        },3000);
    });
};

getNombre2().then(nombre=>{
    console.log(nombre);
}).catch(e=>{
    console.log('Error async',e);
})


let getSaludo = async()=>{
    let nombre = await getNombre2();
    return `Hola ${nombre}`
}

getSaludo().then(saludo=>{
    console.log(saludo);
});