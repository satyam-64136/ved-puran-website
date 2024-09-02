document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const puranName = urlParams.get('name');

    const purans = {
        'agni-puran': {
            title: 'Agni Puran',
            image: '../cover pages/agni purana cover.jpg',
            audio: '../ListenPuran/Audio/agni purana.m4a'
        },
        'Bhavishya-Puran': {
            title: 'Bhavishya Puran',
            image: '../cover pages/bhavishya purana cover.jpg',
            audio: '../ListenPuran/Audio/bhavishya purana.m4a'
        },
        'Matsya-purana': {
            title: 'Matsya Puran',
            image: '../cover pages/matsya purana cover.jpg',
            audio: '../ListenPuran/Audio/matsya purana.m4a'          
        },
        'Shiv-purana': {
            title: 'Shiv Puran',
            image: '../cover pages/shiv purana cover.jpg',
            audio: '../ListenPuran/Audio/shiv puran.m4a'
        },
        'vishnu-purana': {
            title: 'Vishnu Puran',
            image: '../cover pages/vishnu purana cover.jpg',
            audio: '../ListenPuran/Audio/vishnu purana.m4a'          
        },
        'varah-purana': {
            title: 'Varah Puran',
            image: '../cover pages/varah purana cover.jpg',
            audio: '../ListenPuran/Audio/varah purana.m4a'          
        },
        'garur-puran': {
            title: 'Garur Puran',
            image: '../cover pages/garur puran cover.jpg',
            audio: '../ListenPuran/Audio/garur purana.m4a'          
        },
    };

    const playBtn = document.getElementById('play');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const background = document.getElementById('bg-img');
    const music = document.getElementById('puran-audio');
    const playerProgress = document.getElementById('player-progress');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    let musicIndex = 0;
    let isPlaying = false;

    if (purans[puranName]) {
        loadMusic(purans[puranName]);
    } else {
        document.getElementById('puran-title').textContent = 'Puran Not Found';
    }

    function togglePlay() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }

    function playMusic() {
        isPlaying = true;
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
        music.play();
    }

    function pauseMusic() {
        isPlaying = false;
        playBtn.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('title', 'Play');
        music.pause();
    }

    function loadMusic(song) {
        music.src = song.audio;
        document.getElementById('puran-title').textContent = song.title;
        document.getElementById('puran-image').src = song.image;
        background.src = song.image; // Set the background image
        music.load();
    }

    // Function to forward or rewind the current track by 30 seconds
    function seekAudio(direction) {
        if (direction === 1) { // Forward
            music.currentTime = Math.min(music.currentTime + 30, music.duration);
        } else if (direction === -1) { // Rewind
            music.currentTime = Math.max(music.currentTime - 30, 0);
        }
    }

    function updateProgressBar() {
        const { duration, currentTime } = music;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
        durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
        currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
    }

    function setProgressBar(e) {
        const width = playerProgress.clientWidth;
        const clickX = e.offsetX;
        music.currentTime = (clickX / width) * music.duration;
    }

    // Event listeners for play/pause, forward, rewind, and progress bar interaction
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', () => seekAudio(-1)); // Rewind by 30 seconds
    nextBtn.addEventListener('click', () => seekAudio(1)); // Forward by 30 seconds
    music.addEventListener('ended', pauseMusic);
    music.addEventListener('timeupdate', updateProgressBar);
    playerProgress.addEventListener('click', setProgressBar);

    // Spacebar controls play/pause
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        }
    });

    // Load the navbar from another file
    $('#navbar-placeholder').load('../navbar.html', function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading navbar: " + xhr.status + " " + xhr.statusText);
        }
    });
});
