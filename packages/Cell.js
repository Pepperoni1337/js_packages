class Cell {
    constructor(row, id) {
        this.row = row;
        this.id = id;
        this.state = 0;
        this.highlighted = false;
        this.showValue = false;
        this.value = 0;
        this.onClickFuncttion = function () {
            return function () {
                this.style.backgroundColor = 'red';
            }
        }
    }
}