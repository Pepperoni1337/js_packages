class Grid {
    constructor() {
        this.rows = [];
    }

    addRow(row) {
        this.rows.push(row);
    }

    getRows() {
        return this.rows;
    }
}