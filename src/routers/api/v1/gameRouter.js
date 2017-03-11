import { NOT_FOUND, OK, CREATED, NO_CONTENT, BAD_REQUEST } from 'http-status-codes';
import { Router } from 'express';
import * as activeGames from 'state/activeGames';
import * as maps from 'data/maps';

const router = Router();

const utils = {
    getGame: (req, res) => {
        const { id } = req.params;
        const game = activeGames.get({ id })
        if (!game) {
            res.status(NOT_FOUND).send(`No such game: ${id}`)
        }

        return game;
    }
}

router.post('/new', async (req, res) => {
    const game = activeGames.create();
    res.status(CREATED).send({ id: game.id });
})

router.get('/:id', async (req, res) => {
    const game = utils.getGame(req, res);
    if (!game) return;

    res.status(OK).send({ id: game.id })
})

router.get('/:id/heightMap', async (req, res) => {
    const game = utils.getGame(req, res);
    if (!game) return;
    res.status(OK).send(game.heightMap);
})

router.post('/:id/loadMap', async (req, res) => {
    try {
    const { mapName } = req.body;
    if (!mapName) {
        res.status(BAD_REQUEST).send("'mapName' is not supplied")
        return;
    }

    const map = maps.getMap({ name: mapName })
    if (!map){
        res.status(NOT_FOUND).send(`The map: '${mapName}' wasn't found`)
        return;
    }

    const game = utils.getGame(req, res);
    if (!game) return;

    await game.loadMap({ map })
    res.sendStatus(NO_CONTENT)
    } catch (error){
        console.error("ERROR", error);
    }
})

export default router;