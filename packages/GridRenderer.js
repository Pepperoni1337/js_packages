class GridRenderer {
    constructor(
    ) {
        this.cellRenderer = new CellRenderer();
    }

    render(grid, containerElement) {
        for (let i = 0; i < grid.rows; i++) {
            let rowElement = document.createElement('div');
            rowElement.style.display = 'flex';
            for (let j = 0; j < grid.cols; j++) {
                const cell = grid.getCell(i, j);
                this.cellRenderer.render(cell, rowElement);
            }
            containerElement.appendChild(rowElement);
        }
    }
}