const menuBtn=document.querySelector('.menu-btn')
const closeBtn=document.querySelector('.close-btn')
const menu=document.querySelector('.nav_items')
const container=document.querySelector('.header_container')

const faqs=document.querySelectorAll('.faq');

// through forEach loop

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

    })
})

//Through for loop

// for (let i = 0; i < faqs.length; i++){
//    faqs[i].addEventListener('click',()=>{
//     faqs[i].classList.toggle('open')
//    })
// }


//Through for in loop

// for (const x in faqs) {
//     faqs[x].addEventListener('click',()=>{
//         faqs[x].classList.toggle('open');
        
//     })
// }


// ======open nav-menu============

menuBtn.addEventListener('click',()=>{
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})

// // ==========CLOSE NAVBAR============

closeBtn.addEventListener('click',()=>{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})

//====TO CLOSE MENU BY CLICKING HEADER CONTAINER======
container.addEventListener('click',()=>{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})





