    const audio1 = document.getElementById('audioPlayer1');
    const audio2 = document.getElementById('audioPlayer2');
    const audio3 = document.getElementById('audioPlayer3');
    const audio4 = document.getElementById('audioPlayer4');
    const audio5 = document.getElementById('audioPlayer5');
    const audio6 = document.getElementById('audioPlayer6');
    const audio7 = document.getElementById('audioPlayer7');
    const audio8 = document.getElementById('audioPlayer8');
    const audio9 = document.getElementById('audioPlayer9');
    const audio10 = document.getElementById('audioPlayer10');
    const audio11 = document.getElementById('audioPlayer11');
    const bassBar = document.getElementById('bass-bar');
    const trebleBar = document.getElementById('treble-bar');
    const voiceBar = document.getElementById('voice-bar');
    const lyricsBox = document.getElementById('lyricsBox');




    



    



    //Lyrics


const lyrics8 = [
    { text: "Animals", time: 1 },
  { text: "hello", time: 5 },
  { text: "lol\n\nlol\n\nlol\n\nlol\n\nlol\n\nlol\n", time: 10 },
  { text: "hahahaha\n\n\n\n\n\n\n\n\n\n\nlol", time: 15 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
    ];

    const lyrics11 = [
    { text: "Get Low Lyrics", time: 0 },
  { text: "Yeah, yeah, you know what it is? \nIt's O SIDE MAFIA on your face, baby\nDon't get it twisted (skrt)\nAyy-yo, BRGR on the beat, bitch", time: 1 },
  { text: "Ako'y young stunna, 'di malabong maging king\nWalang naging katulad kasi lahat wannabe, uh-huh\nUpo ka muna 'pag 'yung O na dumating\nPanoorin mo 'yung movie ta's kuhaan mo 'kong pic\nOkay, slide sa gig, 20 katao bumaba\nLahat fly, panis 'yung mga gago kasi swag ko, natural\nKinuha lang 'yung pera pero 'di na nagtagal\nKinubra ko makapal, 'sang taon mo 'yung total", time: 10 }, // Adjust time accordingly
  { text: "'Pag ini-slide ko 'yung right foot, sasabay ka\n'Pag inangat ko 'yung height, tanong kung sasakay ka\nIba lipad, sobrang fly, 'di na 'ko maasinta\nKumikinang sa mata nila 'ko, kakaiba\n'Yung naka-bling, nagsi-C-Walk, sa bulsa ko libo-libo\nKung piring mo 'ko, 'di mo pa rin ako mabibilog\nOSM, 'di na biro, mga guwapong binatilyo\nIba dating, malamig 'to, kahit check mo sa resibo", time: 30 },
  { text: "Okay, get low, tapos 'tutok mo mata mo sa 'kin\n'Wag le-let go hangga't hindi ko pa sinasabi\nFrom the get go, alam ko lahat 'tong mangyayari\nAking set cold, laging reckless, lahat walang tali", time: 50 },
  { text: "Money, money dancin' lang sa haters like 'ooh'\nInis silang lahat 'si 'yung swag, tinimes two\nPera hanggang damit, alam mong laging brand new\nMatikas kami umasta, baby, what you gon' do?", time: 59 },
  { text: "Baby, what you gon' do? Ooh\nBaby, what you gon' do? Ooh\nTell me, what you gon' do? Ooh\nBaby, what you gon', tell me, what you gon' do? Huh? (Ayy, ayy, ayy)", time: 69 },
  { text: "Ako'y go getta, at kukunin ko lahat\nAt 'yun ay no limit, sinagad ko\nSapagkat ito'y aking hilig, tignan mo 'ko umangat\nKahit 'di nabirit, rinig nila akong lahat (ayy, ayy)\nMula sa O, napa-'whoa' sila no'ng pumull-up\n'Yung mga O's getting dough, dating mga hood rat\nYeah, kada show, laging sold out, ang daming mulla\nNagmatikas sa 'kin, broke, yabang inuuna", time: 80 },
  { text: "Ssob, pera na naman", time: 100 },
  { text: "Okay, Boss Radz, kunin mo 'yung mga pera niyan\nPare, on go, lahat kami ballin' literal\nSuot kong porma, 'di magaya 'si 'di regular\nGalawang OMA pero tingin sa tropa ko'y pantay\nHindi na basic 'yung drip, kumakain sa mamahalin\nBatang galing ng street, 'di ko rin sukat akalain\nNa makakatawid sa buhay na laging nakamig\nAt nakakasabik kung ano pa ang mangyayari sa 'min", time: 102 },
  { text: "Money, money dancin' lang sa haters like 'ooh'\nInis silang lahat 'si 'yung swag, tinimes two\nPera hanggang damit, alam mong laging brand new\nMatikas kami umasta, baby, what you gon' do?", time: 122 },
  { text: "Baby, what you gon' do? Ooh\nBaby, what you gon' do? Ooh\nTell me, what you gon' do? Ooh\nBaby, what you gon', tell me, what you gon' do?", time: 131 },
  { text: "Baby, what you gon' do? Ooh\nBaby, what you gon' do? Ooh\nTell me, what you gon' do? Ooh\nBaby, what you gon', tell me, what you gon' do? Huh?", time: 141 },
  { text: "Get Low\nDONE.", time: 153 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
  // { text: "\n\n\n\n\n\n\n\n\n\n\n", time: 1000 },
    ];
     






    audio1.addEventListener('play', () => {
        const audio1Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio1Ctx.createMediaElementSource(audio1);
        const analyser = audio1Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio1Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio2.addEventListener('play', () => {
        const audio2Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio2Ctx.createMediaElementSource(audio2);
        const analyser = audio2Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio2Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio3.addEventListener('play', () => {
        const audio3Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio3Ctx.createMediaElementSource(audio3);
        const analyser = audio3Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio3Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio4.addEventListener('play', () => {
        const audio4Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio4Ctx.createMediaElementSource(audio4);
        const analyser = audio4Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio4Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio5.addEventListener('play', () => {
        const audio5Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio5Ctx.createMediaElementSource(audio5);
        const analyser = audio5Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio5Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio6.addEventListener('play', () => {
        const audio6Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio6Ctx.createMediaElementSource(audio6);
        const analyser = audio6Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio6Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio7.addEventListener('play', () => {
        const audio7Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio7Ctx.createMediaElementSource(audio7);
        const analyser = audio7Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio7Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio8.addEventListener('play', () => {
        const audio7Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio8Ctx.createMediaElementSource(audio8);
        const analyser = audio8Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio8Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio9.addEventListener('play', () => {
        const audio9Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio9Ctx.createMediaElementSource(audio9);
        const analyser = audio9Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio9Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio10.addEventListener('play', () => {
        const audio10Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio10Ctx.createMediaElementSource(audio10);
        const analyser = audio10Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio10Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });
    audio11.addEventListener('play', () => {
        const audio11Ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audio11Ctx.createMediaElementSource(audio11);
        const analyser = audio11Ctx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audio11Ctx.destination);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBarsAndLyrics = () => {
            requestAnimationFrame(updateBarsAndLyrics);
            analyser.getByteFrequencyData(dataArray);
            const bassVolume = dataArray.slice(0, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 90);
            const trebleVolume = dataArray.slice(0, bufferLength / 4, bufferLength).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 50);
            const bassBarHeight = bassVolume * 100;
            const trebleBarHeight = trebleVolume * 100;

            bassBar.style.height = `${bassBarHeight}px`;
            trebleBar.style.height = `${trebleBarHeight}px`;

            // Calculate voice volume
            const voiceVolume = dataArray.slice(0, bufferLength / 2, bufferLength / 2).reduce((a, b) => a + b, 0) / (bufferLength / 2 * 65);
            const voiceBarHeight = voiceVolume * 100;
            voiceBar.style.height = `${voiceBarHeight}px`;
        };
        updateBarsAndLyrics();
    });







    
    
    
    




//Lyrics Player ---- ENGLISH HAHHAHAHAHAHAHAHA

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics1.length; i++) {
    if (lyrics1[i].time <= currentTime && (i === lyrics1.length - 1 || lyrics1[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics1[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics2.length; i++) {
    if (lyrics2[i].time <= currentTime && (i === lyrics2.length - 1 || lyrics2[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics2[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics3.length; i++) {
    if (lyrics3[i].time <= currentTime && (i === lyrics3.length - 1 || lyrics3[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics3[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics4.length; i++) {
    if (lyrics4[i].time <= currentTime && (i === lyrics4.length - 1 || lyrics4[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics4[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics5.length; i++) {
    if (lyrics5[i].time <= currentTime && (i === lyrics5.length - 1 || lyrics5[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics5[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics6.length; i++) {
    if (lyrics6[i].time <= currentTime && (i === lyrics6.length - 1 || lyrics6[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics6[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics7.length; i++) {
    if (lyrics7[i].time <= currentTime && (i === lyrics7.length - 1 || lyrics7[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics7[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics8.length; i++) {
    if (lyrics8[i].time <= currentTime && (i === lyrics8.length - 1 || lyrics8[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics8[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics9.length; i++) {
    if (lyrics9[i].time <= currentTime && (i === lyrics9.length - 1 || lyrics9[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics9[i].text;
      break;
    }
  }
    }  

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics10.length; i++) {
    if (lyrics10[i].time <= currentTime && (i === lyrics10.length - 1 || lyrics10[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics10[i].text;
      break;
    }
  }
    }

    function updateLyrics(currentTime) {
      for (let i = 0; i < lyrics11.length; i++) {
    if (lyrics11[i].time <= currentTime && (i === lyrics11.length - 1 || lyrics11[i + 1].time > currentTime)) {
      lyricsBox.value = lyrics11[i].text;
      break;
    }
  }
    }








//Update lyrics while playing ---- ENGLISH HALOS LAHAT HAHHAHAHAHA

    audio1.addEventListener('timeupdate', function () {
      updateLyrics(audio1.currentTime);
    });
    audio2.addEventListener('timeupdate', function () {
      updateLyrics(audio2.currentTime);
    });
    audio3.addEventListener('timeupdate', function () {
      updateLyrics(audio3.currentTime);
    });
    audio4.addEventListener('timeupdate', function () {
      updateLyrics(audio4.currentTime);
    });
    audio5.addEventListener('timeupdate', function () {
      updateLyrics(audio5.currentTime);
    });
    audio6.addEventListener('timeupdate', function () {
      updateLyrics(audio6.currentTime);
    });
    audio7.addEventListener('timeupdate', function () {
      updateLyrics(audio7.currentTime);
    });
    audio8.addEventListener('timeupdate', function () {
      updateLyrics(audio8.currentTime);
    });
    audio9.addEventListener('timeupdate', function () {
      updateLyrics(audio9.currentTime);
    });
    audio10.addEventListener('timeupdate', function () {
      updateLyrics(audio10.currentTime);
    });
    audio11.addEventListener('timeupdate', function () {
      updateLyrics(audio11.currentTime);
    });













// Play/Pause ---- EEYY HAHAHAHAHHAHAHAHAHA
 

















//AUTOPLAY BY AVE HHAHA
audio1.addEventListener('ended', () => {
      audio2.play();
});
audio2.addEventListener('ended', () => {
      audio3.play();
});
audio3.addEventListener('ended', () => {
      audio4.play();
});
audio4.addEventListener('ended', () => {
      audio5.play();
});
audio5.addEventListener('ended', () => {
      audio6.play();
});
audio6.addEventListener('ended', () => {
      audio7.play();
});
audio7.addEventListener('ended', () => {
      audio8.play();
});
audio8.addEventListener('ended', () => {
      audio9.play();
});
audio9.addEventListener('ended', () => {
      audio10.play();
});
audio10.addEventListener('ended', () => {
      audio11.play();
});






 
 //Listener for play/pause button ---- PAMPAPOGI POINTS DAW HAHAHAHHAHHAHAHA
    audio1.addEventListener('play', function () {
      updateLyrics(audio1.currentTime);
    });
    audio2.addEventListener('play', function () {
      updateLyrics(audio2.currentTime);
    });
    audio3.addEventListener('play', function () {
      updateLyrics(audio3.currentTime);
    });
    audio4.addEventListener('play', function () {
      updateLyrics(audio4.currentTime);
    });
    audio5.addEventListener('play', function () {
      updateLyrics(audio5.currentTime);
    });
    audio6.addEventListener('play', function () {
      updateLyrics(audio6.currentTime);
    });
    audio7.addEventListener('play', function () {
      updateLyrics(audio7.currentTime);
    });
    audio8.addEventListener('play', function () {
      updateLyrics(audio8.currentTime);
    });
    audio9.addEventListener('play', function () {
      updateLyrics(audio9.currentTime);
    });
    audio10.addEventListener('play', function () {
      updateLyrics(audio10.currentTime);
    });
    audio11.addEventListener('play', function () {
     updateLyrics(audio11.currentTime);
    });



    
    