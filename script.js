const section2 = document.querySelector(".section-2");

const skills = document.querySelector('.nav-link-skills')
skills.addEventListener('click',function(e){
    const scrollPosition = section2.getBoundingClientRect();
    window.scrollTo(
        scrollPosition.left + window.pageXOffset,
        scrollPosition.top + window.pageYOffset
    )
});


const projects = document.querySelector(".projects");

const projectsScroll = document.querySelector('.nav-link-projects')
projectsScroll.addEventListener('click',function(e){
    const scrollPosition = projects.getBoundingClientRect();
    window.scrollTo(
        scrollPosition.left + window.pageXOffset,
        scrollPosition.top + window.pageYOffset
    )
});




const contacts = document.querySelector(".contact");

const contactScroll = document.querySelector('.nav-link-contacts')
contactScroll.addEventListener('click',function(e){
    const scrollPosition = contacts.getBoundingClientRect();
    window.scrollTo(
        scrollPosition.left + window.pageXOffset,
        scrollPosition.top + window.pageYOffset
    )
});