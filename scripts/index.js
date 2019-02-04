// 1. This code loads the IFrame Player API code asynchronously.
var player1;
var player2;
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
    height: '90',
    width: '110',
    videoId: 'tw03z6_6bRE',
    playerVars: { 
      'loop': 1,
      'playlist': 'tw03z6_6bRE',
      'controls': 0,
    },
    events: {
      'onReady': onPlayer1Ready,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '90',
    width: '110',
    videoId: '4Uuwsy9Tyto',
    playerVars: { 
      'loop': 1,
      'playlist': '4Uuwsy9Tyto',
      'controls': 0,
    },
    events: {
      'onReady': onPlayer2Ready,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 3. The API will call this function when the video player is ready.
function onPlayer1Ready(event) {
  event.target.seekTo(0, false);
}

function onPlayer2Ready(event) {
  event.target.seekTo(0, false);
}

// 4. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for three seconds and then stop.
//var done = false;
function onPlayerStateChange(event) {
//  if (event.data == YT.PlayerState.PLAYING && done) {
//    event.seekTo(0, false);
//  }
}

// 5. Play and Toggle button functions
player1.unMute();
player2.mute();

function play() {
  check();
  if(player1.getPlayerState() == 1 || player2.getPlayerState() == 5) {
    //changeIcon();
    player1.pauseVideo();
    player2.pauseVideo();
  } else {
    //changeIcon();
    player1.playVideo();
    player2.playVideo();
  }
}

function changeIcon() {
  $("#play i").toggleClass("fa\ fa-pause fa\ fa-play");

    console.log("playButton pressed play was "+play);

    play = !play;
}

function check() {
  if(document.getElementById("toggle").checked == false) {
    player1.unMute();
    player2.mute();
  } else {
    player2.unMute();
    player1.mute();
  }
}

//function reverseColors

function fadeIn() {
  player1.setVolume() = 0;
  var volume = player1.getVolume();
  var id = setInterval(volume, 20);
  function volume() {
    if(volume == 100) {
      clearInterval(id);
    } else {
      player1.setVolume() = player1.getVolume() + 1;
      volume = player1.getVolume();
    }
  }
}

function fadeOut() {
  player1.setVolume() = 100;
  var volume = player1.getVolume();
  var id = setInterval(volume, 20);
  function volume() {
    if(volume == 0) {
      clearInterval(id);
    } else {
      player1.setVolume() = player1.getVolume() - 1;
      volume = player1.getVolume();
    }
  }
}