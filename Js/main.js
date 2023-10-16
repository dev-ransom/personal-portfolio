// toggle for switch
const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');

// add eventlistener

styleSwitcherToggle.addEventListener('click', ()=>{
   const styleSwitcher = document.querySelector('.style-switcher').classList.toggle('open')
})

// 