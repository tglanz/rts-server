import { NOT_FOUND, OK } from 'http-status-codes';
import { Router } from 'express';

import * as maps from 'data/maps';

const router = Router();

router.get('/', async (req, res) => {
    const names = maps.getMapNames();
    res.status(OK).send(names)
})

router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const map = maps.getMap({ name })

    if (!map){
        res.sendStatus(NOT_FOUND);
        return;
    }

    res.status(OK).send(map)
})

export default router;