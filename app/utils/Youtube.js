export default class Youtube {

  constructor(hidden, step1, step2) {

  this.hidden = hidden
  this.step1 = step1
  this.Step2 = step2
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
  
    var interval = setInterval(() => {
      var currentTime = player.getCurrentTime();
  
      if (duration - currentTime <= 13) {
        // this.check = ()=> {
        clearInterval(interval)
        //   console.log('la video est checkee')
        // }
        that.hidden()
      }
    }, 1000)
  }
  

  var done = false;
  function onPlayerStateChange(event) {
    switch(event.data) {
      case YT.PlayerState.UNSTARTED:
        console.log('10%');
        break;
      case YT.PlayerState.PLAYING:
        console.log('50%');
        break;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
}
}
