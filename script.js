const section2 = document.querySelector(".section-2");

const skills = document.querySelector('.nav-link-skills')
skills.addEventListener('click',function(e){
    section2.scrollIntoView({behavior:"smooth"})
});


const projects = document.querySelector(".projects");

const projectsScroll = document.querySelector('.nav-link-projects')
projectsScroll.addEventListener('click',function(e){
   projects.scrollIntoView({behavior:"smooth"})
});




const contacts = document.querySelector(".contact");

const contactScroll = document.querySelector('.nav-link-contacts')
contactScroll.addEventListener('click',function(e){
   contacts.scrollIntoView({behavior:"auto"})
});