const MenuIcon = document.querySelector('#menubar')
const CloseIcon = document.querySelector('#closeicon')
const SponsorLink = document.querySelector('#sponsorlink')
const NewsLink = document.querySelector('#newslink')
const SpeakerCard = document.querySelector('.speakers')


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

const SpeakerList = [
    {
        username: 'Salwa Ballouti',
        imagelink: 'https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg',
        designation: 'Professor, University of Cambridge',
        descriptsion: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.'
    },
    {
        username: 'Mark Woodward',
        imagelink: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        designation: 'Professor, University of Canada',
        descriptsion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.'
    },
    {
        username: 'John Doe',
        imagelink: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        designation: 'Online Educator',
        descriptsion: 'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.'
    },
    {
        username: 'Jordan Whitaker',
        imagelink: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        designation: 'Research Scholar',
        descriptsion: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.'
    },
    {
        username: 'Claire Cook',
        imagelink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        designation: 'Scholar, Oxford University',
        descriptsion: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, rutrum.'
    },
    {
        username: 'Amber Vasquez',
        imagelink: 'https://www.pixinvent.com/materialize-material-design-admin-template/laravel/demo-4/images/user/12.jpg',
        designation: 'Mathematician',
        descriptsion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus dignissim lorem, pharetra tempor felis tempus eu. Aenean nec varius nisi. Nulla volutpat tincidunt urna sit amet interdum..'
    },
]


for(let i=0;i<SpeakerList.length;i++){
SpeakerCard.innerHTML += `
    <div class="single-speakers">
                    <img src="${SpeakerList[i].imagelink}">
                    <div class="speakerdetails">
                        <h3 class="speakername">${SpeakerList[i].username}</h3>
                        <p class="speakerdesc">${SpeakerList[i].designation}</p>
                        <hr class="speaker-divide">
                        <p class="speaker_lastdesc">
                            ${SpeakerList[i].descriptsion}
                        </p>
                    </div>
                </div>
    `
}