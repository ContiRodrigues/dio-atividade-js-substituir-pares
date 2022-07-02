//solução 1
function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1; 
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
let arr2 = [1, 80, 0, 33, 90];
let arr3 = [];

console.log(substituiPares(arr));
console.log(substituiPares(arr2));
console.log(substituiPares(arr3));

// solução 2
function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já é 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([1, 3, 4, 6, 80, 33, 23, 90]);
substituiNumerosPares([2, 0, 3, 5]);
substituiNumerosPares([]);