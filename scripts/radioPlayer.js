export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio'); 
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
        };
    };


    
    radioNavigation.addEventListener('change', event => {

        const target = event.target;
        const parrent = target.closest('.radio-item');
        
        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;

        radioItem.forEach(item => item.classList.remove('select'));
        parrent.classList.add('select');

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();

    });

    radioStop.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
            changeIconPlay();
        } else {
            audio.pause();
            changeIconPlay();
        }
        
    });

    
}
