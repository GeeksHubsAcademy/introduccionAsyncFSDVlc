
//PROMISES
/*
const funcionCallback = (numero) => {
    let res = numero * 2;
    return res;
}


let promesa = funcionCallback(10);


let funcionAsincrona = (numero) => new Promise( (resuelto, rechazado) => {
    if (numero === 5) {
        resuelto ("todo ha ido bien"); // resuelto con éxito
    } else {
        rechazado ("maaaaaaaaaaaal"); // error, rechazado
    }
})

funcionAsincrona(7)
    .then(console.log)
    .catch(console.error)


*/

    

const funcionSaludo = () => new Promise ((resuelve, rechaza)=>{
    resuelve('Hola');
});

funcionSaludo
    .then(resolucion => `${resolucion} Mundo`)
    .then(sonic => `${sonic}!`)
    .then(goku => console.log(goku)); // 'Hola Mundo!'