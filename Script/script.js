let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav menu li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; // Corrected typo here
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav menu li a[href*=' + id + ']').classList.add('active');
        }
    });
}
