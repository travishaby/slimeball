class Game() {
  constructor(name) {
    this.name = name
  }

  name() {
    return this.name
  }
}

export default new Game('hey')
