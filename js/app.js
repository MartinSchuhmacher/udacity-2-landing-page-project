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

// document fragment for creating list items for unordered list - for better performance
const navFragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to build list items with given section list and fragment for cache
function buildMenuItems(secList, fragment) {
    //for..of loop to create list item for every item in the secList and cache in the former created fragment 
    for(const sec of secList) {
        const newElement = document.createElement('li');
        newElement.innerText = sec.getAttribute('data-nav');
        newElement.classList.toggle('menu__link');
        fragment.appendChild(newElement);
    }
    return fragment;
}

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

// build the nav (with all available section elements)
buildMenuItems(document.querySelectorAll('section'), navFragment);

//adding fragment (navbar items) in the unordered list
document.querySelector('#navbar__list').appendChild(navFragment);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active