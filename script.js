const piano = document.querySelector('.piano');
const keys = document.querySelectorAll('.piano-key');


//     SOUNDS
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    this.classList.remove('playing');
}

piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      event.target.classList.add('playing');
    }   
});

function playAudio(src){
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', (event) => {
        for(let i=0; i<keys.length; i++){
            if(keys[i].dataset.key == event.keyCode){
                const note = keys[i].dataset.note;
                const src = `assets/audio/${note}.mp3`;
                playAudio(src);
                keys[i].classList.add('playing');
            }
        }
});


//  SOUND ONMOUSEDOWN

let down = false;
window.addEventListener('mousedown', (e) =>{
    do {down = true;}
    while(e.which == 1 && e.which == 3);
    return down;
});
window.addEventListener('mouseup',(e) => {
    down = false;
    return down;
});

piano.addEventListener('mouseover', (e) => {
      if(down == true){
        if(e.target.classList.contains('piano-key')) {
            const note = e.target.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
            e.target.classList.add('playing');
        }
    }
    if (down == false) e.stopPropagation();
});

//          Change Notes/Letters

const note = document.getElementById('notes');
const letter = document.getElementById('letters');

letter.addEventListener('click', function(){
    keys.forEach(key => key.classList.add('letter'));
    letter.classList.add('btn-active');
    note.classList.remove('btn-active');
});
note.addEventListener('click', function(){
    keys.forEach(key => key.classList.remove('letter'));
    note.classList.add('btn-active');
    letter.classList.remove('btn-active');
});

//                 FullScreen
const full = document.getElementsByClassName("fullscreen")[0];
full.addEventListener('click', function(){
    if(document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
        }
    else document.exitFullscreen();
});



