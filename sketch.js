let song;
let slide;
var isIphone;
var isPlaying;
var myCanvas;

var start = function()
{
  if(!isPlaying) {
    isPlaying = true;
    song.play();
  }
}

const songP = 'assets/telephone_ring.mp3';

function preload () {
  isIphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/isIphone/i);

  if (isIphone) {
    // AUDIO FIX
    song = new Audio(songP);

  } else {
    // loadsound
    song = loadSound(songP);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  slide = 0;
  if (isIphone) {
    // AUDIO FIX
    isPlaying = false;

    //touch fix
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", mouseClicked, false);
  }
  // ignore this
  textSize(32);
  textAlign(CENTER, CENTER);
}



function draw() {

  if (slide == 0 ) {
    background(0);
    fill(255);
    text('Press to start audio', 0,0, width, height);
  } else if (slide == 1) {
    background(255);
    fill(0);
    text('Enjoy your audio on IOS', 0,0, width, height);
  }

}

function mouseClicked() {

  if (slide == 0) {

    if (isIphone) {
      start();
    } else {
      if ( !song.isPlaying() ) {
        song.play();
      }
    }
    slide = 1;
  } else if (slide == 1 ) {
    slide=0;
  }
}
