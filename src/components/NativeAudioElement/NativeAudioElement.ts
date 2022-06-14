import { Audio, AVPlaybackStatus } from 'expo-av';
import { IAudioElement } from 'laikajs';

export class NativeAudioElement implements IAudioElement {
  src: any;
  sound: Audio.Sound;

  isLoaded: boolean;
  isFinished: boolean;

  volume: number;
  loop: boolean;
  onended?: ((...args: any) => any) | undefined;
  oncanplaythrough?: ((...args: any) => any) | undefined;

  constructor(src: any) {
    this.src = src;
    this.sound = new Audio.Sound();

    this.loop = false;
    this.volume = 1;

    this.isLoaded = false;
    this.isFinished = false;

    this.init();
    this.load();
  }

  init() {
    this.sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
      if (status.isLoaded) {
        if (!this.isLoaded) {
          this.isLoaded = true;
          this.setOptions();

          if (this.oncanplaythrough) {
            this.oncanplaythrough();
          }
        }

        if (status.isPlaying) {
          // handle option change ?
        }

        if (status.didJustFinish) {
          if (this.loop) {
            this.sound.setPositionAsync(0);
          } else {
            this.isFinished = true;
            this.sound.stopAsync();

            if (this.onended) {
              this.onended();
            }
          }
        }
      }
    });
  }

  async load() {
    this.sound.loadAsync(this.src);
  }

  setOptions() {
    this.sound.setIsLoopingAsync(this.loop);
  }

  play() {
    if (this.sound) {
      this.sound.playAsync();
    }
  }

  pause() {
    if (this.sound) {
      this.sound.stopAsync();
    }
  }
}
