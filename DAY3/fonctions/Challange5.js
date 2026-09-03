//Challenge 5 : Le Somateur Universel (Rest Parameter)
function add(...args) {
    let somme = 0;

    for (let i = 0; i < args.length; i++) {
        somme += args[i];
    }

    return somme;
}

console.log(add(10, 20, 30, 40, 8));