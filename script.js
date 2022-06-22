var header = document.querySelector(".header");
var origOffsetY = header.offsetTop;

function onscroll(e) {
    window.scrollY >=origOffsetY ? header.classList.add('sticky'):
                                    header.classList('sticky');
}

document.addEventListener('scroll', onscroll);

// window.addEventListener ("scroll", function() {
//     header.classList.toggle("sticky", window.scrollY > 0);
// });