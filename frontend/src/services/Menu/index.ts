export interface IMenu {
  state: boolean
  stateHandle(): void
}

export default class Menu implements IMenu {
  state = false

  stateHandle() {
    console.log(
      '🐞 ~ file: index.ts ~ line 13 ~ Menu ~ stateHandle ~ this.state',
      this.state
    )
    this.state = !this.state
  }
}
