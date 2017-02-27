import * as args from 'args';

export default class {
    constructor({
        heightMatrix = args.mandatory("heightMatrix"),
        length = 1.0,   // this is actually the max y
        width = 1.0,    // this is actually the max x
        height = 1.0
    }){
        this.dimensions = { length, width, height }
        this.heightMatrix = heightMatrix;
    }

    setDimensions({ length, width, height }){
        this.dimensions.length = length || this.dimensions.length
        this.dimensions.width = width || this.dimensions.width
        this.dimensions.height = height || this.dimensions.height
    }
}