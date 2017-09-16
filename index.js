const root = document.getElementById('root')
const canvas = root.getContext('2d')
const player1 = new Player('Travis', 100, 100, 'red')
const player2 = new Player('Lani', 400, 100, 'blue')
const game = new Game(player1, player2, canvas)

function activateListeners(listeners) {
  listeners.forEach(([eventType, eventHandler]) => {
    document.addEventListener(eventType, eventHandler, false)
  })
}
const listeners = [['keydown', game.handleKeydown.bind(game)], ['keyup', game.handleKeyup.bind(game)]]
activateListeners(listeners)

function gameLoop() {
  game.loop()
  window.requestAnimationFrame(gameLoop)
}
gameLoop()
