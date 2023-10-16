// toggle for switch
const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');

// add eventlistener

styleSwitcherToggle.addEventListener('click', ()=>{
   const styleSwitcher = document.querySelector('.style-switcher').classList.toggle('open')
})


// hide toggle switcher on scroll

window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})


// theme color
 const alternateStyle = document.querySelectorAll('.alternate-style');


function  setActiveStyle(color){
    alternateStyle.forEach((style)=> {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute('disabled','true')
            console.log(color);
        }
    })
}

 

