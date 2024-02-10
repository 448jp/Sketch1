export class Stage {
  option: { element?: HTMLElement }
  element: HTMLElement | null
  count: number = 0
  private _background: HTMLElement | null = null
  private _spectrum: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]

  constructor(option: any = {}) {
    this.option = option
    this.element = this.option.element || null

    if (!this.element) return

    const background: HTMLElement = document.createElement("div")
    background.classList.add("background")
    this.element.appendChild(background)
    this._background = background

    window.requestAnimationFrame(this._update.bind(this))
  }

  public getElement(): HTMLElement | null {
    return this.element
  }

  private _update(): void {
    if (this._background && this.count % 15 === 0) {
      this._spectrum = this._spectrum.slice(1).concat(this._spectrum[0])
      const colors: string = this._spectrum.join(",")
      this._background.style.backgroundImage = `linear-gradient(to bottom, ${colors})`
    }
    this.count++
    window.requestAnimationFrame(this._update.bind(this))
  }
}