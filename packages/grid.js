class Cell {
    constructor(row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.element = this.createCellElement();
    }

    createCellElement() {
        const cell = document.createElement('div');
        cell.style.width = `${this.size}px`;
        cell.style.height = `${this.size}px`;
        cell.style.border = '1px solid black';
        cell.style.boxSizing = 'border-box';
        cell.dataset.row = this.row;
        cell.dataset.col = this.col;
        return cell;
    }

    setBackgroundColor(color) {
        this.element.style.backgroundColor = color;
    }

    getBackgroundColor() {
        return this.element.style.backgroundColor;
    }
}

class Grid {
    constructor(rows, cols, cellSize, containerId) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.container = document.getElementById(containerId);
        this.cells = this.createGrid();
    }

    createGrid() {
        const cells = [];
        const tableElement = document.createElement('div');
        tableElement.style.display = 'grid';
        tableElement.style.gridTemplateRows = `repeat(${this.rows}, ${this.cellSize}px)`;
        tableElement.style.gridTemplateColumns = `repeat(${this.cols}, ${this.cellSize}px)`;

        for (let row = 0; row < this.rows; row++) {
            const rowCells = [];
            for (let col = 0; col < this.cols; col++) {
                const cell = new Cell(row, col, this.cellSize);
                tableElement.appendChild(cell.element);
                rowCells.push(cell);
            }
            cells.push(rowCells);
        }

        this.container.appendChild(tableElement);
        return cells;
    }

    setCellColor(row, col, color) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].setBackgroundColor(color);

            return;
        }

        console.error("Invalid cell position");
    }

    getCellColor(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].getBackgroundColor();
        }

        console.error("Invalid cell position");
    }
}

export { Cell, Grid };