export default class ScreenOrientation {
  constructor() {
    this.orientation()
  }

  orientation() {
    screen.addEventListener("orientationchange", () => {
      screen.orientation.lock();
    });
  }
}