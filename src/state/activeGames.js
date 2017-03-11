import uuid from 'uuid';
import Game from './Game';

let _games = {};

export const create = () => {
    const newGameId = uuid.v4();
    const game = new Game({ id: newGameId })
    _games[newGameId] = game;
    return game;
}

export const ids = () => Object.keys(_games);

export const get = ({ id }) => _games[id];

_games['test'] = new Game({ id: 'test' });