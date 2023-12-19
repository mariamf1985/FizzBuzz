// Imports
const {expect} = require("@jest/globals");
const FizzBuzz = require("../FizzBuzz.js")

const fizz_buzz = new FizzBuzz();

describe('Tests que validan los múltiplos de 3 y 5', () => {

    /** 
         * Feature para saber cuándo un número es primo de 3 y de 5.
         * 1.Cuando el usuario digite un número divisible por 3, devuelve Fizz,
         * 2.Cuando el usuario digite un número divisible por 5, devuelve Buzz,
         * 3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
         * 4.Cuando el usuario digite un número que no sea divisible por 3 y por 5, devuelve el número.
    */

    test('Test devuelve Fizz cuando divisible por 3', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 3
            * THEN / ASSERT: devuelve Fizz como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve Buzz cuando divisible por 5', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 5
            * THEN / ASSERT: devuelve Buzz como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve FizzBuzz cuando divisible por 3 y 5', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este sea divisible por 3 y 5
            * THEN / ASSERT: devuelve FizzBuzz como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

    test('Test devuelve un número cuando no es divisible por 3 y 5', () => {

        /**
         * GHERKIN TEST
            * GIVEN / ARRANGE: un número
            * WHEN / ACT: cuando este no sea divisible por 3 y 5
            * THEN / ASSERT: devuelve el mismo número como resultado
         */

        //ARRANGE: para el escenario
        const numero_ingresado = 7;
        const respuesta_esperada = 7;
        

        //ACT: ejecutar el escenario
        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        //ASSERT: comprobar escenario
        expect(respuesta_recibida).toBe(respuesta_esperada);

    })

})