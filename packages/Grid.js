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
            this.cells[row][col].highlighted = highlighted;
            return;
        }

        console.error("Invalid cell position");
    }

    getCellHighlighted(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].highlighted;
        }

        console.error("Invalid cell position");
    }

    setCellShowValue(row, col, show) {
        if (row < this.rows && col < this.cols) {
            this.cells[row][col].showValue = show;
            return;
        }

        console.error("Invalid cell position");
    }

    getCellShowValue(row, col) {
        if (row < this.rows && col < this.cols) {
            return this.cells[row][col].showValue;
        }

        console.error("Invalid cell position");
    }

    applyValueFunction(func) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.cells[row][col].value = func(row,col);
            }
        }
    }

    applyShowValueFunction(func) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.cells[row][col].showValue = func(row,col);
            }
        }
    }

    applyHighlightedFunction(func) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.cells[row][col].highlighted = func(row,col);
            }
        }
    }

    applyStateFunction(func) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.cells[row][col].state = func(row,col);
            }
        }
    }
}