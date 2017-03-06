import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} from 'graphql';

import MapType from 'gql/types/MapType';

import { getMapNames, getMap } from 'data/maps';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            maps: {
                type: new GraphQLList(MapType),
                resolve: () => getMapNames().map(name => ({
                    name,
                    ...getMap({ name })
                }))
            }
        }
    })
});

export default schema;