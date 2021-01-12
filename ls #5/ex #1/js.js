'use strict';

const settings = {
    currentRows: 10,
    currentCols: 10,
};

const arrays = {
    innerArr: [
        {
            letter: 'A',
            position: {
                x: 2,
                y: 1,
            }
        },
        {
            letter: 'B',
            position: {
                x: 3,
                y: 1,
            }
        },
        {
            letter: 'C',
            position: {
                x: 4,
                y: 1,
            }
        },
        {
            letter: 'D',
            position: {
                x: 5,
                y: 1,
            }
        },
        {
            letter: 'E',
            position: {
                x: 6,
                y: 1,
            }
        },
        {
            letter: 'F',
            position: {
                x: 7,
                y: 1,
            }
        },
        {
            letter: 'G',
            position: {
                x: 8,
                y: 1,
            }
        },
        {
            letter: 'H',
            position: {
                x: 9,
                y: 1,
            }
        },
        {
            letter: '1',
            position: {
                x: 1,
                y: 2,
            }
        },
        {
            letter: '2',
            position: {
                x: 1,
                y: 3,
            }
        },
        {
            letter: '3',
            position: {
                x: 1,
                y: 4,
            }
        },
        {
            letter: '4',
            position: {
                x: 1,
                y: 5,
            }
        },
        {
            letter: '5',
            position: {
                x: 1,
                y: 6,
            }
        },
        {
            letter: '6',
            position: {
                x: 1,
                y: 7,
            }
        },
        {
            letter: '7',
            position: {
                x: 1,
                y: 8,
            }
        },
        {
            letter: '8',
            position: {
                x: 1,
                y: 9,
            }
        },
    ],
    cellElements: [],
    borderTable: [],
};

const chess = {
    figures: [
        {
            name: 'p',
            color: 'w',
            code: '&#9823;',
            quantity: 8,
            startPos: {
                x: 2,
                y: 3
            }
        },
        {
            name: 'Q',
            color: 'w',
            code: '&#9819;',
            quantity: 1,
            startPos: {
                x: 5,
                y: 2
            }
        },
        {
            name: 'K',
            color: 'w',
            code: '&#9818;',
            quantity: 1,
            startPos: {
                x: 6,
                y: 2
            }
        },
        {
            name: 'e',
            color: 'w',
            code: '&#9821;',
            quantity: 2,
            startPos: {
                x1: 4,
                y: 2,
                x2: 7,
            }
        },
        {
            name: 'h',
            color: 'w',
            code: '&#9822;',
            quantity: 2,
            startPos: {
                x1: 3,
                y: 2,
                x2: 8,
            }
        },
        {
            name: 'r',
            color: 'w',
            code: '&#9820;',
            quantity: 2,
            startPos: {
                x1: 2,
                y: 2,
                x2: 9,
            }
        },
        {
            name: 'p',
            color: 'b',
            code: '&#9823;',
            quantity: 8,
            startPos: {
                x: 2,
                y: 8
            }
        },
        {
            name: 'K',
            color: 'b',
            code: '&#9818;',
            quantity: 1,
            startPos: {
                x: 6,
                y: 9
            }
        },
        {
            name: 'Q',
            color: 'b',
            code: '&#9819;',
            quantity: 1,
            startPos: {
                x: 5,
                y: 9
            }
        },
        {
            name: 'e',
            color: 'b',
            code: '&#9821;',
            quantity: 2,
            startPos: {
                x1: 4,
                y: 9,
                x2: 7,
            }
        },
        {
            name: 'h',
            color: 'b',
            code: '&#9822;',
            quantity: 2,
            startPos: {
                x1: 3,
                y: 9,
                x2: 8,
            }
        },
        {
            name: 'r',
            color: 'b',
            code: '&#9820;',
            quantity: 2,
            startPos: {
                x1: 2,
                y: 9,
                x2: 9,
            }
        },
    ]
};

const generator = {
    settings,
    arrays,
    chess,
    containerElement: document.querySelector('#field'),

    run() {
        this.render();
        this.makeBorders();
        this.colorCells();
        this.figuresToTable(this.chess.figures);
        this.numericCells();
    },

    render() {
        for (let row = 0; row < this.settings.currentRows; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            trElem.dataset.number = `${(row + 1) * 10}`;

            for (let col = 0; col < this.settings.currentCols; col++) {
                const cell = document.createElement('td');
                this.arrays.cellElements.push(cell);
                trElem.appendChild(cell);
                cell.dataset.number = `${row * 10 + col + 1}`;
            }
        }
    },

    makeBorders() {
        const upBorder = [];
        const rightBorder = [];
        const downBorder = [];
        const leftBorder = [];

        for (let first = 1; first <= this.settings.currentCols; first++) {
            const cell = document
                .querySelector('tr:nth-child(1)')
                .querySelector(`td:nth-child(${first})`)
            ;
            upBorder.push(cell);
        }
        for (let second = 1; second <= this.settings.currentRows; second++) {
            const cell = document
                .querySelector(`tr:nth-child(${second})`)
                .querySelector(`td:last-child`)
            ;
            rightBorder.push(cell);
        }
        for (let third = 1; third <= this.settings.currentCols; third++) {
            const cell = document
                .querySelector(`tr:last-child`)
                .querySelector(`td:nth-child(${third})`)
            ;
            downBorder.push(cell);
        }
        for (let fourth = 1; fourth <= this.settings.currentCols; fourth++) {
            const cell = document
                .querySelector(`tr:nth-child(${fourth})`)
                .querySelector(`td:first-child`)
            ;
            leftBorder.push(cell);
        }
        this.arrays.borderTable = upBorder.concat(rightBorder, downBorder, leftBorder);
    },

    colorCells() {
        let allowColoredArr = this.arrays.cellElements.filter(elem => !this.arrays.borderTable.includes(elem));

        for (let row = 1; row < this.settings.currentRows; row++) {
            let trEl = document.querySelector(`tr:nth-child(${row})`);

            for (let col = 1; col < this.settings.currentCols; col++) {
                let tdEl = trEl.querySelector(`td:nth-child(${col})`);

                if (allowColoredArr.includes(tdEl) && row % 2 === 1 && ((allowColoredArr.indexOf(tdEl)+1) % 2 === 1)) {
                    tdEl.classList.add('colored_td');
                } else if (allowColoredArr.includes(tdEl) && row % 2 === 0 && ((allowColoredArr.indexOf(tdEl)+1) % 2 === 0)) {
                    tdEl.classList.add('colored_td');
                }
            }
        }
    },

    figuresToTable(figuresArr) {
        figuresArr.forEach(elem => {
            let trEl = document.querySelector(`tr:nth-child(${elem.startPos.y})`)

            if (elem.quantity === 2) {
                let point1 = trEl.querySelector(`td:nth-child(${elem.startPos.x1})`);
                let point2 = trEl.querySelector(`td:nth-child(${elem.startPos.x2})`);

                point1.innerHTML = elem.code;
                point2.innerHTML = elem.code;

                if (elem.color === 'w') {
                    point1.classList.add('white');
                    point2.classList.add('white');
                } else {
                    point1.classList.add('black');
                    point2.classList.add('black');
                }
            } else {
                for (let cell = 0; cell < elem.quantity; cell++) {
                    let point = trEl.querySelector(`td:nth-child(${elem.startPos.x})`);

                    if (elem.name === 'p') {
                        point = trEl.querySelector(`td:nth-child(${elem.startPos.x + cell})`);
                    }

                    point.innerHTML = elem.code;

                    if (elem.color === 'w') {
                        point.classList.add('white');
                    } else {
                        point.classList.add('black');
                    }
                }
            }
        })
    },

    numericCells() {
        for (let letter = 0; letter < this.arrays.innerArr.length; letter++) {
            let posX = this.arrays.innerArr[letter].position.x;
            let posY = this.arrays.innerArr[letter].position.y;
            let inner = this.arrays.innerArr[letter].letter;
            const point = document
                .querySelector(`tr:nth-child(${posY})`)
                .querySelector(`td:nth-child(${posX})`)
            ;
            point.classList.add('beauty');
            point.innerHTML = inner;
        }
    }
}

generator.run();