let song;
let slide;
var iphone;
var played;
var myCanvas;

var start = function()
{
  if(played)
    return;
  played = true
  song.play();
  //myCanvas.onclick = '';
}

var played;
var myCanvas;
const songP = 'assets/telephone_ring.mp3';

function preload () {
  iphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i);

  if (iphone) {
    // AUDIO FIX
    song = new Audio(songP);

  } else {
    // loadsound
    song = loadSound(songP);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //target = document.querySelector('canvas').getContext('2d');
  //target = document.getElementById('defaultCanvas0').getContext('2d');
  slide = 0;
  if (iphone) {
   // iPad or iPhone

    // AUDIO FIX
    myCanvas = document.getElementsByTagName("canvas")[0];
    played = false;
    /*myCanvas.onclick = function()
    {
      start()
    }
    myCanvas.addEventListener('touchstart', start, false)*/
    //touch fix
    myCanvas.addEventListener("touchstart", mouseClicked, false);
  }

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
    if (!iphone) {
      if (! song.isPlaying() ) {
        song.play();
      }
    }
    slide++;
  } else if (slide == 1 ) {
    slide=0;
    if (iphone) {
      start();
    }
  }
}
