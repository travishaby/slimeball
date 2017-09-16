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
    this.returnPlayers().forEach(player => player.move())
    this.draw()
  }

  draw() {
    this.canvas.fillStyle="#FFFFFF"
    const {height, width} = this.canvas.canvas
    this.canvas.fillRect(0, 0, height, width)
    this.player1.draw(this.canvas)
  }

  handleKeydown(keydownEvent) {
    if(keydownEvent.key === 'j') player1.startMoving('left')
    if(keydownEvent.key === 'l') player1.startMoving('right')
    if(keydownEvent.key === 'i') player1.startMoving('up')
    if(keydownEvent.key === 'k') player1.startMoving('down')
  }

  handleKeyup(keyupEvent) {
    if(keyupEvent.key === 'j') player1.stopMoving('left')
    if(keyupEvent.key === 'l') player1.stopMoving('right')
    if(keyupEvent.key === 'i') player1.stopMoving('up')
    if(keyupEvent.key === 'k') player1.stopMoving('down')
  }
}
