class Row {
    constructor(grid, id) {
        this.grid = grid;
        this.id = id;
        this.cells = [];
    }

    addCell(cell) {
        this.cells.push(cell);
    }

    getCells() {
        return this.cells;
    }
}