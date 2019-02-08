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
    height: '200',
    width: '356',
    videoId: 'tw03z6_6bRE',
    playerVars: { 
      'loop': 1,
      'playlist': 'tw03z6_6bRE',
      'controls': 1,
    },
    events: {
      'onReady': onPlayer1Ready,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '200',
    width: '356',
    videoId: '4Uuwsy9Tyto',
    playerVars: { 
      'loop': 1,
      'playlist': '4Uuwsy9Tyto',
      'controls': 1,
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
  player1.pauseVideo();
}

function onPlayer2Ready(event) {
  event.target.seekTo(0, false);
  player2.mute();
  player2.pauseVideo();
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
  if(player1.getPlayerState() == 1 || player2.getPlayerState() == 5) {
    player1.pauseVideo();
    player2.pauseVideo();
    playIcon();
  } else {
    player1.playVideo();
    player2.playVideo();
    pauseIcon();
  }
}

function playIcon() {
	document.getElementById('img').src = 'assets/play-button.png';
}

function pauseIcon() {
	document.getElementById('img').src = 'assets/pause-button.png';
}

function check() {
  if(document.getElementById('toggle').checked == false) {
    player1.unMute();
    player2.mute();
    document.getElementById('play').className = 'play';
    document.getElementById('img').className = 'img';
  } else {
    player2.unMute();
    player1.mute();
    document.getElementById('play').className = 'play2';
    document.getElementById('img').className = 'img2';
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