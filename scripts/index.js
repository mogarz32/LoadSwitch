document.onkeydown = function(event) {
  // 1 key = play/pause
  if(event.keyCode == 49) {
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

// Submenus
var awakening = [
	{
		title: "Aggression",
		url: "https://youtu.be/9K9y1cKVMIU"
	},
	{
		title: "Annihilation",
		url: "https://youtu.be/_M3oin5KBGU"
	},
	{
		title: "Assault",
		url: "https://youtu.be/BCsZhEEdPTA"
	},
	{
		title: "Champion",
		url: "https://youtu.be/HyjLmvdVQ4s"
	},
  	{ 	
  		title: "Chaos",
    	url: "https://youtu.be/tw03z6_6bRE"
  	},
  	{ 	
  		title: "Conquest",
    	url: "https://youtu.be/NpuRAyEdkYk"
	},
	{
		title: "Destiny",
		url: "https://youtu.be/IMyAwlG791E"
	},
	{
		title: "Divine Decree",
		url: "https://youtu.be/dqhMprY0mqM"
	},
	{
		title: "Duty",
		url: "https://youtu.be/j51sAfHGhSs"
	},
	{
		title: "Prelude",
		url: "https://youtu.be/iZ8UNQ9rd8Y"
	},
	{
		title: "Rival (Intro)",
		url: "https://youtu.be/8Oe1gv3DdY8"
	},
	{
		title: "Storm Clouds",
		url: "https://youtu.be/fYrCUODorXE"
	},
	{
		title: "Training",
		url: "https://youtu.be/ysX_CvJdpuM"
	}
];

var awakeningAblaze = [
	{
		title: "Aggression (Galvanized)",
		url: "https://youtu.be/XRK3fyYAB4E"
	},
	{
		title: "Annihilation (Galvanized)",
		url: "https://youtu.be/98jJXTRRftI"
	},
	{
		title: "Assault (Galvanized)",
		url: "https://youtu.be/Hi7Lea2tifU"
	},
	{
		title: "Champion (Ablaze)",
		url: "https://youtu.be/Qyvzb8nQRyc"
	},
  	{ 	
  		title: "Chaos (Ablaze)",
    	url: "https://youtu.be/4Uuwsy9Tyto"
  	},
  	{ 	
  		title: "Conquest (Ablaze)",
    	url: "https://youtu.be/EpflXpqk4CA"
	},
	{
		title: "Destiny (Ablaze)",
		url: "https://youtu.be/IVNub5ztLvs"
	},
	{
		title: "Divine Decree (Ablaze)",
		url: "https://youtu.be/-x_BCJG80DA"
	},
	{
		title: "Duty (Ablaze)",
		url: "https://youtu.be/i-J16DLsVkg"
	},
	{
		title: "Prelude (Ablaze)",
		url: "https://youtu.be/Iyrku8k8GiU"
	},
	{
		title: "Rival",
		url: "https://youtu.be/8Tv4CdEe1_g"
	},
	{
		title: "Storm Clouds (Ablaze)",
		url: "https://youtu.be/eUmaUanZVZU"
	},
	{
		title: "Training (Ablaze)",
		url: "https://youtu.be/LM3K-UVbY0g"
	}
];

var fates = [
	{
		title: "A Dark Fall",
		url: "https://youtu.be/gBQFNUJ8s2A"
	},
	{
		title: "Alight",
		url: "https://youtu.be/KA6IVBtUx1w"
	},
	{
		title: "Dark Wastes",
		url: "https://youtu.be/F1f9CRJisnE"
	},
	{
		title: "Destiny, Help Us",
		url: "https://youtu.be/XCa1Vl8deYA"
	},
	{
		title: "Dignity of Contest",
		url: "https://youtu.be/zzSMJH_HLYY"
	},
	{
		title: "Dusk Falls",
		url: "https://youtu.be/IYFI_JrWSEE"
	},
	{
		title: "Far Away",
		url: "https://youtu.be/b6C0Yi2-CyM"
	},
	{
		title: "Far Dawn",
		url: "https://youtu.be/UpXxLHjw2E8"
	},
	{
		title: "Glory/Ruin",
		url: "https://youtu.be/diEQtm9ULG4"
	},
	{
		title: "Guest of Light",
		url: "https://youtu.be/eMUXVo5zq6A"
	},
	{
		title: "Homesick (Light)",
		url: "https://youtu.be/d6P3GB1qQk8"
	},
	{
		title: "Justice RIP",
		url: "https://youtu.be/b-RZpoiSFpk"
	},
	{
		title: "Knowledge",
		url: "https://youtu.be/P0F7O9Psyg4"
	},
	{
		title: "Land Below",
		url: "https://youtu.be/2E4a0EHns_k"
	},
	{
		title: "No Justice",
		url: "https://youtu.be/_PYIQBkJRR8"
	},
	{
		title: "Paradise (Light)",
		url: "https://youtu.be/2E4a0EHns_k"
	},
	{
		title: "Past Below",
		url: "https://youtu.be/hZBqQ_3oOho"
	},
	{
		title: "Past Light",
		url: "https://youtu.be/10kqK0fMk28"
	},
	{
		title: "Prelude to Disaster",
		url: "https://youtu.be/Uo2H7K_WJ_o"
	},
	{
		title: "Quiet Burn",
		url: "https://youtu.be/J43Rqj1lf-M"
	},
	{
		title: "Rage in the Light",
		url: "https://youtu.be/HdIBCaeJ5Jk"
	},
	{
		title: "Resolve (Light)",
		url: "https://youtu.be/8Mfi6CUCiXU"
	},
	{
		title: "Road Taken",
		url: "https://youtu.be/OShvQvG_Obw"
	},
	{
		title: "Rush (Light)",
		url: "https://youtu.be/Xp3sRVYgl6M"
	},
	{
		title: "Sea of Aspiration",
		url: "https://youtu.be/QxxmHHjAMr4"
	},
	{
		title: "Thorn in You",
		url: "https://youtu.be/AVwMGElwAWE"
	},
	{
		title: "Vanity Judge",
		url: "https://youtu.be/_j0GFsvKkJ0"
	},
	{
		title: "Woleb Tsap",
		url: "https://youtu.be/nVu8ROMiY7M"
	},
	{
		title: "You of the Light",
		url: "https://www.youtube.com/watch?v=vDk2N42FBn8&list=PL6akIKaXBeU2Grz-eLgC_o7ddAxfYfGQl&index=129"
	}
];

var fatesAblaze = [
	{
		title: "A Dark Fall (Fire)",
		url: "https://youtu.be/mQxUS9Ium24"
	},
	{
		title: "Alight (Storm)",
		url: "https://youtu.be/eqvM63tUz2Q"
	},
	{
		title: "Dark Wastes (Fire)",
		url: "https://youtu.be/n2Z3oOgP1Fw"
	},
	{
		title: "Destiny By Blood",
		url: "https://youtu.be/HBqtbyETvoY"
	},
	{
		title: "Dignity of Contest (Roar)",
		url: "https://youtu.be/IYFI_JrWSEE"
	},
	{
		title: "Dusk Falls (Fire)",
		url: "https://youtu.be/QV0vEhQg-iA"
	},
	{
		title: "Far Away (Deeds)",
		url: "https://youtu.be/AGokI2L1gwM"
	},
	{
		title: "Far Dawn (Storm)",
		url: "https://youtu.be/SPNbEEUVvBg"
	},
	{
		title: "Glory/Ruin (Deeds)",
		url: "https://youtu.be/Q1qmTTDtlg4"
	},
	{
		title: "Guest of Shade",
		url: "https://youtu.be/I8jH3lZ9YLg"
	},
	{
		title: "Homesick (Dark)",
		url: "https://www.youtube.com/watch?v=v_ffupv0Fag&list=PL6akIKaXBeU2Grz-eLgC_o7ddAxfYfGQl&t=31s&index=43"
	},
	{
		title: "Justice RIP (Storm)",
		url: "https://youtu.be/ah_n2aYQpVo"
	},
	{
		title: "Knowledge (Roar)",
		url: "https://youtu.be/NKdI1Rpj6Ns"
	},
	{
		title: "Land Below (Flow)",
		url: "https://youtu.be/IDSMBiouV-o"
	},
	{
		title: "No Justice (Fire)",
		url: "https://youtu.be/DYf9RvC7HkQ"
	},
	{
		title: "Paradise (Dark)",
		url: "https://youtu.be/JlmBeLoFoCM"
	},
	{
		title: "Past Below (Flow)",
		url: "https://youtu.be/sJAksG6wIBA"
	},
	{
		title: "Past Light (Storm)",
		url: "https://youtu.be/B-1Qc6uIUII"
	},
	{
		title: "Prelude to Dispute",
		url: "https://youtu.be/yectPSgErp0"
	},
	{
		title: "Quiet Burn (Roar)",
		url: "https://youtu.be/zkFmXRnIKgU"
	},
	{
		title: "Raging Dark Winds",
		url: "https://youtu.be/Rj9OZdHliJc"
	},
	{
		title: "Resolve (Dark)",
		url: "https://youtu.be/q1hxqLJ4bpE"
	},
	{
		title: "Road Taken (Roar)",
		url: "https://youtu.be/MBmer-5NinI"
	},
	{
		title: "Rush (Dark)",
		url: "https://youtu.be/wNjIo-w4XEA"
	},
	{
		title: "Sea of Aspiration (Flow)",
		url: "https://youtu.be/aryy8Gqx85c"
	},
	{
		title: "Thorn in You (Roar)",
		url: "https://youtu.be/5LCQ3N4a4fg"
	},
	{
		title: "Vanity Judge (Roar)",
		url: "https://youtu.be/uglKlZFv55o"
	},
	{
		title: "Woleb Tsap (Flow)",
		url: "https://youtu.be/WoQTLzlCeVs"
	},
	{
		title: "You of the Dark",
		url: "https://youtu.be/IwtmINMFAGU"
	},
];

var darkestAmbient = [
	{
		title: "Ruins Ambient",
		url: "https://youtu.be/iX-eKFWXvG4"
	},
	{
		title: "Warrens Ambient",
		url: "https://youtu.be/7-OdIYcLHE8"
	}
];

var darkestTorchless = [
	{
		title: "Ruins Torchless",
		url: "https://youtu.be/XHEnMwm9L8w"
	},
	{
		title: "Warrens Torchless",
		url: "https://youtu.be/WMwSh4UswEc"
	}
];

var darkestBattle = [
	{
		title: "Cove Combat",
		url: "https://youtu.be/8uS2ojmIA_s"
	},
	{
		title: "Ruins Combat",
		url: "https://youtu.be/Y8Zn7iWT4eQ"
	},
	{ 	
		title: "Warrens Combat",
    	url: "https://youtu.be/_NbtqGyIOio"
	},
	{
		title: "Weald Combat",
		url: "https://youtu.be/sPREO8Tab9Q"
	}
];

var darkestAmbush = [
	{
		title: "Cove Ambush",
		url: "https://www.youtube.com/watch?v=vrIm5phJhLA&t=0s&list=PLAIvnH3vcz-yPa_CwaLvyNyZVs8ncGmU3&index=14"
	},
	{
		title: "Ruins Ambush",
		url: "https://youtu.be/Cjj7J17yRhs"
	},
	{ 	
		title: "Warrens Ambush",
    	url: "https://youtu.be/fyPdjvRQbY8"
	},
	{
		title: "Weald Ambush",
		url: "https://youtu.be/oR7rpJS3fAk"
	}
];



// Single Tracks for Center Dropdown
var darkestSingles = [
	{
		title: "Main Theme",
		url: "https://youtu.be/xjnrYyZqm9M"
	},
	{
		title: "House of Ruin",
		url: "https://youtu.be/0ZC7CU66g2U"
	},
	{
		title: "Terror and Madness",
		url: "https://youtu.be/Qn02mFkiWt0"
	},
	{
		title: "Town in Chaos",
		url: "https://youtu.be/2zx2FU6X65s"
	},
	{
		title: "The Hamlet",
		url: "https://youtu.be/_QXpj7g5gio"
	},
	{
		title: "A Brief Respite (Camp Theme)",
		url: "https://youtu.be/uLGIyx8mtxM"
	},
	{
		title: "Weald Ambient",
		url: "https://youtu.be/3bMAF_C1rbA"
	},	
	{
		title: "Siren Battle",
		url: "https://youtu.be/6d8JWq0N-r4"
	},
	{
		title: "Return to the Warrens",
		url: "https://youtu.be/tnU7zf9YVoA"
	},	
	{
		title: "The Final Combat",
		url: "https://youtu.be/CsW72KIOd8U"
	}
];

var darkestCrimson = [
	{
		title: "Bloodletting",
		url: "https://youtu.be/z6wq0_wpShM"
	}
];

var darkestColor = [
	{
		title: "The Blasted Heath",
		url: "https://youtu.be/SzJYa9Z15-I"
	},
	{
		title: "Dark Mitochondria",
		url: "https://youtu.be/nnZktHc3uI0"
	},
	{
		title: "The Senescence",
		url: "https://youtu.be/pMyRE_sQA-Q"
	},
	{
		title: "The Chloroplast of Cosmarium",
		url: "https://youtu.be/-3slUbcvS4U",
	},
	{
		title: "All Things Must Come",
		url: "https://youtu.be/usIK3yMjPTc",
	}
];

var witcher = [];
var witcherHearts = [];
var witcherBlood = [];
var attackOnTitan = [];
var WoW = [];

var intoTheBreach = [
	{
		title: "Open a Breach",
		url: "https://youtu.be/Z6ypNVvwEPM",
	},
	{
		title: "Old Earth",
		url: "https://youtu.be/dxC4Vh8TbkM",
	},
	{
		title: "Antiquity Row",
		url: "https://youtu.be/OKACob95AKc",
	},
	{
		title: "Old War Machines",
		url: "https://youtu.be/gYfqH97b-sY",
	},
	{
		title: "Relics",
		url: "https://youtu.be/xoY-ohE764M",
	},
	{
		title: "Seismic Activity",
		url: "https://youtu.be/8FlVr9JIsZI",
	},
	{
		title: "Region Secured",
		url: "https://youtu.be/GmdZ9fPPZGw",
	},
	{
		title: "Red Sands",
		url: "https://youtu.be/z8W68dP6AmU",
	},
	{
		title: "Rusting Hulks",
		url: "https://youtu.be/ltpHWc4RRf0",
	},
	{
		title: "The Blast Garden",
		url: "https://youtu.be/3BSdUgmgn84",
	},
	{
		title: "Cataclysm",
		url: "https://youtu.be/piR8gnk5wjc",
	},
	{
		title: "Brood Mother",
		url: "https://youtu.be/NozmvCBwvpo",
	},
	{
		title: "Zenith",
		url: "https://youtu.be/8aBf0nit2kk",
	},
	{
		title: "Blitzkrieg",
		url: "https://youtu.be/777Mgil6wRM",
	},
	{
		title: "Pinnacle Robotics",
		url: "https://youtu.be/hyg9QNi4Ngg",
	},
	{
		title: "Rift Riders",
		url: "https://youtu.be/8S0GcxBWYPs",
	},
	{
		title: "Frozen Death",
		url: "https://youtu.be/0es5zF0xSeM",
	},
	{
		title: "Detritus",
		url: "https://youtu.be/REt3OmAoZeM",
	},
	{
		title: "The Wasteland",
		url: "https://youtu.be/MparVWizOvE",
	},
	{
		title: "Reprocessing",
		url: "https://youtu.be/v5joIgM-IbY",
	},
	{
		title: "A.C.I.D.",
		url: "https://youtu.be/OdnO9c8zaq0",
	},
	{
		title: "Hive Leader",
		url: "https://youtu.be/6inqFR3SM0Q",
	},
	{
		title: "Apocalypse",
		url: "https://youtu.be/n9f3lTJZaNk",
	},
	{
		title: "Into the Breach",
		url: "https://youtu.be/_Wt3r_W29no",
	},
	{
		title: "Don't Forget What I Taught You",
		url: "https://youtu.be/O_e6_E23-3I",
	},
	{
		title: "Trailer",
		url: "https://youtu.be/l1gILfL7ZCs",
	},
];

var haikyuu = [];
var pokemon = [];
var myHero = [];
var fateZero = [];
var journey = [];
var windwaker = [];
var naruto = [];
var erased = [];


// Dropdown menus
var leftFolders = [
	{
		name: "Fire Emblem: Awakening",
		folder: awakening
	},
	{
		name: "Fire Emblem: Fates",
		folder: fates
	},
	{
		name: "Darkest Dungeon: Full Light Battle",
		folder: darkestBattle
	},
	{
		name: "Darkest Dungeon: Ambient",
		folder: darkestAmbient
	}
];

var rightFolders = [
	{
		name: "Fire Emblem: Awakening",
		folder: awakeningAblaze
	},
	{
		name: "Fire Emblem: Fates",
		folder: fatesAblaze
	},
	{
		name: "Darkest Dungeon: Torchless Battle",
		folder: darkestAmbush
	},
	{
		name: "Darkest Dungeon: Torchless Ambient",
		folder: darkestTorchless
	}
];

var centerFolders = [
	{
		name: "Darkest Dungeon",
		folder: darkestSingles
	},
	{
		name: "Darkest Dungeon: The Crimson Court",
		folder: darkestCrimson
	},
	{
		name: "Darkest Dungeon: The Color of Madness",
		folder: darkestColor
	},
	{
		name: "The Witcher 3: Wild Hunt",
		folder: witcher
	},
	{
		name: "The Witcher 3: Hearts of Stone",
		folder: witcherHearts
	},
	{
		name: "The Witcher 3: Blood and Wine",
		folder: witcherBlood
	},
	{
		name: "Attack on Titan",
		folder: attackOnTitan
	},
	{
		name: "World of Warcraft",
		folder: WoW
	},
	{
		name: "Into the Breach",
		folder: intoTheBreach
	}
];

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

	var selectedGroup = 0;
	if(selection < 13) {
		selectedGroup = 0;
	} else if(selection < 42) {
		selection = selection - 13;
		selectedGroup = 1;
	} else if(selection < 46) {
		selection = selection - 42;
		selectedGroup = 2;
	} else if(selection < 48) {
		selection = selection - 46;
		selectedGroup = 3;
	}

	var link1ID = youtube_parser(leftFolders[selectedGroup].folder[selection].url);
	var link2ID = youtube_parser(rightFolders[selectedGroup].folder[selection].url);
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
	    document.getElementById('volume').className = 'volume';
	}

	document.getElementById("videoList1").blur();
}

function syncMenu2() {
	var selection = document.getElementById("videoList2").selectedIndex;
	document.getElementById("videoList1").selectedIndex = selection;

	var selectedGroup = 0;
	if(selection < 13) {
		selectedGroup = 0;
	} else if(selection < 42) {
		selection = selection - 13;
		selectedGroup = 1;
	} else if(selection < 46) {
		selection = selection - 42;
		selectedGroup = 2;
	} else if(selection < 48) {
		selection = selection - 46;
		selectedGroup = 3;
	}
	
	var link1ID = youtube_parser(leftFolders[selectedGroup].folder[selection].url);
	var link2ID = youtube_parser(rightFolders[selectedGroup].folder[selection].url);
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
	    document.getElementById('volume').className = 'volume2';
	}

	document.getElementById("videoList2").blur();
}

function syncPlayers() {
	var selection = document.getElementById("dualVideoList").selectedIndex - 1;

	var selectedGroup = 0;
	if(selection < 10) {
		selectedGroup = 0;
	} else if(selection < 11) {
		selection = selection - 10;
		selectedGroup = 1;
	} else if(selection < 16) {
		selection = selection - 11;
		selectedGroup = 2;
	} else if(selection < 42) { // Into The Breach
		selection = selection - 16;
		selectedGroup = 8;
	}

	var linkID = youtube_parser(centerFolders[selectedGroup].folder[selection].url);
    player1.loadVideoById(linkID);
    player2.loadVideoById(linkID);

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