function compararNúmeros() {
    for (let númeroAComparar = 1; númeroAComparar <= 15; númeroAComparar++) {
        if (númeroAComparar % 3 === 0 && númeroAComparar % 5 === 0) {
            console.log(`${númeroAComparar} FizzBuzz`);
        } else if (númeroAComparar % 3 === 0) {
            console.log(`${númeroAComparar} Fizz`);
        } else if (númeroAComparar % 5 === 0) {
            console.log(`${númeroAComparar} Buzz`);
        } else {
            console.log(`${númeroAComparar}`);
        }
    }
}
compararNúmeros(); 