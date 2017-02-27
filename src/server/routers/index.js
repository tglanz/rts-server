import { Router } from 'express';

export default () => {
    const router = Router();

    const useRoute = path => {
        const routerToUsePath = `.${path}Router`;
        console.log(` - ${path} :\t ${routerToUsePath}`)
        router.use(path, require(routerToUsePath).default);
    }

    console.log("Using routes:");

    [
        '/api/isAlive',

        '/api/v1/game',
        '/api/v1/maps',
    ].forEach(useRoute);

    return router;
}