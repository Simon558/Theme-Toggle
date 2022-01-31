const toggleContainer = document.getElementById('toggle-container');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnCircle = document.getElementById('toggle-btn-circle');
const toggleText = document.getElementsByClassName('toggle__text');

toggleBtnCircle.addEventListener('click', () => {
    toggleContainer.classList.toggle('toggle__container--dark');
    toggleBtn.classList.toggle('toggle__btn--dark');
    toggleBtnCircle.classList.add('toggle__btn__circle--light');
    toggleBtnCircle.classList.toggle('toggle__btn__circle--dark');

    for (let i = 0; i < toggleText.length; i++) {
        toggleText[i].classList.toggle('toggle__text--dark');
        toggleText[i].classList.toggle('toggle__text--bold');
    }
});
