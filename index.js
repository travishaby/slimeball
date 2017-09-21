const root = document.getElementById('root')
const canvasContext = root.getContext('2d')

const player1Zone = {
  xOrigin: 0,
  yOrigin: 0,
  yMax: canvasContext.canvas.height,
  xMax: canvasContext.canvas.width / 2
}
const player1StartCoordinates = {
  x: player1Zone.xOrigin + 100,
  y: player1Zone.yOrigin + canvasContext.canvas.height
}
const player1 = new Player(
  'Travis',
  'red',
  player1StartCoordinates,
  player1Zone
)

const player2Zone = {
  xOrigin: canvasContext.canvas.width / 2,
  yOrigin: 0,
  yMax: canvasContext.canvas.height,
  xMax: canvasContext.canvas.width
}
const player2StartCoordinates = {
  x: player2Zone.xOrigin + 100,
  y: player2Zone.yOrigin + canvasContext.canvas.height
}
const player2 = new Player(
  'Lani',
  'blue',
  player2StartCoordinates,
  player2Zone
)

const game = new Game(player1, player2, canvasContext)

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
