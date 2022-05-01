const  nombres = [ 4, 5, 7, 9, 10, 3 ];

let moinsQueCinq = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] < 5) {
        moinsQueCinq = true;
        break;
    }
}

console.log(moinsQueCinq);