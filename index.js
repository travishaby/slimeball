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
    console.log('wut')
    this.draw()
  }

  draw() {
    this.player1.draw(this.canvas)
  }
}

function gameLoop() {
  game.draw()
  window.requestAnimationFrame(gameLoop)
}

const root = document.getElementById('root')
const canvas = root.getContext('2d')
const player1 = new Player('Travis')
const game = new Game(player1, 'Lani', canvas)

gameLoop()
