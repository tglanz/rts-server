import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

import HeightMapType from 'gql/types/HeightMapType';

export default new GraphQLObjectType({
    name: 'Map',
    description: 'Representation of a map',
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'name of the map (is unique)'
        },
        heightMap: {
            type: new GraphQLNonNull(HeightMapType),
            description: 'height-map representation'
        }
    })
});