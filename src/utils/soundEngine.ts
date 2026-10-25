/**
 * Web Audio Ambient Soundscape Engine for 19th-Century Historical Film
 * Synthesizes wind storms, bonfire crackles, kettle steam, heartbeat, and modal acoustic strings
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;

  // Sound nodes
  private windGain: GainNode | null = null;
  private fireGain: GainNode | null = null;
  private steamGain: GainNode | null = null;
  private heartGain: GainNode | null = null;

  private heartTimer: number | null = null;
  private dutarTimer: number | null = null;
  private fireTimer: number | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public async start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
    this.isRunning = true;
    this.setupWind();
    this.setupFire();
    this.setupSteam();
    this.startHeartbeat(65);
    this.startPluckedStrings();
  }

  public setVolume(val: number) {
    if (!this.masterGain || !this.ctx) return;
    const clamped = Math.max(0, Math.min(1, val));
    this.masterGain.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.4, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getIsRunning(): boolean {
    return this.isRunning;
  }

  // Adjust sound mix according to Act
  public setActScene(actIndex: number) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;

    if (actIndex === 0) {
      // Act 1: Inside courtyard, distant wind howling through open wooden gate, gentle oil lamp warmth
      if (this.windGain) this.windGain.gain.setTargetAtTime(0.12, t, 0.4);
      if (this.fireGain) this.fireGain.gain.setTargetAtTime(0.04, t, 0.4);
      if (this.steamGain) this.steamGain.gain.setTargetAtTime(0, t, 0.4);
      this.updateHeartbeatRate(60, 0.1);
    } else if (actIndex === 1) {
      // Act 2: Cemetery, strong howling wind, crackling fire, boiling kettle steam, elevated heart rate
      if (this.windGain) this.windGain.gain.setTargetAtTime(0.35, t, 0.4);
      if (this.fireGain) this.fireGain.gain.setTargetAtTime(0.28, t, 0.4);
      if (this.steamGain) this.steamGain.gain.setTargetAtTime(0.18, t, 0.4);
      this.updateHeartbeatRate(90, 0.25);
    } else if (actIndex === 2) {
      // Act 3: Climax - violent gale, left fire behind, sudden mud collapse, galloping terrified heart, shock sting
      if (this.windGain) this.windGain.gain.setTargetAtTime(0.48, t, 0.3);
      if (this.fireGain) this.fireGain.gain.setTargetAtTime(0.02, t, 0.4);
      if (this.steamGain) this.steamGain.gain.setTargetAtTime(0.06, t, 0.4);
      this.updateHeartbeatRate(140, 0.55);
    }
  }

  // Trigger shock stinger for the monkey leap & pit collapse
  public playShockStinger() {
    if (!this.ctx || !this.masterGain) return;
    const t = this.ctx.currentTime;

    // Deep sub drop
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(32, t + 0.8);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, t);
    filter.frequency.exponentialRampToValueAtTime(45, t + 0.8);

    gain.gain.setValueAtTime(0.6, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 1.3);

    // High noise crunch (leaves, rustle, sudden pounce)
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1800, t);
    noiseFilter.Q.setValueAtTime(2, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
  }

  private setupWind() {
    if (!this.ctx || !this.masterGain) return;
    // Generate pink noise for wind
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
      b6 = white * 0.115926;
    }

    const windSource = this.ctx.createBufferSource();
    windSource.buffer = buffer;
    windSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    filter.Q.setValueAtTime(4, this.ctx.currentTime);

    // LFO to modulate wind howling
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(180, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    windSource.connect(filter);
    filter.connect(this.windGain);
    this.windGain.connect(this.masterGain);
    windSource.start();
  }

  private setupFire() {
    if (!this.ctx || !this.masterGain) return;
    this.fireGain = this.ctx.createGain();
    this.fireGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    this.fireGain.connect(this.masterGain);

    // Periodically pop crackles
    const scheduleCrackle = () => {
      if (!this.ctx || !this.fireGain) return;
      const t = this.ctx.currentTime;
      const crackleOsc = this.ctx.createOscillator();
      const crackleGain = this.ctx.createGain();
      crackleOsc.type = 'triangle';
      crackleOsc.frequency.setValueAtTime(250 + Math.random() * 800, t);

      crackleGain.gain.setValueAtTime(0.06 + Math.random() * 0.08, t);
      crackleGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03 + Math.random() * 0.05);

      crackleOsc.connect(crackleGain);
      crackleGain.connect(this.fireGain);

      crackleOsc.start(t);
      crackleOsc.stop(t + 0.1);

      const nextDelay = 80 + Math.random() * 250;
      this.fireTimer = window.setTimeout(scheduleCrackle, nextDelay);
    };
    scheduleCrackle();
  }

  private setupSteam() {
    if (!this.ctx || !this.masterGain) return;
    // High hiss for boiling steam
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.02;
    }
    const steamSource = this.ctx.createBufferSource();
    steamSource.buffer = buffer;
    steamSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3200, this.ctx.currentTime);
    filter.Q.setValueAtTime(3.5, this.ctx.currentTime);

    this.steamGain = this.ctx.createGain();
    this.steamGain.gain.setValueAtTime(0, this.ctx.currentTime);

    steamSource.connect(filter);
    filter.connect(this.steamGain);
    this.steamGain.connect(this.masterGain);
    steamSource.start();
  }

  private updateHeartbeatRate(bpm: number, volume: number) {
    if (!this.ctx) return;
    if (this.heartTimer) {
      window.clearInterval(this.heartTimer);
      this.heartTimer = null;
    }

    const intervalMs = (60 / bpm) * 1000;
    const playThump = () => {
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      // Lub
      this.singleThump(t, 58, volume);
      // Dub
      this.singleThump(t + 0.14, 50, volume * 0.8);
    };

    playThump();
    this.heartTimer = window.setInterval(playThump, intervalMs);
  }

  private singleThump(time: number, freq: number, vol: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(30, time + 0.12);

    gain.gain.setValueAtTime(vol * 0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(time);
    osc.stop(time + 0.18);
  }

  private startHeartbeat(bpm: number) {
    this.updateHeartbeatRate(bpm, 0.12);
  }

  // Atmospheric Dutar / Uzbek modal plucked string motif (harmonic series D - F - G - A - C)
  private startPluckedStrings() {
    const scale = [146.83, 174.61, 196.0, 220.0, 261.63, 293.66]; // D3, F3, G3, A3, C4, D4
    const playNote = () => {
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      const noteFreq = scale[Math.floor(Math.random() * scale.length)];

      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(noteFreq, t);

      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(noteFreq * 2, t);

      noteGain.gain.setValueAtTime(0.07, t);
      noteGain.gain.exponentialRampToValueAtTime(0.0005, t + 2.5);

      osc.connect(noteGain);
      oscHarmonic.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(t);
      oscHarmonic.start(t);
      osc.stop(t + 2.6);
      oscHarmonic.stop(t + 2.6);

      const delay = 4000 + Math.random() * 5000;
      this.dutarTimer = window.setTimeout(playNote, delay);
    };

    this.dutarTimer = window.setTimeout(playNote, 1500);
  }

  public destroy() {
    if (this.heartTimer) clearInterval(this.heartTimer);
    if (this.dutarTimer) clearTimeout(this.dutarTimer);
    if (this.fireTimer) clearTimeout(this.fireTimer);
    if (this.ctx && this.ctx.state !== 'closed') {
      this.ctx.close();
    }
  }
}

export const soundEngine = new SoundEngine();
