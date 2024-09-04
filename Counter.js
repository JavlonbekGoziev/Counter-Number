const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.button_increase');
const decreaseButtonEl = document.querySelector('.button_decrease');
const resetButtonEl = document.querySelector('.resetbutton');
const counterValueEl = document.querySelector('.qiymat');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', () => {
  
  counterValueEl.textContent = 0;
 
  
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
  
});

decreaseButtonEl.addEventListener('click', () => {

  const currentValue = counterValueEl.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;

  if (newValue < -10) {
    newValue = -10;
  }
  counterValueEl.textContent = newValue;
});

const incrementCounter = () => {
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber = +currentValue;
  
  let newValue = currentValueAsNumber + 1;

  if (newValue > 10) {
    newValue = 10;
  }
  counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener('click', incrementCounter);





