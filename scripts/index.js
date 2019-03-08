document.onkeydown = function(event) {
  var box = document.getElementById("toggle");
  
  if(event.keyCode == 49) {
    play();
  }
  if(event.keyCode == 84) {
    (box.checked) ? box.checked=false : box.checked=true;
    check();
    return true;
  }
}

// Select Menus
var menu1 = [
	// Fire Emblem: Awakening
	{
		title: "Aggression - Fire Emblem: Awakening",
		url: "https://youtu.be/9K9y1cKVMIU"
	},
	{
		title: "Annihilation - Fire Emblem: Awakening",
		url: "https://youtu.be/_M3oin5KBGU"
	},
	{
		title: "Assault - Fire Emblem: Awakening",
		url: "https://youtu.be/BCsZhEEdPTA"
	},
	{
		title: "Champion - Fire Emblem: Awakening",
		url: "https://youtu.be/HyjLmvdVQ4s"
	},
  	{ 	
  		title: "Chaos - Fire Emblem: Awakening",
    	url: "https://youtu.be/tw03z6_6bRE"
  	},
  	{ 	
  		title: "Conquest - Fire Emblem: Awakening",
    	url: "https://youtu.be/NpuRAyEdkYk"
	},
	{
		title: "Destiny - Fire Emblem: Awakening",
		url: "https://youtu.be/IMyAwlG791E"
	},
	{
		title: "Divine Decree - Fire Emblem: Awakening",
		url: "https://youtu.be/dqhMprY0mqM"
	},
	{
		title: "Duty - Fire Emblem: Awakening",
		url: "https://youtu.be/j51sAfHGhSs"
	},
	{
		title: "Prelude - Fire Emblem: Awakening",
		url: "https://youtu.be/iZ8UNQ9rd8Y"
	},
	{
		title: "Rival (Intro) - Fire Emblem: Awakening",
		url: "https://youtu.be/8Oe1gv3DdY8"
	},
	{
		title: "Storm Clouds - Fire Emblem: Awakening",
		url: "https://youtu.be/fYrCUODorXE"
	},
	{
		title: "Training - Fire Emblem: Awakening",
		url: "https://youtu.be/ysX_CvJdpuM"
	},

	// Fire Emblem: Fates
	{
		title: "A Dark Fall - Fire Emblem: Fates",
		url: "https://youtu.be/gBQFNUJ8s2A"
	},
	{
		title: "Alight - Fire Emblem: Fates",
		url: "https://youtu.be/KA6IVBtUx1w"
	},
	{
		title: "Dark Wastes - Fire Emblem: Fates",
		url: "https://youtu.be/F1f9CRJisnE"
	},
	{
		title: "Destiny, Help Us - Fire Emblem: Fates",
		url: "https://youtu.be/XCa1Vl8deYA"
	},
	{
		title: "Dignity of Contest - Fire Emblem: Fates",
		url: "https://youtu.be/zzSMJH_HLYY"
	},
	{
		title: "Dusk Falls - Fire Emblem: Fates",
		url: "https://youtu.be/IYFI_JrWSEE"
	},
	{
		title: "Far Away - Fire Emblem: Fates",
		url: "https://youtu.be/b6C0Yi2-CyM"
	},
	{
		title: "Far Dawn - Fire Emblem: Fates",
		url: "https://youtu.be/UpXxLHjw2E8"
	},
	{
		title: "Glory/Ruin - Fire Emblem: Fates",
		url: "https://youtu.be/diEQtm9ULG4"
	},
	{
		title: "Guest of Light - Fire Emblem: Fates",
		url: "https://youtu.be/eMUXVo5zq6A"
	},
	{
		title: "Homesick (Light) - Fire Emblem: Fates",
		url: "https://youtu.be/d6P3GB1qQk8"
	},
	{
		title: "Justice RIP - Fire Emblem: Fates",
		url: "https://youtu.be/b-RZpoiSFpk"
	},
	{
		title: "Knowledge - Fire Emblem: Fates",
		url: "https://youtu.be/P0F7O9Psyg4"
	},
	{
		title: "Land Below - Fire Emblem: Fates",
		url: "https://youtu.be/2E4a0EHns_k"
	},
	{
		title: "No Justice - Fire Emblem: Fates",
		url: "https://youtu.be/_PYIQBkJRR8"
	},
	{
		title: "Paradise (Light) - Fire Emblem: Fates",
		url: "https://youtu.be/2E4a0EHns_k"
	},
	{
		title: "Past Below - Fire Emblem: Fates",
		url: "https://youtu.be/hZBqQ_3oOho"
	},
	{
		title: "Past Light - Fire Emblem: Fates",
		url: "https://youtu.be/10kqK0fMk28"
	},
	{
		title: "Prelude to Disaster - Fire Emblem: Fates",
		url: "https://youtu.be/Uo2H7K_WJ_o"
	},
	{
		title: "Quiet Burn - Fire Emblem: Fates",
		url: "https://youtu.be/J43Rqj1lf-M"
	},
	{
		title: "Rage in the Light - Fire Emblem: Fates",
		url: "https://youtu.be/HdIBCaeJ5Jk"
	},
	{
		title: "Resolve (Light) - Fire Emblem: Fates",
		url: "https://youtu.be/8Mfi6CUCiXU"
	},
	{
		title: "Road Taken - Fire Emblem: Fates",
		url: "https://youtu.be/OShvQvG_Obw"
	},
	{
		title: "Rush (Light) - Fire Emblem: Fates",
		url: "https://youtu.be/Xp3sRVYgl6M"
	},
	{
		title: "Sea of Aspiration - Fire Emblem: Fates",
		url: "https://youtu.be/QxxmHHjAMr4"
	},
	{
		title: "Thorn in You - Fire Emblem: Fates",
		url: "https://youtu.be/AVwMGElwAWE"
	},
	{
		title: "Vanity Judge - Fire Emblem: Fates",
		url: "https://youtu.be/_j0GFsvKkJ0"
	},
	{
		title: "Woleb Tsap - Fire Emblem: Fates",
		url: "https://youtu.be/nVu8ROMiY7M"
	},
	{
		title: "You of the Light - Fire Emblem: Fates",
		url: "https://www.youtube.com/watch?v=vDk2N42FBn8&list=PL6akIKaXBeU2Grz-eLgC_o7ddAxfYfGQl&index=129"
	},

	// Darkest Dungeon
	{
		title: "Cove Combat - Darkest Dungeon",
		url: "https://youtu.be/8uS2ojmIA_s"
	},
	{
		title: "Ruins Combat - Darkest Dungeon",
		url: "https://youtu.be/Y8Zn7iWT4eQ"
	},
	{ 	
		title: "Warrens Combat - Darkest Dungeon",
    	url: "https://youtu.be/_NbtqGyIOio"
	},
	{
		title: "Weald Combat - Darkest Dungeon",
		url: "https://youtu.be/sPREO8Tab9Q"
	},
	{
		title: "Final Combat - Darkest Dungeon",
		url: "https://youtu.be/gJnziEdus_Q"
	}
];

var menu2 = [
	// Fire Emblem: Awakening
	{
		title: "Aggression (Galvanized) - Fire Emblem: Awakening",
		url: "https://youtu.be/XRK3fyYAB4E"
	},
	{
		title: "Annihilation (Galvanized) - Fire Emblem: Awakening",
		url: "https://youtu.be/98jJXTRRftI"
	},
	{
		title: "Assault (Galvanized) - Fire Emblem: Awakening",
		url: "https://youtu.be/Hi7Lea2tifU"
	},
	{
		title: "Champion (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/Qyvzb8nQRyc"
	},
  	{ 	
  		title: "Chaos (Ablaze) - Fire Emblem: Awakening",
    	url: "https://youtu.be/4Uuwsy9Tyto"
  	},

  	{ 	
  		title: "Conquest (Ablaze) - Fire Emblem: Awakening",
    	url: "https://youtu.be/EpflXpqk4CA"
	},
	{
		title: "Destiny (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/IVNub5ztLvs"
	},
	{
		title: "Divine Decree (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/-x_BCJG80DA"
	},
	{
		title: "Duty (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/i-J16DLsVkg"
	},
	{
		title: "Prelude (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/Iyrku8k8GiU"
	},
	{
		title: "Rival - Fire Emblem: Awakening",
		url: "https://youtu.be/8Tv4CdEe1_g"
	},
	{
		title: "Storm Clouds (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/eUmaUanZVZU"
	},
	{
		title: "Training (Ablaze) - Fire Emblem: Awakening",
		url: "https://youtu.be/LM3K-UVbY0g"
	},

	// Fire Emblem: Fates
	{
		title: "A Dark Fall (Fire) - Fire Emblem: Fates",
		url: "https://youtu.be/mQxUS9Ium24"
	},
	{
		title: "Alight (Storm) - Fire Emblem: Fates",
		url: "https://youtu.be/eqvM63tUz2Q"
	},
	{
		title: "Dark Wastes (Fire) - Fire Emblem: Fates",
		url: "https://youtu.be/n2Z3oOgP1Fw"
	},
	{
		title: "Destiny By Blood - Fire Emblem: Fates",
		url: "https://youtu.be/HBqtbyETvoY"
	},
	{
		title: "Dignity of Contest (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/IYFI_JrWSEE"
	},
	{
		title: "Dusk Falls (Fire) - Fire Emblem: Fates",
		url: "https://youtu.be/QV0vEhQg-iA"
	},
	{
		title: "Far Away (Deeds) - Fire Emblem: Fates",
		url: "https://youtu.be/AGokI2L1gwM"
	},
	{
		title: "Far Dawn (Storm) - Fire Emblem: Fates",
		url: "https://youtu.be/SPNbEEUVvBg"
	},
	{
		title: "Glory/Ruin (Deeds) - Fire Emblem: Fates",
		url: "https://youtu.be/Q1qmTTDtlg4"
	},
	{
		title: "Guest of Shade - Fire Emblem: Fates",
		url: "https://youtu.be/I8jH3lZ9YLg"
	},
	{
		title: "Homesick (Dark) - Fire Emblem: Fates",
		url: "https://www.youtube.com/watch?v=v_ffupv0Fag&list=PL6akIKaXBeU2Grz-eLgC_o7ddAxfYfGQl&t=31s&index=43"
	},
	{
		title: "Justice RIP (Storm) - Fire Emblem: Fates",
		url: "https://youtu.be/ah_n2aYQpVo"
	},
	{
		title: "Knowledge (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/NKdI1Rpj6Ns"
	},
	{
		title: "Land Below (Flow) - Fire Emblem: Fates",
		url: "https://youtu.be/IDSMBiouV-o"
	},
	{
		title: "No Justice (Fire) - Fire Emblem: Fates",
		url: "https://youtu.be/DYf9RvC7HkQ"
	},
	{
		title: "Paradise (Dark) - Fire Emblem: Fates",
		url: "https://youtu.be/JlmBeLoFoCM"
	},
	{
		title: "Past Below (Flow) - Fire Emblem: Fates",
		url: "https://youtu.be/sJAksG6wIBA"
	},
	{
		title: "Past Light (Storm) - Fire Emblem: Fates",
		url: "https://youtu.be/B-1Qc6uIUII"
	},
	{
		title: "Prelude to Dispute - Fire Emblem: Fates",
		url: "https://youtu.be/yectPSgErp0"
	},
	{
		title: "Quiet Burn (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/zkFmXRnIKgU"
	},
	{
		title: "Raging Dark Winds - Fire Emblem: Fates",
		url: "https://youtu.be/Rj9OZdHliJc"
	},
	{
		title: "Resolve (Dark) - Fire Emblem: Fates",
		url: "https://youtu.be/q1hxqLJ4bpE"
	},
	{
		title: "Road Taken (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/MBmer-5NinI"
	},
	{
		title: "Rush (Dark) - Fire Emblem: Fates",
		url: "https://youtu.be/wNjIo-w4XEA"
	},
	{
		title: "Sea of Aspiration (Flow) - Fire Emblem: Fates",
		url: "https://youtu.be/aryy8Gqx85c"
	},
	{
		title: "Thorn in You (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/5LCQ3N4a4fg"
	},
	{
		title: "Vanity Judge (Roar) - Fire Emblem: Fates",
		url: "https://youtu.be/uglKlZFv55o"
	},
	{
		title: "Woleb Tsap (Flow) - Fire Emblem: Fates",
		url: "https://youtu.be/WoQTLzlCeVs"
	},
	{
		title: "You of the Dark - Fire Emblem: Fates",
		url: "https://youtu.be/IwtmINMFAGU"
	},

	// Darkest Dungeon
	{
		title: "Cove Ambush - Darkest Dungeon",
		url: "https://www.youtube.com/watch?v=vrIm5phJhLA&t=0s&list=PLAIvnH3vcz-yPa_CwaLvyNyZVs8ncGmU3&index=14"
	},
	{
		title: "Ruins Ambush - Darkest Dungeon",
		url: "https://youtu.be/Cjj7J17yRhs"
	},
	{ 	
		title: "Warrens Ambush - Darkest Dungeon",
    	url: "https://youtu.be/fyPdjvRQbY8"
	},
	{
		title: "Weald Ambush - Darkest Dungeon",
		url: "https://youtu.be/oR7rpJS3fAk"
	},
	{
		title: "Final Combat - Darkest Dungeon",
		url: "https://youtu.be/gJnziEdus_Q"
	}
];

var leftMenu = document.getElementById("videoList1");
for(var i = 0; i < menu1.length; i++) {
	var el = document.createElement("option");
	el.textContent = i+1 + ". " + menu1[i].title;
	el.value = menu1[i].url;
	leftMenu.appendChild(el);
}

var rightMenu = document.getElementById("videoList2");
for(var i = 0; i < menu2.length; i++) {
	var el = document.createElement("option");
	el.textContent = i+1 + ". " + menu2[i].title;
	el.value = menu2[i].url;
	rightMenu.appendChild(el);
}

function syncMenu1() {
	var selection = document.getElementById("videoList1").selectedIndex;
	document.getElementById("videoList2").selectedIndex = selection;
	
	var link1ID = youtube_parser(menu1[selection].url);
	var link2ID = youtube_parser(menu2[selection].url);
    player1.loadVideoById(link1ID);
    player2.loadVideoById(link2ID);

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
	}
}

function syncMenu2() {
	var selection = document.getElementById("videoList2").selectedIndex;
	document.getElementById("videoList1").selectedIndex = selection;
	
	var link1ID = youtube_parser(menu1[selection].url);
	var link2ID = youtube_parser(menu2[selection].url);
    player1.loadVideoById(link1ID);
    player2.loadVideoById(link2ID);

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
}

function onPlayer2Ready(event) {
  event.target.seekTo(0, true);
  player2.mute();
  player2.pauseVideo();
}

// 4. 
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player1.playVideo();
    player2.playVideo();
  }
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

/*function fadeIn() {
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
}*/

// 6. Textfield URL video queueing
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
}

function loadVideo2() {
  var url = document.getElementById("link2").value;
  var link2ID = youtube_parser(url);
  player2.loadVideoById(link2ID);
  player2.seekTo(0);
  player2.pauseVideo();
  playIcon();
}