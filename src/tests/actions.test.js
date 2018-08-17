import { actionTypes, checkCasilla, resetGame } from '../actions/casillas';

describe('Comprobamos las diferentes acciones que lleva a cabo el reducer', () => {
    test('Accion checkCasilla', () => {
        const result = {
            type: actionTypes.ADD,
                id: 12,
        };
        expect(checkCasilla(12)).toEqual(result);
    });

    test('Accion resetGame', () => {
        const result = {
            type: actionTypes.RESET
        };
        expect(resetGame()).toEqual(result);
    });
})