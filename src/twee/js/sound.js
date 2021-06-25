/*
Simple sound controller using howler.js
*/
class SoundInstance {
  constructor(howlObject) {
    this.howl = howlObject;
    this.id = howlObject.play();
    howlObject.pause(this.id);
  }
  fadeIn(duration = 1000) {
    if (!this.howl.playing(this.id)) {
      this.howl.play(this.id);
      this.howl.fade(0.0, 1.0, duration, this.id);
    }
  }
  fadeOut(duration = 1000) {
    if (this.howl.playing(this.id)) {
      this.howl.fade(1.0, 0.0, duration, this.id);
      this.howl.once("fade", () => this.howl.stop(this.id), this.id);
    }
  }
}


const birds = new SoundInstance(new Howl({
  src: ["assets/sound/birds.mp3"],
  html5: true,
}));

$(window).on("sm.passage.shown", (ev, { passage }) => {
  if (passage.tags.includes("morning")) {
    birds.fadeIn();
  } else {
    birds.fadeOut();
  }
})