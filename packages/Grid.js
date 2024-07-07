class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.cells = this.prepareCells(rows, cols);
    }

    prepareCells(rows, cols) {
        const cells = [];
        for (let row = 0; row < rows; row++) {
            const rowCells = [];
            for (let col = 0; col < cols; col++) {
                const cell = new Cell(row, col);
                rowCells.push(cell);
            }
            cells.push(rowCells);
        }

        return cells;
    }

    getCell(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col];
        }

        console.error("Invalid cell position");
    }

    setCellState(row, col, state) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].state = state;

            return;
        }

        console.error("Invalid cell position");
    }

    getCellState(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].state;
        }

        console.error("Invalid cell position");
    }

    setCellValue(row, col, value) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].value = value;
            return;
        }

        console.error("Invalid cell position");
    }

    getCellValue(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].value;
        }

        console.error("Invalid cell position");
    }

    setHighlighted(row, col, highlighted) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].hightlited = highlighted;
            return;
        }

        console.error("Invalid cell position");
    }

    getCellHighlighted(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].hightlited;
        }

        console.error("Invalid cell position");
    }

    setCellShowValue(row, col, show) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].show = show;
            return;
        }

        console.error("Invalid cell position");
    }

    getCellShowValue(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].show;
        }

        console.error("Invalid cell position");
    }
}