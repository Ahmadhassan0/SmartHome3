const menu = document.querySelector('.nav-menu');
const menuOpenBtn = document.querySelector('#menu-open-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');


// open nav menu
menuOpenBtn.addEventListener("click", () => {
    menu.style.display = "inline-block";
    menuOpenBtn.style.display = "none";
    menuCloseBtn.style.display = "inline-block";

    // close nav menu
    menuCloseBtn.addEventListener("click", () => {
        menu.style.display = "none";
        menuCloseBtn.style.display = "none";
        menuOpenBtn.style.display = "inline-block";
    })
})


// // Faq show answer
// const faqs =document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');

//         // change icon
//         const icon = faq.querySelector('.faq-icon i');
//         if(icon.className === "fa-solid fa-plus") {
//             icon.className = "fa-solid fa-minus";
//         } else {
//             icon.className = "fa-solid fa-plus";
//         }
//     })
// })


const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // icon change
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})

// navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})