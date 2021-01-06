// remove the playing animation
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// play sound when pressing keyboard keys
function playOnKeyboard(e) {
    e.stopPropagation();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// play sound when clicking on buttons
function playOnClick(e) {
    e.stopPropagation();
    const dataCode = parseInt(e.target.dataset.key);
    const audio = document.querySelector(`audio[data-key="${dataCode}"]`);
    const key = document.querySelector(`div[data-key="${dataCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

//Event listeners
const buttons = document.querySelectorAll('.button');
window.addEventListener('keydown', playOnKeyboard);
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
buttons.forEach(button => button.addEventListener('click', playOnClick));



