const friends = ['Ray', 'Oscar', 'Gwen', 'Bob', 'Marie']
const colors = ['red', 'orange', 'green', 'blue', 'magenta']

// mask to randomize names
const randomArr = new Array(friends.length).fill(0).map((_,i) => i)

function randomize() {
  for(let i=0; i<randomArr.length; i++) {
    let randomIndex = Math.round(Math.random()*i)
    const temp = randomArr[i] 
    randomArr[i] = randomArr[randomIndex] 
    randomArr[randomIndex] = temp
  }
}

randomize()

const container = document.getElementById('container')
for(let i=0; i<randomArr.length; i++) {
  const currentIndex = randomArr[i]
  const newNode = document.createElement('p')
  newNode.textContent = 'Hello, '
  
  const newSpan = document.createElement('span')
  newSpan.textContent = friends[currentIndex]
  newSpan.classList.add(`text__${colors[currentIndex]}`)

  newNode.appendChild(newSpan)
  container.appendChild(newNode)
}