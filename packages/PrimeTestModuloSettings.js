class PrimeTestModuloSettings {
    constructor() {
        this.generatorSettings = new GridGeneratorSettings(
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                if (cellId === 0 && rowId > 0) {
                    return rowId + 1;
                }

                if (rowId === 0) {
                    return (cellId*cellId+cellId-1)*(cellId*cellId+cellId+1);
                }

                return (cellId*cellId+cellId-1)*(cellId*cellId+cellId+1) % (rowId + 1);
            },
            function (cell) {
                const rowId = cell.row.id;
                const cellId = cell.id;

                if (rowId === 0 || cellId === 0) {
                    return true;
                }

                return cellId < rowId + 1;


            },
            function (cell) {
                return cell.value === 0;


            },
            function (cell) {
                if (cell.id === 0){
                    return 1;
                }

                return 0;
            }
        );
        this.rendererSettings = new GridRendererSettings(
            20,
        );
    }
}