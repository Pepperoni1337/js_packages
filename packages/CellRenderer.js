class CellRenderer  {
    constructor() {
        this.cellSize = 40;
    }

    render(cellObject, containerElement) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.style.width = `${this.cellSize}px`;
        cell.style.height = `${this.cellSize}px`;
        cell.style.backgroundColor = this.resolveBackgroundColor(cellObject);
        cell.style.color = this.resolveColor(cellObject);
        cell.style.border = '1px dotted ' + this.resolveBorderColor(cellObject);
        cell.style.boxSizing = 'border-box';
        cell.innerHTML = cellObject.show ? cellObject.value : '';
        containerElement.appendChild(cell);
        cellObject.element = cell;
    }

    resolveBackgroundColor(cellObject) {
        if (cellObject.state === 0) {
            if (cellObject.hightlited) {
                return 'lightGreen';
            } else {
                return 'white';
            }
        } else {
            if (cellObject.hightlited) {
                return 'darkGreen';
            } else {
                return 'lightgray';
            }
        }
    }

    resolveColor(cellObject) {
        if (cellObject.state === 0) {
            if (cellObject.hightlited) {
                return 'blakc';
            } else {
                return 'blakc';
            }
        } else {
            if (cellObject.hightlited) {
                return 'white';
            } else {
                return 'blakc';
            }
        }
    }

    resolveBorderColor(cellObject) {
        return 'grey';
    }
}