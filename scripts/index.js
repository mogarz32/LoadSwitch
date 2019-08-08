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
		url: "https://youtu.be/eRT_xRPp2Zs"
	},
	{
		title: "Annihilation",
		url: "https://youtu.be/prxUvJju-PM"
	},
	{
		title: "Assault",
		url: "https://youtu.be/-74az5_UF_w"
	},
	{
		title: "Champion",
		url: "https://youtu.be/1475DI6NsmE"
	},
  	{ 	
  		title: "Chaos",
    	url: "https://youtu.be/W_FuSN8kFJQ"
  	},
  	{ 	
  		title: "Conquest",
    	url: "https://youtu.be/k8Tg4vqnoOg"
	},
	{
		title: "Destiny",
		url: "https://youtu.be/VuuEdvu1rVA"
	},
	{
		title: "Divine Decree",
		url: "https://youtu.be/Y-V6yXXt_XI"
	},
	{
		title: "Duty",
		url: "https://youtu.be/RoAb8Lskk-k"
	},
	{
		title: "Prelude",
		url: "https://youtu.be/j3HpCAQoBWA"
	},
	{
		title: "Rival (Intro)",
		url: "https://youtu.be/GPSGpADc5-E"
	},
	{
		title: "Storm Clouds",
		url: "https://youtu.be/ORFayFT93qw"
	},
	{
		title: "Training",
		url: "https://youtu.be/m3m7KeCTRCA"
	}
];

var awakeningAblaze = [
	{
		title: "Aggression (Galvanized)",
		url: "https://youtu.be/ZAR-08fCA-0"
	},
	{
		title: "Annihilation (Galvanized)",
		url: "https://youtu.be/cjbejwfz7vc"
	},
	{
		title: "Assault (Galvanized)",
		url: "https://youtu.be/iaOJUCoUQAQ"
	},
	{
		title: "Champion (Ablaze)",
		url: "https://youtu.be/EEBX4PVx0j4"
	},
  	{ 	
  		title: "Chaos (Ablaze)",
    	url: "https://youtu.be/75QVGFJcSjk"
  	},
  	{ 	
  		title: "Conquest (Ablaze)",
    	url: "https://youtu.be/eGjK0AeylrI"
	},
	{
		title: "Destiny (Ablaze)",
		url: "https://youtu.be/EHF1iz2X2AU"
	},
	{
		title: "Divine Decree (Ablaze)",
		url: "https://youtu.be/EeYdB-Id_g8"
	},
	{
		title: "Duty (Ablaze)",
		url: "https://youtu.be/NtVYoXE0Cv4"
	},
	{
		title: "Prelude (Ablaze)",
		url: "https://youtu.be/NiOM1aNXJIM"
	},
	{
		title: "Rival",
		url: "https://youtu.be/a4xlB_tKAPE"
	},
	{
		title: "Storm Clouds (Ablaze)",
		url: "https://youtu.be/51MlsyQaB7A"
	},
	{
		title: "Training (Galvanized)",
		url: "https://youtu.be/DjrTNay5s9g"
	}
];

var fates = [
	{
		title: "A Dark Fall",
		url: "https://youtu.be/XF9_4V7eCSg"
	},
	{
		title: "Alight",
		url: "https://youtu.be/a0S_guokfHk"
	},
	{
		title: "Dark Wastes",
		url: "https://youtu.be/LUfT5woqe6A"
	},
	{
		title: "Destiny, Help Us",
		url: "https://youtu.be/e2DeBT8GO8o"
	},
	{
		title: "Dignity of Contest",
		url: "https://youtu.be/e-svbJor0a8"
	},
	{
		title: "Dusk Falls",
		url: "https://youtu.be/yWC1JpKWIgM"
	},
	{
		title: "Far Away",
		url: "https://www.youtube.com/watch?v=vqXhrh2e1v8&list=PLCBrUTafYz3YI00R5D7A5MMQFPwAVCzKk&index=40"
	},
	{
		title: "Far Dawn",
		url: "https://youtu.be/sYnabd_jAMg"
	},
	{
		title: "Glory/Ruin",
		url: "https://youtu.be/XdLaoWh6A_g"
	},
	{
		title: "Guest of Light",
		url: "https://youtu.be/0v7-AP1IRDY"
	},
	{
		title: "Homesick (Light)",
		url: "https://youtu.be/jmAaQLX0X3k"
	},
	{
		title: "Justice RIP",
		url: "https://youtu.be/zE2yJ2m3ovo"
	},
	{
		title: "Knowledge",
		url: "https://youtu.be/VPdPjgBF4jI"
	},
	{
		title: "Land Below",
		url: "https://youtu.be/0PaiV0OZ5_g"
	},
	{
		title: "No Justice",
		url: "https://youtu.be/mwB_J-e9O7A"
	},
	{
		title: "Paradise (Light)",
		url: "https://youtu.be/gpSBm6KC67I"
	},
	{
		title: "Past Below",
		url: "https://youtu.be/2mbSzdn3QDE"
	},
	{
		title: "Past Light",
		url: "https://youtu.be/Di0Q5RtSNY4"
	},
	{
		title: "Prelude to Disaster",
		url: "https://youtu.be/ZHjuXL1AZUI"
	},
	{
		title: "Quiet Burn",
		url: "https://youtu.be/wCQfxV3CARk"
	},
	{
		title: "Rage in the Light",
		url: "https://youtu.be/CaTYm5_SzJw"
	},
	{
		title: "Resolve (Light)",
		url: "https://youtu.be/zqF3urmS3Ms"
	},
	{
		title: "Road Taken",
		url: "https://youtu.be/OS22Ft8cnrk"
	},
	{
		title: "Rush (Light)",
		url: "https://youtu.be/14JSIvYrPgI"
	},
	{
		title: "Sea of Aspiration",
		url: "https://youtu.be/Cf0qFV1SQnE"
	},
	{
		title: "Thorn in You",
		url: "https://youtu.be/Fpya3o7sjfQ"
	},
	{
		title: "Vanity Judge",
		url: "https://youtu.be/wLA_CqxXAHo"
	},
	{
		title: "Woleb Tsap",
		url: "https://youtu.be/j3BnAqZlm7g"
	},
	{
		title: "You of the Light",
		url: "https://youtu.be/WerjZc8vm6Q"
	}
];

var fatesAblaze = [
	{
		title: "A Dark Fall (Fire)",
		url: "https://youtu.be/d8lVbAW78mk"
	},
	{
		title: "Alight (Storm)",
		url: "https://youtu.be/lnchoV5nMNg"
	},
	{
		title: "Dark Wastes (Fire)",
		url: "https://youtu.be/Ox9VQendePM"
	},
	{
		title: "Destiny By Blood",
		url: "https://youtu.be/MLn_jTYtDuE"
	},
	{
		title: "Dignity of Contest (Roar)",
		url: "https://youtu.be/XZCGLAzfXqo"
	},
	{
		title: "Dusk Falls (Fire)",
		url: "https://youtu.be/t_ty4keGgpk"
	},
	{
		title: "Far Away (Deeds)",
		url: "https://youtu.be/L734sVoGL8g"
	},
	{
		title: "Far Dawn (Storm)",
		url: "https://youtu.be/g0NQE2Cf1RI"
	},
	{
		title: "Glory/Ruin (Deeds)",
		url: "https://youtu.be/SMKDU3MNWmU"
	},
	{
		title: "Guest of Shade",
		url: "https://youtu.be/SQtVE3mcO9Q"
	},
	{
		title: "Homesick (Dark)",
		url: "https://youtu.be/s87q1zExTwo"
	},
	{
		title: "Justice RIP (Storm)",
		url: "https://youtu.be/z3ziqU1d1EI"
	},
	{
		title: "Knowledge (Roar)",
		url: "https://youtu.be/SzCHkVZmjlo"
	},
	{
		title: "Land Below (Flow)",
		url: "https://youtu.be/JeKS5uZWwuk"
	},
	{
		title: "No Justice (Fire)",
		url: "https://youtu.be/IDQaqF-uo2c"
	},
	{
		title: "Paradise (Dark)",
		url: "https://youtu.be/dDpWuYrMf70"
	},
	{
		title: "Past Below (Flow)",
		url: "https://youtu.be/0aGn_1K3CcE"
	},
	{
		title: "Past Light (Storm)",
		url: "https://youtu.be/B5TJWwFZF7k"
	},
	{
		title: "Prelude to Dispute",
		url: "https://youtu.be/MThpvmCS5mc"
	},
	{
		title: "Quiet Burn (Roar)",
		url: "https://youtu.be/PWAbCOGkdAg"
	},
	{
		title: "Raging Dark Winds",
		url: "https://youtu.be/PNcPi6fVa5s"
	},
	{
		title: "Resolve (Dark)",
		url: "https://youtu.be/rooYCL8Ku-Y"
	},
	{
		title: "Road Taken (Roar)",
		url: "https://youtu.be/0beVfFL1J2s"
	},
	{
		title: "Rush (Dark)",
		url: "https://youtu.be/ttrH8GZlFjk"
	},
	{
		title: "Sea of Aspiration (Flow)",
		url: "https://youtu.be/XL7qkfxOp7s"
	},
	{
		title: "Thorn in You (Roar)",
		url: "https://youtu.be/t_gWAZcGMkE"
	},
	{
		title: "Vanity Judge (Roar)",
		url: "https://youtu.be/a6Vlr8zt5Hw"
	},
	{
		title: "Woleb Tsap (Flow)",
		url: "https://youtu.be/2JgMyDJG27w"
	},
	{
		title: "You of the Dark",
		url: "https://youtu.be/xQA2TdTMWko"
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
	},	
	{
		title: "The Final Combat",
		url: "https://youtu.be/4EIAcIjnnQM"
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
	},
	{
		title: "The Final Combat (with Narrator Quotes)",
		url: "https://youtu.be/0uR1UfFy0SM"
	}
];



// Single Tracks for Center Dropdown
var darkestSingles = [
	{
		title: "Main Theme",
		url: "https://youtu.be/xjnrYyZqm9M"
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
		title: "Terror and Madness",
		url: "https://youtu.be/Qn02mFkiWt0"
	},
	{
		title: "House of Ruin",
		url: "https://youtu.be/0ZC7CU66g2U"
	},
	{
		title: "The End",
		url: "https://youtu.be/jFnWcCkeBF4"
	},
	{
		title: "Town in Chaos",
		url: "https://youtu.be/2zx2FU6X65s"
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
		title: "Weald Ambient",
		url: "https://youtu.be/3bMAF_C1rbA"
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

var witcher = [
	{
		title: "The Trail",
		url: "https://youtu.be/A5qyrFTJ9WA"
	},
	{
		title: "Geralt of Rivia",
		url: "https://youtu.be/DKdRDi72Ov8"
	},
	{
		title: "Eredin, King of the Hunt",
		url: "https://youtu.be/jTKOcx679BA"
	},
	{
		title: "Wake Up, Ciri",
		url: "https://youtu.be/W7uQmI1dOy4"
	},
	{
		title: "Aen Seidhe",
		url: "https://youtu.be/yjBN6ObgHiI"
	},
	{
		title: "Commanding the Fury",
		url: "https://www.youtube.com/watch?v=vq90Bu23uTo&list=PLgJZQv8L8x5n3czufV4KxXuMTls6HKLxB&t=0s&index=7"
	},
	{
		title: "Emhyr var Emreis",
		url: "https://youtu.be/xL0gDzsjpME"
	},
	{
		title: "Spikeroog",
		url: "https://youtu.be/5N3n019qCqo"
	},
	{
		title: "King Bran's Final Voyage",
		url: "https://youtu.be/kA_C5o0W8XA"
	},
	{
		title: "Silver for Monsters",
		url: "https://youtu.be/MCemYV0LLbg"
	},
	{
		title: "Whispers of Oxenfurt",
		url: "https://youtu.be/pQBQj-vi5hM"
	},
	{
		title: "The Nightingale",
		url: "https://youtu.be/f_TT8yiW3xg"
	},
	{
		title: "City of Intrigues",
		url: "https://youtu.be/qzzX-4KBjoE"
	},
	{
		title: "The Hunter's Path",
		url: "https://youtu.be/olli46Ixo1Y"
	},
	{
		title: "Widow-Maker",
		url: "https://youtu.be/j_RAkdDo5rg"
	},
	{
		title: "Kaer Morhen",
		url: "https://youtu.be/PcArGVAN2G8"
	},
	{
		title: "Eyes of the Wolf",
		url: "https://youtu.be/T-Ooau22HQg"
	},
	{
		title: "Witch Hunters",
		url: "https://youtu.be/T3qNIAoALZg"
	},
	{
		title: "Steel for Humans",
		url: "https://youtu.be/AImQu7pXEf4"
	},
	{
		title: "Fate Calls",
		url: "https://youtu.be/fcp5pMwjirQ"
	},
	{
		title: "The Vagabond",
		url: "https://youtu.be/zIOax_vsFKU"
	},
	{
		title: "Cloak and Dagger",
		url: "https://youtu.be/yUyOT5ENHmk"
	},
	{
		title: "Forged in Fire",
		url: "https://youtu.be/qOtRxHW_-UE"
	},
	{
		title: "Yes, I Do...",
		url: "https://youtu.be/Ko1x0CogVa8"
	},
	{
		title: "Welcome, Imlerith",
		url: "https://youtu.be/ZZMsS_6jUEI"
	},
	{
		title: "Drink Up, There's More!",
		url: "https://youtu.be/szhz4UHuLjQ"
	},
	{
		title: "After the Storm",
		url: "https://youtu.be/LgnpL70JbmE"
	},
	{
		title: "Blood on the Cobblestones",
		url: "https://youtu.be/SJ0QbfcDVz4"
	},
	{
		title: "Farewell, Old Friend",
		url: "https://youtu.be/sZM92ECPGo4"
	},
	{
		title: "The Song of the Sword-Dancer",
		url: "https://youtu.be/BZbY2Uzwl68"
	},
	{
		title: "Hunt is Coming",
		url: "https://youtu.be/-MJ33G0PAGo"
	},
	{
		title: "The Fields of Ard Skellig",
		url: "https://youtu.be/h0q-cQrlreA"
	},
	{
		title: "Ladies of the Woods",
		url: "https://youtu.be/ob9F1lsULIA"
	},
	{
		title: "Merchants of Novigrad",
		url: "https://youtu.be/ADyZzGqwpHU"
	},
	{
		title: "Hunt or Be Hunted",
		url: "https://youtu.be/PY-BvPriIBo"
	},
	{
		title: "Family Matters",
		url: "https://youtu.be/Mwrviqb84Eo"
	},
	{
		title: "No Surrender",
		url: "https://youtu.be/WnSAUYVgVaA"
	},
	{
		title: "Child of the Elder Blood",
		url: "https://youtu.be/buQwrEt0wo8"
	},
	{
		title: "In the Giant's Shadow",
		url: "https://youtu.be/sFwwXX-beXQ"
	},
	{
		title: "Nemesis",
		url: "https://youtu.be/wzLH7ULyeFs"
	},
	{
		title: "Bonnie at Morn Instrumental",
		url: "https://youtu.be/S6r5zONh-zI"
	},
	{
		title: "At War!",
		url: "https://youtu.be/2ECMnAtWfAs"
	},
	{
		title: "Back on the Path",
		url: "https://youtu.be/Xn-5ITFNEjY"
	},
	{
		title: "Words on Wind",
		url: "https://youtu.be/3Ug2PdOk9t4"
	},
	{
		title: "A Story You Won't Believe",
		url: "https://youtu.be/xJA61jfPL04"
	},
	{
		title: "When No Man Has Gone Before",
		url: "https://youtu.be/sVoQCLyOKqY"
	},
	{
		title: "Like A Wounded Animal",
		url: "https://youtu.be/6Qe7pNvR4bg"
	},
	{
		title: "I Name Thee Dea and Embrace Thee as my Daughter",
		url: "https://youtu.be/jxfosfpP2bk"
	},
	{
		title: "Igni",
		url: "https://youtu.be/ZIygNFAKLME"
	},
	{
		title: "The Tree When We Sat Once",
		url: "https://youtu.be/n4vG1KuLIVY"
	},
	{
		title: "Go for It",
		url: "https://youtu.be/LKhSDCcNKSE"
	},
	{
		title: "The Wolf and The Swallow",
		url: "https://youtu.be/lk_4l4qGlzc"
	},
	{
		title: "On Thin Ice",
		url: "https://youtu.be/RXE-IrDc-qU"
	},
	{
		title: "Trial of the Grasses",
		url: "https://youtu.be/aMR7_ZMkfgE"
	},
	{
		title: "Hjalmar's Axe",
		url: "https://youtu.be/gKoN8JTcAGw"
	},
	{
		title: "The Big Four",
		url: "https://youtu.be/XlVGSOQRK4w"
	},
	{
		title: "The Shrieker Contract",
		url: "https://youtu.be/IX6ssptCP3s"
	},
	{
		title: "The Possession of Jarl Udalryk",
		url: "https://youtu.be/NIckcrOAy3o"
	},
	{
		title: "Another Round for Everyone",
		url: "https://youtu.be/mEwcGYOc_ds"
	},
	{
		title: "Conjunction of the Spheres",
		url: "https://youtu.be/y_pIaVcQrWM"
	}
];
var witcherHearts = [
	{
		title: "Hearts of Stone",
		url: "https://youtu.be/8G7xiMlLlCo"
	},
	{
		title: "Go Back Whence You Came",
		url: "https://youtu.be/DeaQHdLhoZk"
	},
	{
		title: "You're Immortal",
		url: "https://youtu.be/W2QX6Lm4iXE"
	},
	{
		title: "Evil's Soft First Touches",
		url: "https://youtu.be/NVSyndyhDzk"
	},
	{
		title: "Dead Man's Party",
		url: "https://youtu.be/BCwJuxT0gEk"
	},
	{
		title: "Mystery Man",
		url: "https://youtu.be/K2eJj1oydrQ"
	},
	{
		title: "Breaking In",
		url: "https://youtu.be/7Cgrlanu8FE"
	},
	{
		title: "Whatsoever A Man Soweth",
		url: "https://youtu.be/oXUD8MINlZs"
	},
	{
		title: "The House of the Borsodis",
		url: "https://youtu.be/mr3KmDsTRvg"
	},
	{
		title: "The Temple of Lilvani",
		url: "https://youtu.be/Y5m2692w9-I"
	},
	{
		title: "A Gifted Man Brings Gifts Galore",
		url: "https://youtu.be/TJyJTn06NZM"
	}
];
var witcherBlood = [
	{
		title: "Blood and Wine",
		url: "https://youtu.be/ACajHb72eV0"
	},
	{
		title: "Fanfares and Flowers",
		url: "https://youtu.be/SVFmgsg7N1I"
	},
	{
		title: "For Honor! For Toussaint!",
		url: "https://youtu.be/IE9N5gVbsLk"
	},
	{
		title: "Blood Run",
		url: "https://youtu.be/AaYrWpNwvEM"
	},
	{
		title: "Seeking Resonance",
		url: "https://youtu.be/X4WWEyUwqUU"
	},
	{
		title: "I Cannot Let You Leave",
		url: "https://youtu.be/x1fUxDHAlkw"
	},
	{
		title: "The Banks of the Sansretour",
		url: "https://youtu.be/X54dEaFF5MU"
	},
	{
		title: "Wine Wars",
		url: "https://youtu.be/nG2Vuv1MwOI"
	},
	{
		title: "The Musty Scent of Fresh Pate",
		url: "https://youtu.be/fBFz5AhAjoc"
	},
	{
		title: "Vivienne",
		url: "https://youtu.be/a0ZZW5bA3aU"
	},
	{
		title: "Titans of Infamy",
		url: "https://youtu.be/3MU06DABhW0"
	},
	{
		title: "What Lies Unseen",
		url: "https://youtu.be/BSP44-9sLAM"
	},
	{
		title: "On the Champs-Desoles",
		url: "https://youtu.be/Ts6jP6lOgBI"
	},
	{
		title: "Beyond Hill and Dale...",
		url: "https://youtu.be/IQh4Tf7OA84"
	},
	{
		title: "The Moon over Mount Gorgon",
		url: "https://youtu.be/k7tvroqAWQQ"
	},
	{
		title: "The Mandragora",
		url: "https://youtu.be/umd-UWHllq4"
	},
	{
		title: "Tesham Mutna",
		url: "https://youtu.be/5cO7uYGLz00"
	},
	{
		title: "The Slopes of the Blessure",
		url: "https://youtu.be/KtIMem0mswE"
	},
	{
		title: "Guillaume versus the Shaelmaar",
		url: "https://youtu.be/cWubtTpUtSM"
	},
	{
		title: "Wind in the Caroberta Woods",
		url: "https://youtu.be/PPVwO7igSyA"
	},
	{
		title: "The Beast of Beauclair",
		url: "https://youtu.be/ETO42KuTX4Y"
	},
	{
		title: "Searching for Cecilia Bellant",
		url: "https://youtu.be/pkORF53gMas"
	},
	{
		title: "Syanna",
		url: "https://youtu.be/sHGibm1LR68"
	},
	{
		title: "The Night of Long Fangs",
		url: "https://youtu.be/OsLb6LGVYSY"
	},
	{
		title: "Lady of the Lake",
		url: "https://youtu.be/CHSZYTri0ug"
	}
];

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
		setBackground(url("../assets/awakening-logo.png"));
	} else if(selection < 42) {	// Fates - 29 tracks
		selection = selection - 13;
		selectedGroup = 1;
		setBackground(url("../assets/fates-logo.png"));
	} else if(selection < 47) {	// Darkest Dungeon Battle - 5 tracks
		selection = selection - 42;
		selectedGroup = 2;
	} else if(selection < 49) {	// Darkest Dungeon Ambient Light - 2 tracks
		selection = selection - 47;
		selectedGroup = 3;
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
		setBackground(url("../assets/awakening-logo.png"));
	} else if(selection < 42) {	// Fates Ablaze - 29 tracks
		selection = selection - 13;
		selectedGroup = 1;
		setBackground(url("../assets/fates-logo.png"));
	} else if(selection < 47) {	// Darkest Dungeon Ambush - 5 tracks
		selection = selection - 42;
		selectedGroup = 2;
	} else if(selection < 49) {	// Darkest Dungeon Ambient Torchless - 2 tracks
		selection = selection - 47;
		selectedGroup = 3;
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
	} else if(selection < 11) { // The Crimson Court - 1 tracks
		selection = selection - 10;
		selectedGroup = 1;
	} else if(selection < 16) { // The Color of Madness - 5 tracks
		selection = selection - 11;
		selectedGroup = 2;
	} else if(selection < 76) { // The Witcher 3 - 60 tracks
		selection = selection - 16;
		selectedGroup = 3;
	} else if(selection < 87) { // Hearts of Stone - 11 tracks
		selection = selection - 76;
		selectedGroup = 4;
	} else if(selection < 112) { // Blood and Wine - 25 tracks
		selection = selection - 87;
		selectedGroup = 5;
	} else if(selection < 138) { // Into The Breach - 26 tracks
		selection = selection - 112;
		selectedGroup = 8;
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
function setBackground(imageURL) {
	document.getElementsByClassName("container").style.backgroundImage = imageURL;
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