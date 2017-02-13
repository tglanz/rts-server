import * as args from 'modules/args';

const _entryIndex = (columnCount, row, column) => row * columnCount + column;

export default class Matrix2d {
    constructor({
        rowCount = args.mandatory("rowCount"),
        columnCount = args.mandatory("columnCount")
    }){
        this._rowCount = rowCount;
        this._columnCount = columnCount;

        this._entries = [];
        this._entries.length = rowCount * columnCount;
    }

    get numberOfRows() { return this._rowCount; }
    get numberOfColumns() { return this._columnCount; }
    get entriesCount() { return this._rowCount * this._columnCount }

    getEntry(column = args.mandatory("column", row = args.mandatory("row"))){
        const entryIndex = _entryIndex(this.numberOfColumns, row, column);
        return this._entries[entryIndex];
    }

    setEntry(column = args.mandatory("column"), row = args.mandatory("row"), value = args.mandatory("value")){
        const entryIndex = _entryIndex(this.numberOfColumns, row, column);
        this._entries[entryIndex] = value;
    }
}