import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');





const videoPlayerPause = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    videoPlayer.pause();
    videoButtonPlay.classList.remove('fa-pause');
    videoButtonPlay.classList.add('fa-play');
};

const audioPlayerPause = () => {
    const audioPlayer = document.querySelector('.audio-player');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audio = document.querySelector('.audio');

    audioPlayer.pause();
    audioButtonPlay.classList.remove('fa-pause');
    audioButtonPlay.classList.add('fa-play');
    audio.classList.remove('play');
};

const radioPlayerPause = () => {
    const radioIcon = document.querySelector('.radio'); 
    const audio = new Audio();
    const radioStop = document.querySelector('.radio-stop');
    
    radioPlayerInit.stop();
    radioIcon.classList.remove('play');
    radioStop.classList.add('fa-play');
    radioStop.classList.remove('fa-stop');
};

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
    videoPlayerInit.stop();
    musicPlayerInit.stop();
    radioPlayerInit.stop();
};

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
}));

videoPlayerInit();
musicPlayerInit();
radioPlayerInit();

