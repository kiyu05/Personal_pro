// Function to check the password on Page 1
function checkPassword() {
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const password = "Kiyansh#05"; // Replace with a secure approach for production

    console.log("Password entered:", passwordInput.value); // Debugging log

    if (passwordInput.value === password) {
        errorMessage.textContent = ""; // Clear the error message
        showPage("page2"); // Move to Page 2
    } else {
        errorMessage.textContent = "Oops, try again!"; // Show error message
    }
}

function showPage(pageId) {
    console.log("Switching to:", pageId); // Debugging
    const pages = document.querySelectorAll("#page1, #page2, #page3, #page4, #page5, #page6, #page7");
    pages.forEach((page) => {
        page.style.display = "none"; // Hide all pages
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = "flex"; // Show the selected page
        console.log("Page shown:", pageId); // Debugging
    } else {
        console.error("Page not found:", pageId); // Error handling
    }
}



function showSection(sectionId) {
    console.log("Trying to show section:", sectionId); // Debugging log
    

    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.classList.add("hidden");
        section.classList.remove("visible");
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove("hidden");
        targetSection.classList.add("visible");
        console.log("Section shown:", sectionId); // Confirm section is shown
    } else {
        console.error("Section not found:", sectionId); // Error if section ID is invalid
    }

    // Fireworks only for Section A
    if (sectionId === 'page4') {
        console.log("Triggering fireworks for Section A");
        createFirework(window.innerWidth / 2, window.innerHeight / 2); // Center fireworks
    }
}


// Function to create a fireworks animation
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    document.body.appendChild(firework);

    const colors = ['#ff007f', '#ff6600', '#00ff00', '#0066ff', '#ffcc00']; // Firework colors
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    
    const particles = Math.floor(Math.random() * 5) + 5; // Fewer particles


    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework');
        document.body.appendChild(particle);

        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const distance = Math.random() * 200 + 50; // Random distance from the origin
        const particleX = x + Math.cos(angle) * distance;
        const particleY = y + Math.sin(angle) * distance;
        const duration = Math.random() * 1.5 + 0.5; // Duration of animation

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animation = `explode ${duration}s ease-out forwards`;

        setTimeout(() => {
            particle.style.left = `${particleX}px`;
            particle.style.top = `${particleY}px`;
        }, 50);

        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    setTimeout(() => {
        firework.remove(); // Remove the firework element after animation ends
    }, 2000); // Adjust this timeout based on the firework duration
}

// Ensure only Page 1 is visible on page load
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => section.classList.add("hidden")); // Hide all sections
    showPage("page1"); // Start on Page 1
});






















function openIframe(pageUrl) {
    // Select the correct iframe by id
    const iframe = document.getElementById('content-frame'); // Or use 'content-frame-1' if needed
    iframe.src = pageUrl;
}
