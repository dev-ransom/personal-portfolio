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
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark')
    }
    else{

        document.body.classList.add('dark')
    }
    
})

window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon')
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
            
        }
    })
}

//----------------  aside bar -------------/*


const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li');
totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++){
  const a =  navList[i].querySelector('a');

  a.addEventListener('click', function(){
    for(let j = 0; j < totalNavList; j++){
      navList[j].querySelector('a').classList.remove('active')
    }
    this.classList.add('active');
    showSection(this);
  })
}

function showSection(element){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    const final = document.querySelector('#' + target).classList.add('active')
}


