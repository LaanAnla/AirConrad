export default class ScreenOrientation {
  constructor() {
    this.orientation()
  }

  orientation() {
    if (screen.orientation) {
      // Verrouiller l'écran en mode portrait
      screen.orientation.lock('portrait')
        .catch(function(error) {
          console.log("Erreur lors de la tentative de verrouillage de l'orientation de l'écran: " + error);
        });
    }
  }
}