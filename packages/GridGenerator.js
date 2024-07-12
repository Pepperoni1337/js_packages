class GridGenerator {
    constructor() {
        this.valueFunction = function (cell) {
            return cell.id;
        };
        this.showValueFunction = function (cell) {
            return cell.row.id % 10 === 0;
        };
        this.highlightedFunction = function (cell) {
            return cell.id % 10 === 0;
        }
        this.stateFunction = function (cell) {
            return (cell.row.id + cell.id) % 2 === 0 ? 1 : 0;
        }
    }

    createGrid(rows, cols) {
        const grid = new Grid();

        for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
            const row = new Row(grid, rowIndex);
            for (let colIndex = 0; colIndex < cols; colIndex++) {
                let cell = new Cell(row, colIndex);
                cell.value = this.valueFunction(cell);
                cell.showValue = this.showValueFunction(cell);
                cell.highlighted = this.highlightedFunction(cell);
                cell.state = this.stateFunction(cell);
                row.addCell(cell);
            }
            grid.addRow(row);
        }

        return grid;
    }
}