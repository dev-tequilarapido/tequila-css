import { toggleGrid } from "./_toggleGrid.js"

/**
 * Create a grid
 */
export default function createGrid() {
    const nbColumns = 12
    const body = document.querySelector('body')

    const divParent = document.createElement('div')
    divParent.id = 'grid'

    for(let i = 1; i <= nbColumns; i++) {
        let divOne = document.createElement('div')
        let divTwo = document.createElement('div')
        divOne.appendChild(divTwo)
        divParent.appendChild(divOne)
    }

    body.appendChild(divParent)

    document.addEventListener('DOMContentLoaded', () => {
        toggleGrid()
    });
}