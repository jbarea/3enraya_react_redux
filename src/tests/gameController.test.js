import { uuid } from 'uuid';
import { checkJugada } from '../controller/gameController';

describe('checkJugada', ()  => {
    test('Comprobamos que hay un ganador en una de las filas', () => {
        const estruc = {
            casillas: [{
                row: 0,
                col: 0,
                jug: true,
                id: '3447ryhryr3475'
            },
            {
                row: 0,
                col: 1,
                jug: false,
                id: '58869405fggdfff'
            },
            {
                row: 0,
                col: 2,
                jug: 'undefined',
                id: 'fder755g8'
            },
            {
                row: 1,
                col: 0,
                jug: 'undefined',
                id: '56tfgy5rt76'
            },
            {
                row: 1,
                col: 1,
                jug: true,
                id: '5478546yhg5'
            },
            {
                row: 1,
                col: 2,
                jug: 'undefined',
                id: '5465hyh67'
            },
            {
                row: 2,
                col: 0,
                jug: 'undefined',
                id: '56767dfg5454'
            },
            {
                row: 2,
                col: 1,
                jug: 'undefined',
                id: '5485465trg234523d'
            },
            {
                row: 2,
                col: 2,
                jug: true,
                id: '575568585ergdfgcvb'
            }
            ],
                turno: true,
                gana: undefined,
                empata: false
        }

        const mockcheckJugada = jest.fn(checkJugada);

    })
})