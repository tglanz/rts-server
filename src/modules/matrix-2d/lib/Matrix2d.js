import * as args from 'args';

const _entryIndex = (columnCount, row, column) => row * columnCount + column;

export default class Matrix2d {
    constructor({
        rowCount = args.mandatory("rowCount"),
        columnCount = args.mandatory("columnCount")
    }){
        this.rowCount = rowCount;
        this.columnCount = columnCount;

        this.entries = [];
        this.entries.length = rowCount * columnCount;
    }

    get entriesCount() { return this.rowCount * this.columnCount }

    getEntry(column = args.mandatory("column"), row = args.mandatory("row")){
        const entryIndex = _entryIndex(this.columnCount, row, column);
        return this.entries[entryIndex];
    }

    setEntry(column = args.mandatory("column"), row = args.mandatory("row"), value = args.mandatory("value")){
        const entryIndex = _entryIndex(this.columnCount, row, column);
        this.entries[entryIndex] = value;
    }
}