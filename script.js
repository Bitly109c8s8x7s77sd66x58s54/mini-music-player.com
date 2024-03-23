const audioElements = [
  document.getElementById('audioPlayer1'),
  document.getElementById('audioPlayer2'),
  document.getElementById('audioPlayer3'),
  document.getElementById('audioPlayer4'),
  document.getElementById('audioPlayer5'),
  document.getElementById('audioPlayer6'),
  document.getElementById('audioPlayer7'),
  document.getElementById('audioPlayer8'),
  document.getElementById('audioPlayer9'),
  document.getElementById('audioPlayer10'),
  document.getElementById('audioPlayer11')
];

const lyricsBox = document.getElementById('lyricsBox')

const bars = {
  bassBar: document.getElementById('bass-bar'),
  trebleBar: document.getElementById('treble-bar'),
  voiceBar: document.getElementById('voice-bar')
};

const lyrics = [
  [], // lyrics1
  [], // lyrics2
  [], // lyrics3
  [], // lyrics4
  [], // lyrics5
  [], // lyrics6
  [], // lyrics7
  [], // lyrics8
  [], // lyrics9
  [], // lyrics10
  [], // lyrics11
];

// Populate lyrics array
lyrics[7] = [
  { text: "Animals", time: 1 },
  { text: "hello", time: 5 },
  // Other lyrics
];

lyrics[10] = [
  { text: "Get Low Lyrics", time: 0 },
  { text: "Yeah, yeah, you know what it is? \nIt's O SIDE MAFIA on your face, baby\nDon't get it twisted (skrt)\nAyy-yo, BRGR on the beat, bitch", time: 1 },
  // Other lyrics
];

function initializeAudioContext(audioElement, index) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaElementSource(audioElement);
  const analyser = audioCtx.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function updateBarsAndLyrics() {
      requestAnimationFrame(updateBarsAndLyrics);
      analyser.getByteFrequencyData(dataArray);
      const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
      const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
      const bassBarHeight = bassVolume * 100;
      const trebleBarHeight = trebleVolume * 100;

      bars.bassBar.style.height = `${bassBarHeight}px`;
      bars.trebleBar.style.height = `${trebleBarHeight}px`;

      // Calculate voice volume
      const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
      const voiceBarHeight = voiceVolume * 100;
      bars.voiceBar.style.height = `${voiceBarHeight}px`;
  }
  updateBarsAndLyrics();

  // Update lyrics while playing
  audioElement.addEventListener('timeupdate', function () {
      updateLyrics(audioElement.currentTime, index);
  });
}

function updateLyrics(currentTime, index) {
  for (let i = 0; i < lyrics[index].length; i++) {
      if (lyrics[index][i].time <= currentTime && (i === lyrics[index].length - 1 || lyrics[index][i + 1].time > currentTime)) {
          lyricsBox.value = lyrics[index][i].text;
          break;
      }
  }
}

// Initialize audio context and lyrics for each audio element
audioElements.forEach((audio, index) => {
  audio.addEventListener('play', () => {
      initializeAudioContext(audio, index);
  });
});

// Toggle Play/Pause
function togglePlay(index) {
  const audio = audioElements[index];
  if (audio.paused) {
      audio.play();
  } else {
      audio.pause();
  }
}
