const MenuIcon = document.querySelector('#menubar')
const CloseIcon = document.querySelector('#closeicon')
const SponsorLink = document.querySelector('#sponsorlink')
const NewsLink = document.querySelector('#newslink')

MenuIcon.addEventListener('click', ()=>{
    document.querySelector('.mobilemenu').style.display = 'flex'
    document.querySelector('main').style.filter = 'blur(2px)'
})


CloseIcon.addEventListener('click', ()=>{
    console.log('click')
    document.querySelector('.mobilemenu').style.display = 'none'
    document.querySelector('main').style.filter = 'blur(0)'
})
SponsorLink.addEventListener('click', ()=>{
    console.log('click')
    document.querySelector('.mobilemenu').style.display = 'none'
    document.querySelector('main').style.filter = 'blur(0)'
})
NewsLink.addEventListener('click', ()=>{
    console.log('click')
    document.querySelector('.mobilemenu').style.display = 'none'
    document.querySelector('main').style.filter = 'blur(0)'
})
