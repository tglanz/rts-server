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