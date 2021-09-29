

//ASYNC AWAIT

// sin async await
/*
let getFilm = () => new Promise((res, rej) => {
    res('A tOdO gAs');

});
    
let getMain = film =>
    new Promise((res, rej) => {
    film === 'Matrix' ? res('Neo') : rej('404');
});
    
getFilm()
    .then(film => getMain(film))
    .then( main => console.log(main))


*/
////////////////////////////////////////////////////

/*
// sin async await
let getFilm = () => new Promise((res, rej) => {
    res('Matrix');
});

let getMain = film =>
    new Promise((res, rej) => {
    film === 'Matrix' ? res('Neo') : rej('404');
});
    
const queue = async () => {

    let film = await getFilm(); //Supongamos que toca 'Matrix'
    let main = await getMain(film); //Neo
    console.log(main);
}

queue();
*/

////////////////////////////////


const funcionTryCatch = async () => {


    try {

        console.log("todo ha ido bien");

    } catch (error) {

        console.error(error);

    }

}

let promesa = funcionTryCatch();

console.log(promesa);