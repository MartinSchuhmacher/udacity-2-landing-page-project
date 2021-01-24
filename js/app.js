/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sectionList = document.querySelectorAll('section');
const navbarList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to check if the given section is in the viewport
function checkViewport(sec) {
    const rect = sec.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        // following two fallbacks if browser does not support the first option (given by www.javascripttutorial.net)
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function to build list items with given section list and fragment for cache
// QUESTION for reviewer: tried that with document fragment but I needed something similar for element (fragment), does that exist? could not find something like that
function buildListItems(secList, navList) {
    //for..of loop to create list item for every item in the secList and cache in the former created fragment 
    for (const sec of secList) {
        const newElement =
            `<li data-link=${sec.getAttribute('id')} class="menu__link">
                <a href="#${sec.getAttribute('id')}">${sec.getAttribute('data-nav')}</a>
            </li>`;
        navList.insertAdjacentHTML('beforeend', newElement);
    }
}

// Add class 'active' to section when in recent view position
function setActiveSection(secList) {
    for (const sec of secList) {
        if (checkViewport(sec)) {
            sec.classList.add('active');
            document.querySelector(`[data-link="${sec.getAttribute('id')}"]`).classList.add('active');
        }
        else {
            if (sec.classList.contains('active')) {
                sec.classList.remove('active');
                document.querySelector(`[data-link="${sec.getAttribute('id')}"]`).classList.remove('active')
            }
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.onload = function() {buildListItems(sectionList, navbarList)};

// Scroll smoothly to section on link click
navbarList.addEventListener('click', function(event) {
    event.preventDefault();
    const clickedSection = event.target.hasAttribute('data-link')
    ? event.target
    : event.target.parentElement;
    const sectionToScroll = document.querySelector(`#${clickedSection.getAttribute('data-link')}`);
    sectionToScroll.scrollIntoView({block: 'end', behavior: 'smooth'});
});

// Set sections as active
window.onscroll = function() {setActiveSection(sectionList)};