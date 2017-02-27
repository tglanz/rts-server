import args from 'args';
import * as HeightMap from 'height-map';

export default class {
    constructor({
        id = args.mandatory('id')
    }){
        this.id = id;
        this.heightMap = null;
    }

    async loadMap({ map }){
        // loading the height map data
        const heightMap = await HeightMap.loadFromImage({ url: map.heightMap.url })
        heightMap.setDimensions({ ...map.heightMap })
        this.heightMap = heightMap;
    }
}