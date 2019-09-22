document.onkeydown = function(event) {
  // p key = play/pause
  if(event.keyCode == 80) {
    play();
  }

  // t key = toggle
  if(event.keyCode == 84) {
  	var box = document.getElementById("toggle");

    (box.checked) ? box.checked=false : box.checked=true;
    check();
    return true;
  }

  // left arrow = decrease volume
  if(event.keyCode == 37) {
  	var volume = player1.getVolume();
  	document.getElementById("volume").value = volume;

  	if(volume >= 5) {
	    changeVolume(volume - 5);
	    document.getElementById("volume").value = volume - 5;
	} else {
	  	changeVolume(0);
	  	document.getElementById("volume").value = 0;
	  }
  }
  
  // right arrow = increase volume
  if(event.keyCode == 39) {
  	var volume = player1.getVolume();
  	document.getElementById("volume").value = volume;

    if(volume >= 95) {
	  	changeVolume(100);
	  	document.getElementById("volume").value = 100;
	} else {
	  	changeVolume(volume + 5);
	    document.getElementById("volume").value = volume + 5;
	}
  }
}

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
    videoId: '9K9y1cKVMIU',
    playerVars: {
      'loop': 1,
      'controls': 1,
      'autoplay': 0
    },
    events: {
      'onReady': onPlayer1Ready,
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('player2', {
    height: '200',
    width: '356',
    videoId: 'XRK3fyYAB4E',
    playerVars: { 
      'loop': 1,
      'controls': 1,
      'autoplay': 0
    },
    events: {
      'onReady': onPlayer2Ready,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 3. The API will call this function when the video player is ready.
function onPlayer1Ready(event) {
  event.target.seekTo(0, true);
  player1.pauseVideo();
  player1.setVolume(42);
}

function onPlayer2Ready(event) {
  event.target.seekTo(0, true);
  player2.setVolume(42);
  player2.mute();
  player2.pauseVideo();
}

// 4. Loop video when it ends
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player1.playVideo();
    player2.playVideo();
  }
}



// Populate Left Dropdown Submenus
var awakeningFolder = document.getElementById("awakening");
for(var i = 0; i < awakening.length; i++) {
	var el = document.createElement("option");
	el.textContent = awakening[i].title;
	el.value = awakening[i].url;
	awakeningFolder.appendChild(el);
}

var fatesFolder = document.getElementById("fates");
for(var i = 0; i < fates.length; i++) {
	var el = document.createElement("option");
	el.textContent = fates[i].title;
	el.value = fates[i].url;
	fatesFolder.appendChild(el);
}

var darkestBattleFolder = document.getElementById("darkestBattle");
for(var i = 0; i < darkestBattle.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestBattle[i].title;
	el.value = darkestBattle[i].url;
	darkestBattleFolder.appendChild(el);
}

var darkestAmbientFolder = document.getElementById("darkestAmbient");
for(var i = 0; i < darkestAmbient.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestAmbient[i].title;
	el.value = darkestAmbient[i].url;
	darkestAmbientFolder.appendChild(el);
}

// Populate Right Dropdown Submenus
var awakeningAblazeFolder = document.getElementById("awakeningAblaze");
for(var i = 0; i < awakeningAblaze.length; i++) {
	var el = document.createElement("option");
	el.textContent = awakeningAblaze[i].title;
	el.value = awakeningAblaze[i].title;
	awakeningAblazeFolder.appendChild(el);
}

var fatesAblazeFolder = document.getElementById("fatesAblaze");
for(var i = 0; i < fatesAblaze.length; i++) {
	var el = document.createElement("option");
	el.textContent = fatesAblaze[i].title;
	el.value = fatesAblaze[i].title;
	fatesAblazeFolder.appendChild(el);
}

var darkestAmbushFolder = document.getElementById("darkestAmbush");
for(var i = 0; i < darkestAmbush.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestAmbush[i].title;
	el.value = darkestAmbush[i].title;
	darkestAmbushFolder.appendChild(el);
}

var darkestTorchlessFolder = document.getElementById("darkestTorchless");
for(var i = 0; i < darkestTorchless.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestTorchless[i].title;
	el.value = darkestTorchless[i].url;
	darkestTorchlessFolder.appendChild(el);
}

// Populate Center Dropdown Submenus
var darkestSinglesFolder = document.getElementById("darkestSingles");
for(var i = 0; i < darkestSingles.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestSingles[i].title;
	el.value = darkestSingles[i].url;
	darkestSinglesFolder.appendChild(el);
}

var darkestCrimsonFolder = document.getElementById("darkestCrimson");
for(var i = 0; i < darkestCrimson.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestCrimson[i].title;
	el.value = darkestCrimson[i].url;
	darkestCrimsonFolder.appendChild(el);
}

var darkestColorFolder = document.getElementById("darkestColor");
for(var i = 0; i < darkestColor.length; i++) {
	var el = document.createElement("option");
	el.textContent = darkestColor[i].title;
	el.value = darkestColor[i].url;
	darkestColorFolder.appendChild(el);
}

var witcherFolder = document.getElementById("witcher");
for(var i = 0; i < witcher.length; i++) {
	var el = document.createElement("option");
	el.textContent = witcher[i].title;
	el.value = witcher[i].url;
	witcherFolder.appendChild(el);
}

var witcherHeartsFolder = document.getElementById("witcherHearts");
for(var i = 0; i < witcherHearts.length; i++) {
	var el = document.createElement("option");
	el.textContent = witcherHearts[i].title;
	el.value = witcherHearts[i].url;
	witcherHeartsFolder.appendChild(el);
}

var witcherBloodFolder = document.getElementById("witcherBlood");
for(var i = 0; i < witcherBlood.length; i++) {
	var el = document.createElement("option");
	el.textContent = witcherBlood[i].title;
	el.value = witcherBlood[i].url;
	witcherBloodFolder.appendChild(el);
}

// witcher - others here

var intoTheBreachFolder = document.getElementById("intoTheBreach");
for(var i = 0; i < intoTheBreach.length; i++) {
	var el = document.createElement("option");
	el.textContent = intoTheBreach[i].title;
	el.value = intoTheBreach[i].url;
	intoTheBreachFolder.appendChild(el);
}

// Sync Menu Selections
function syncMenu1() {
	var selection = document.getElementById("videoList1").selectedIndex;
	document.getElementById("videoList2").selectedIndex = selection;
	selection = selection - 1;

	var selectedGroup = 0;
	if(selection < 13) {	// Awakening - 13 tracks
		selectedGroup = 0;
		setBackground("awakening-logo");
	} else if(selection < 42) {	// Fates - 29 tracks
		selection = selection - 13;
		selectedGroup = 1;
		setBackground("fates-logo");
	} else if(selection < 47) {	// Darkest Dungeon Battle - 5 tracks
		selection = selection - 42;
		selectedGroup = 2;
		setBackground("darkest-dungeon");
	} else if(selection < 49) {	// Darkest Dungeon Ambient Light - 2 tracks
		selection = selection - 47;
		selectedGroup = 3;
		setBackground("darkest-dungeon");
	}

	var link1ID = youtube_parser(leftFolders[selectedGroup].folder[selection].url);
	var link2ID = youtube_parser(rightFolders[selectedGroup].folder[selection].url);
    player1.loadVideoById(link1ID);
    player2.loadVideoById(link2ID);

    document.getElementById("dualVideoList").selectedIndex = 0;

    player1.seekTo(0);
	player1.pauseVideo();
	player2.seekTo(0);
	player2.pauseVideo();
	playIcon();

	if(document.getElementById('toggle').checked == true) {
		document.getElementById('toggle').checked = false;
	    player1.unMute();
	    player2.mute();
	    document.getElementById('play').className = 'play';
	    document.getElementById('img').className = 'img';
	    document.getElementById('volume').className = 'volume';
	}

	document.getElementById("videoList1").blur();
}

function syncMenu2() {
	var selection = document.getElementById("videoList2").selectedIndex;
	document.getElementById("videoList1").selectedIndex = selection;
	selection = selection - 1;

	var selectedGroup = 0;
	if(selection < 13) {	// Awakening Ablaze - 13 tracks
		selectedGroup = 0;
		setBackground("awakening-logo");
	} else if(selection < 42) {	// Fates Ablaze - 29 tracks
		selection = selection - 13;
		selectedGroup = 1;
		setBackground("fates-logo");
	} else if(selection < 47) {	// Darkest Dungeon Ambush - 5 tracks
		selection = selection - 42;
		selectedGroup = 2;
		setBackground("darkest-dungeon");
	} else if(selection < 49) {	// Darkest Dungeon Ambient Torchless - 2 tracks
		selection = selection - 47;
		selectedGroup = 3;
		setBackground("darkest-dungeon");
	}
	
	var link1ID = youtube_parser(leftFolders[selectedGroup].folder[selection].url);
	var link2ID = youtube_parser(rightFolders[selectedGroup].folder[selection].url);
    player1.loadVideoById(link1ID);
    player2.loadVideoById(link2ID);

    document.getElementById("dualVideoList").selectedIndex = 0;

    player1.seekTo(0);
	player1.pauseVideo();
	player2.seekTo(0);
	player2.pauseVideo();
	playIcon();

	if(document.getElementById('toggle').checked == false) {
		document.getElementById('toggle').checked = true;
	    player1.mute();
	    player2.unMute();
	    document.getElementById('play').className = 'play2';
	    document.getElementById('img').className = 'img2';
	    document.getElementById('volume').className = 'volume2';
	}

	document.getElementById("videoList2").blur();
}

function syncPlayers() {
	var selection = document.getElementById("dualVideoList").selectedIndex - 1;

	var selectedGroup = 0;
	if(selection < 10) { // Darkest Dungeon Singles - 11 tracks
		selectedGroup = 0;
		setBackground("darkest-dungeon");
	} else if(selection < 11) { // The Crimson Court - 1 tracks
		selection = selection - 10;
		selectedGroup = 1;
		setBackground("crimson-court");
	} else if(selection < 16) { // The Color of Madness - 5 tracks
		selection = selection - 11;
		selectedGroup = 2;
		setBackground("color-of-madness");
	} else if(selection < 76) { // The Witcher 3 - 60 tracks
		selection = selection - 16;
		selectedGroup = 3;
		setBackground("witcher-logo");
	} else if(selection < 87) { // Hearts of Stone - 11 tracks
		selection = selection - 76;
		selectedGroup = 4;
		setBackground("hearts-of-stone-logo");
	} else if(selection < 112) { // Blood and Wine - 25 tracks
		selection = selection - 87;
		selectedGroup = 5;
		setBackground("blood-and-wine-logo");
	} else if(selection < 138) { // Into The Breach - 26 tracks
		selection = selection - 112;
		selectedGroup = 8;
		setBackground("into-the-breach");
	}

	var linkID = youtube_parser(centerFolders[selectedGroup].folder[selection].url);
    player1.loadVideoById(linkID);
    player2.loadVideoById(linkID);

    document.getElementById("videoList1").selectedIndex = 0;
    document.getElementById("videoList2").selectedIndex = 0;

    player1.seekTo(0);
	player1.pauseVideo();
	player2.seekTo(0);
	player2.pauseVideo();
	playIcon();

	document.getElementById("dualVideoList").blur();
}

// Play and Toggle button functions
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

  document.getElementById('play').blur();
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
    document.getElementById('volume').className = 'volume';
  } else {
    player2.unMute();
    player1.mute();
    document.getElementById('play').className = 'play2';
    document.getElementById('img').className = 'img2';
    document.getElementById('volume').className = 'volume2';
  }
}

// Background image changing
function setBackground(image) {
	var urlString = 'url(assets/' + image + '.png)';
	document.getElementById("container").style.backgroundImage = urlString;
}

// Textfield URL video queueing
function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function loadVideo1() {
  var url = document.getElementById("link1").value;
  var link1ID = youtube_parser(url);
  player1.loadVideoById(link1ID);
  player1.seekTo(0);
  player1.pauseVideo();
  playIcon();
  document.getElementById("link1").blur();
}

function loadVideo2() {
  var url = document.getElementById("link2").value;
  var link2ID = youtube_parser(url);
  player2.loadVideoById(link2ID);
  player2.seekTo(0);
  player2.pauseVideo();
  playIcon();
  document.getElementById("link2").blur();
}

function loadDualVideos() {
	var url = document.getElementById("dualLink").value;
	var linkID = youtube_parser(url);
	player1.loadVideoById(linkID);
	player2.loadVideoById(linkID);
	player1.seekTo(0);
	player1.pauseVideo();
	player2.seekTo(0);
	player2.pauseVideo();
	playIcon();
	document.getElementById("dualLink").blur();
}

// Volume Slider
function changeVolume(val) {
	player1.setVolume(val);
	player2.setVolume(val);
}