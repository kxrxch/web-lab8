const squares = document.querySelectorAll('.square')

squares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

function dragStart(drag){
    Dragged = drag.target
}

function dragOver(drag){
    drag.preventDefault()
}

function dragDrop(drop){
    const figure = 'figure'
    const isEnemy = drop.target?.classList.contains(figure)
    if (isEnemy) {
        drop.target.parentNode.append(Dragged)
        drop.target.remove()
    }
        drop.target.append(Dragged)
}