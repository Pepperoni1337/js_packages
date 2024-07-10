class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.state = 0;
        this.highlighted = false;
        this.showValue = false;
        this.value = 0;
        this.element = null;
    }
}