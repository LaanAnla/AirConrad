export default class Youtube {

  constructor(hidden) {

  this.hidden = hidden
  let that = this
  var tag = document.createElement('script')
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  console.log('youtube loaded')

  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      height: '100vh',
      width: '100vw',
      videoId: 'TgZpIVkZetA',
      playerVars: {
        'autoplay': 1,
        'mute': 1, // start muted to allow autoplay
        'controls': 1,
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
    console.log('script chargé')
  }

  function onPlayerReady(event) {
    event.target.seekTo(4);
    event.target.playVideo();
    var duration = player.getDuration();
    console.log("La durée de la vidéo est de " + duration + " secondes");
  
    var interval = setInterval(() => {
      var currentTime = player.getCurrentTime();
      console.log("Le temps écoulé est de " + currentTime + " secondes");
  
      // Si la vidéo est terminée
      //if (player.getPlayerState() === YT.PlayerState.ENDED) {
      if (duration - currentTime <= 13) {
        console.log("La vidéo est terminée !");
        clearInterval(interval); // Arrête de vérifier une fois que la vidéo est terminée
        that.hidden()
      }
    }, 1000); // Vérifie le temps écoulé toutes les secondes
  }
  

  var done = false;
  function onPlayerStateChange(event) {
    // if (event.data == YT.PlayerState.PLAYING && !done) {
    //   // player.unMute(); // unmute when start playing
    //   setTimeout(stopVideo, 6000);
    //   done = true;
    // }
  }
  function stopVideo() {
    player.stopVideo();
  }
}
}
