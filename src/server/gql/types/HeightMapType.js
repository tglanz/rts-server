const maps = {
    "The first map": {
        heightMap: {
            url: "http://libnoise.sourceforge.net/tutorials/images/firstheightmap.jpg",
            height: 1,
            width: 1,
            length: 1
        }
    },

    "The second map": {
        heightMap: {
            url: "http://libnoise.sourceforge.net/tutorials/images/firstheightmap.jpg",
            height: 1,
            width: 1,
            length: 1
        }
    }
}

// dont export the data itself, dont commit to the structure / source of it

export const getMapNames = () => Object.keys(maps);
export const getMap = ({ name }) => maps[name];

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLFloat
} from 'graphql';

export default new GraphQLObjectType({
    name: 'HeightMap',
    description: 'Height map',
    fields: () => ({
        url: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'source url'
        },
        width: {
            type: new GraphQLNonNull(GraphQLFloat),
            description: 'the width'
        },
        height: {
            type: new GraphQLNonNull(GraphQLFloat),
            description: 'the height'
        },
        length: {
            type: new GraphQLNonNull(GraphQLFloat),
            description: 'the length'
        }
    })
});