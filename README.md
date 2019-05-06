# p5.js Audio on IOS - MCVE
Simple example on how to implement audio on IOS mobile browsers

see https://discourse.processing.org/t/ios-support-for-inline-video-touch-events-and-audio/10961/1 for more info

try it on your IOS device:

![qr_code](assets/qr.png)

```javascript
let song;
let slide;
var isIphone;
var isPlaying;

var start = function()
{
  if(!isPlaying) {
    isPlaying = true;
    song.play();
  }
}

const songP = 'assets/telephone_ring.mp3';

function preload () {
  isIphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iphone/i);

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
console.log("touch");
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
```
