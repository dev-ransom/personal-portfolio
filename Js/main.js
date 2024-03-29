// toggle for switch
const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');
// for all section

const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
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
// theme light and dark mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click',()=>{ 
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.contains('dark') ?  document.body.classList.remove('dark') : document.body.classList.add('dark')
})
window.addEventListener('load', ()=>{
    document.body.classList.contains('dark') ? dayNight.querySelector('i').classList.add('fa-sun') : dayNight.querySelector('i').classList.add('fa-moon')
})
// theme color
 const alternateStyle = document.querySelectorAll('.alternate-style');
function  setActiveStyle(color){
    alternateStyle.forEach((style) => {
    color === style.getAttribute('title') ? style.removeAttribute('disabled') : style.setAttribute('disabled', 'true')
    })
}
//----------------  aside bar -------------/*
const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li');
totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++){
  const a =  navList[i].querySelector('a');

  a.addEventListener('click', function(){
    
    removeBackSection();
    for(let j = 0; j < totalNavList; j++){
        navList[j].querySelector('a').classList.contains('active') ? addBackSection(j) : '';
        navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active');
    showSection(this);
    if(window.innerWidth < 1200){
        asideSectionShow();
    }
  })
}

function removeBackSection(){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('back-section');
    }
}
function addBackSection(num){
     allSection[num].classList.add('back-section')
}
function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    const targetElement = document.querySelector('#' + target);
    targetElement.classList.add('active');
    
}

function updateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        target === navList[i].querySelector('a').getAttribute('href').split('#')[1] ? navList[i].querySelector('a').classList.add('active') : '';
    }
       
}
document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index');
    // console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector('.nav-toggler'),
 aside = document.querySelector('.aside');

 navTogglerBtn.addEventListener('click', () =>{
    asideSectionShow();
 })


function asideSectionShow(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.toggle('open');
    }
}
 


