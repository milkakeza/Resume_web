// Initialize a new Swiper instance with specific options
var swiper = new Swiper(".swiper", {
    effect: "cube", // Set the transition effect to 'cube'
    allowTouchMove: false, // Disable touch movement
    grabCursor: false, // Disable grab cursor style
    cubeEffect: {
        shadow: true, //Enable shadow for the cube effect
        slideShadows: true, // Enable slide shadows
        shadowOffset: 20, // Set shadow offset
        shadowScale: 0.94, // Set shadow scale
    },
    mousewheel: true // Enable mouse wheel control for navigation
});

// Event listener for slide change
swiper.on('slideChange', function () {
    // Remove 'activeLink' class from all links
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    // Add 'activeLink' class to the currently active link based on the Swiper's active index
    Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink")

});

// Function to navigate to a specific slide and update the active link
function Navigate(indx) {
     // Remove 'activeLink' class from all links
    for (let i of document.querySelectorAll(".Links li"))
        i.classList.remove("activeLink");
    // Add 'activeLink' class to the link corresponding to the provided index
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")

    // Transition to the specified slide with animation
    swiper.slideTo(indx, 1000, true); // Slide to the specified index with 1 second duration
}