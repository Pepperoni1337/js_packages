class PrimePyramidSettings {
    constructor() {
        this.generatorSettings = new GridGeneratorSettings(
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                return cellId + rowId * (rowId-1);
            },
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                return false;

                if (cellId === 0) {
                    return true;
                }

                return rowId > cellId && rowId > -cellId;
            },
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;
                if ((rowId > cellId && rowId > -cellId) === false) {
                    return false;
                }

                //return false;
                return (PeppeMath.isPrime(cell.value) && PeppeMath.isPrime(cell.value + 2)) || (PeppeMath.isPrime(cell.value) && PeppeMath.isPrime(cell.value - 2));
            },
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;
                if ((rowId > cellId && rowId > -cellId) === false) {
                    return 0;
                }

                return PeppeMath.isPrime(cell.value) ? 0 : 1;
            }
        );
        this.rendererSettings = new GridRendererSettings(
            20,
        );
    }
}