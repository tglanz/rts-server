import args from 'modules/args';

class Matrix2d {
    constructor({
        rowCount = args.mandatory("rowCount"),
        columnCount = args.mandatory("columnCount")
    }){
        this._entries = [];
        this._rowCount = rowCount;
        this._columnCount = columnCount;
    }

    get numberOfRows() { return this._rowCount; }
    get numberOfColumns() { return this._columnCount; }
}