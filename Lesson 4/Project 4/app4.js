const board = document.querySelector('#board')
const colors = ['#db919e', '#db91b9', '#db91b9',
'#9193db', '#91b7db', '#91dbd6', '#91dbb7', '#d5db91', '#dbb991']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++){
    // На каждой итерации создавать html-элемент div:
    const square = document.createElement('div')
    square.classList.add('square')

    // Будет что-то происходить, если навести мышкой на квадратик:
    square.addEventListener('mouseover', () => setColor(square))

    // Убирать цвет, когда уходит мышка
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow =`0 0 2px #000`
}
function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
