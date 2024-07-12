class GridRenderer {
    constructor(
    ) {
        this.cellRenderer = new CellRenderer();
    }

    render(grid, containerElement) {
        let rows = grid.getRows();
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const rowElement = document.createElement('div');
            rowElement.className = 'row';
            rowElement.style.display = 'flex';
            containerElement.appendChild(rowElement);
            const cells = row.getCells();
            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                this.cellRenderer.render(cell, rowElement);
            }
        }
    }
}