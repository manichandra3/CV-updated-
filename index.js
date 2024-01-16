// JavaScript code for cloud animation on scroll
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud');
const cloud3 = document.querySelector('.cloud2');


// Function to move clouds based on scroll position
function moveCloudsOnScroll() {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Adjust the position of clouds based on scroll position
    const cloud1Position = -scrollPosition * 0.3;
    const cloud2Position = scrollPosition * 0.2;
    const cloud3Position = scrollPosition * 0.3;

    // Apply transformations with a smooth transition
    cloud1.style.transition = 'transform 0.5s ease-out';
    cloud2.style.transition = 'transform 0.5s ease-out';
    cloud3.style.transition = 'transform 0.5s ease-out';

    // Apply transformations to move clouds
    cloud1.style.transform = `translateX(${cloud1Position}px)`;
    cloud2.style.transform = `translateX(${cloud2Position}px)`;
    cloud3.style.transform = `translateX(${cloud3Position}px)`;

    // Call the function on the next available animation frame
    requestAnimationFrame(moveCloudsOnScroll);
}

// Start the cloud animation on scroll
moveCloudsOnScroll();

// Event listener to handle window resize and update clouds position
window.addEventListener('resize', () => {
    moveCloudsOnScroll();
});

// Smooth scrolling for anchor links
document.querySelectorAll('.navigation-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});