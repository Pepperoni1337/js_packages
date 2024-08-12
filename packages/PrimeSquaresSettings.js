class PrimeSquaresSettings {
    constructor(valueFunction, showValueFunction, highlightedFunction, stateFunction) {
        this.valueFunction = valueFunction;
        this.showValueFunction = showValueFunction;
        this.highlightedFunction = highlightedFunction;
        this.stateFunction = stateFunction;
    }

    static create(value) {
        return new PrimeSquaresSettings(
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                if (cellId === 0 && rowId > 0) {
                    return rowId + 1;
                }

                return cellId;
            },
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                if (rowId === 0 || cellId === 0) {
                    return true;
                }

                return PeppeMath.squares(rowId, cellId);


            },
            function (cell) {
                return PeppeMath.squares(cell.row.id, cell.id);


            },
            function (cell) {
                if (PeppeMath.resolvePrime(cell.row.id+2,cell.id)) {
                    return 1;
                }

                return 0;
            }
        );
    }
}