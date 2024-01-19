let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav menu li a');

window.onscroll = () => {
    let fromTop = window.scrollY + 150;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
};
