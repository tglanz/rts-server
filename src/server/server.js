import express from 'express';

import bodyParser from 'body-parser';
import morgan from 'morgan';

import routers from 'routers';

(async function () {
    try {
        console.log("server execution start");

        const app = express();
        app.use(morgan('tiny'));
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        app.use("/", routers());

        app.listen(3000, () => console.log("Listening on port 3000"));

        console.log("server execution end")
    } catch (error) {
        console.log("server execution failed", error);
    }
}())
