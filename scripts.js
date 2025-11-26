const mainDisplay = document.getElementById("mainDisplay");
const caption = document.getElementById("caption");
const thumbRow = document.getElementById("thumbRow");
const thumbs = Array.from(thumbRow.children);
const wrapper = document.querySelector('.menu-wrapper');
const btn = document.getElementById('see-more-btn');


let index = 0;

function updateMain() {
    mainDisplay.src = thumbs[index].src;
    caption.textContent = thumbs[index].dataset.caption;
}

// Next image
document.getElementById("rightBtn").onclick = () => {
    index = (index + 1) % thumbs.length;
    updateMain();
};


// Previous image
document.getElementById("leftBtn").onclick = () => {
    index = (index - 1 + thumbs.length) % thumbs.length;
    updateMain();
};

// Click thumbnail to make it main
thumbs.forEach((thumb, i) => {
    thumb.onclick = () => {
        index = i;
        updateMain();
    };
});

updateMain();

btn.addEventListener('click', () => {
    wrapper.classList.toggle('expanded');

    if (wrapper.classList.contains('expanded')) {
        btn.textContent = "See Less ↑";
    } else {
        btn.textContent = "See More ⬇";
    }
});

function onClickMenu() {
    const menuIcon = document.querySelector('.menu-icon'); // or #menu-icon if using id
const mobileMenu = document.querySelector('.mobile-menu-overlay');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');  // hamburger bars animation
    mobileMenu.classList.toggle('active'); // show/hide overlay
});
}

function closeMenu(){
    const closeMenu = document.getElementById("mobileMenu")
closeMenu.style.display = "none"
} 
