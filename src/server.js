import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import gqlHttp from 'express-graphql';
import gqlSchema from 'gql/schema';

import routers from 'routers';

(async function () {
    try {
        console.log("server execution start");

        const app = express();
        app.use(morgan('tiny'));
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.use("/", routers());

        await useGraphQL(app);

        const server = app.listen(3000, () => {
            console.log(`Listening on ${server.address().port}`)
        });

        console.log("server execution end")
    } catch (error) {
        console.log("server execution failed", error);
    }
}())

async function useGraphQL(app){
    app.use('/gql', gqlHttp({
        schema: gqlSchema,
        graphiql: true
    }))
}