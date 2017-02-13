import * as args from 'modules/args';

export default class {
    constructor({
        heightMatrix = args.mandatory("heightMatrix"),
        length = 1.0,   // this is actually the max y
        width = 1.0,    // this is actually the max x
        height = 1.0
    }){
        this._heightMatrix = heightMatrix;
        this._length = length;
        this._width = width;
        this._height = height;
    }

    setDimensions({ length, width, height }){
        this._length = length || this._length;
        this._width = width || this._width;
        this._height = height || this._height;
    }
}