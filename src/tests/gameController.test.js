import {diag1x, diag1o, diag2x, diag2o, fila1x, fila1o, fila2x, fila2o, fila3x, fila3o, 
    col1x, col1o, col2x, col2o, col3x, col3o, empate} from '../tests/testData/testData';
import checkJugada  from '../controller/gameController';

describe('checkJugada', ()  => {
    test('Comprobamos que hay un ganador en la diagonal primera(x)', () => {
        expect(checkJugada(diag1x)).toBe('d1x');
    });

    test('Comprobamos que hay un ganador en la diagonal primera(o)', () => {
        expect(checkJugada(diag1o)).toBe('d1o')
    });

    test('Comprobamos que hay un ganador en la diagonal segunda(x)', () => {
        expect(checkJugada(diag2x)).toBe('d2x');
    });

    test('Comprobamos que hay un ganador en la diagonal segunda(o)', () => {
        expect(checkJugada(diag2o)).toBe('d2o');
    });

    test('Comprobamos que hay un ganador en la primera fila(x)', () => {
        expect(checkJugada(fila1x)).toBe('f1x');
    });

    test('Comprobamos que hay un ganador en la primera fila(o)', () => {
        expect(checkJugada(fila1o)).toBe('f1o');
    });

    test('Comprobamos que hay un ganador en la segunda fila(x)', () => {
        expect(checkJugada(fila2x)).toBe('f2x');
    });

    test('Comprobamos que hay un ganador en la segunda fila(o)', () => {
        expect(checkJugada(fila2o)).toBe('f2o');
    });

    test('Comprobamos que hay un ganador en la tercera fila(x)', () => {
        expect(checkJugada(fila3x)).toBe('f3x');
    });
    
    test('Comprobamos que hay un ganador en la tercera fila(o)', () => {
        expect(checkJugada(fila3o)).toBe('f3o');
    });

    test('Comprobamos que hay un ganador en la primera columna(x)', () => {
        expect(checkJugada(col1x)).toBe('c1x');
    });

    test('Comprobamos que hay un ganador en la primera columna(o)', () => {
        expect(checkJugada(col1o)).toBe('c1o');
    });

    test('Comprobamos que hay un ganador en la segunda columna(x)', () => {
        expect(checkJugada(col2x)).toBe('c2x');
    });

    test('Comprobamos que hay un ganador en la segunda columna(o)', () => {
        expect(checkJugada(col2o)).toBe('c2o');
    });

    test('Comprobamos que hay un ganador en la tercera columna(x)', () => {
        expect(checkJugada(col3x)).toBe('c3x');
    });

    test('Comprobamos que hay un ganador en la tercera columna(o)', () => {
        expect(checkJugada(col3o)).toBe('c3o');
    });
})

