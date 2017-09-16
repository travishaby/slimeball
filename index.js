class Game {
  constructor(player1, player2, canvas) {
    this.player1 = player1
    this.player2 = player2
    this.canvas = canvas
  }

  returnPlayers() {
    return [this.player1, this.player2]
  }

  loop() {
    this.draw()
  }

  draw() {
    this.canvas.fillStyle="#FFFFFF"
    const {height, width} = this.canvas.canvas
    this.canvas.fillRect(0, 0, height, width)
    this.player1.draw(this.canvas)
  }

  handleKeypress(keypressEvent) {
    switch(keypressEvent.key) {
      case 'j':
        player1.move('left')
        break;
      case 'l':
        player1.move('right')
        break;
      case 'i':
        player1.move('up')
        break;
      case 'k':
        player1.move('down')
        break;
      default:
        console.log('that key doesnt do anything...');
    }
  }
}

function gameLoop() {
  game.draw()
  window.requestAnimationFrame(gameLoop)
}

function activateListeners(listeners) {
  listeners.forEach(([eventType, eventHandler]) => {
    document.addEventListener(eventType, eventHandler, false)
  })
}

const root = document.getElementById('root')
const canvas = root.getContext('2d')
const player1 = new Player('Travis', 100, 100)
const game = new Game(player1, 'Lani', canvas)

const listeners = [['keypress', game.handleKeypress]]
activateListeners(listeners)

gameLoop()
