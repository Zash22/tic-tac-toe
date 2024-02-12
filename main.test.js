import {assert, test} from 'vitest';

import {checkWinner} from './/main.js';

test('Check winner - X wins', () => {
    const gameBoard = ['X', 'O', 'O', 'X', 'O', 'O', 'X', '', ''];
    assert.equal(checkWinner(gameBoard), true);
});

test('Check winner - O wins', () => {
    const gameBoard = ['O', 'X', 'O', '', 'X', '', '', '', 'O'];
    assert.equal(checkWinner(gameBoard), true);
});

test('Check winner - No winner', () => {
    const gameBoard = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    assert.equal(checkWinner(gameBoard), false);
});
