const tops = [
    "images/top1.png",
    "images/top2.png",
    "images/top3.png"
];

const bottoms = [
    "images/bottom1.png",
    "images/bottom2.png",
    "images/bottom3.png"
];

let currentTopIndex = 0;
let currentBottomIndex = 0;

let topScale = 1;
let bottomScale = 1;

let topOffset = 0;
let bottomOffset = 0;

// Update images on the screen
function updateImages() {
    document.getElementById('top-img').src = tops[currentTopIndex];
    document.getElementById('bottom-img').src = bottoms[currentBottomIndex];
}

// Change top image to the previous one
function prevTop() {
    currentTopIndex = (currentTopIndex - 1 + tops.length) % tops.length;
    updateImages();
}

// Change top image to the next one
function nextTop() {
    currentTopIndex = (currentTopIndex + 1) % tops.length;
    updateImages();
}

// Change bottom image to the previous one
function prevBottom() {
    currentBottomIndex = (currentBottomIndex - 1 + bottoms.length) % bottoms.length;
    updateImages();
}

// Change bottom image to the next one
function nextBottom() {
    currentBottomIndex = (currentBottomIndex + 1) % bottoms.length;
    updateImages();
}

// Zoom in and zoom out functions
function zoomIn(type) {
    if (type === 'top') {
        topScale += 0.1;
        document.getElementById('top-img').style.transform = `scale(${topScale}) translateY(${topOffset}px)`;
    } else if (type === 'bottom') {
        bottomScale += 0.1;
        document.getElementById('bottom-img').style.transform = `scale(${bottomScale}) translateY(${bottomOffset}px)`;
    }
}

function zoomOut(type) {
    if (type === 'top' && topScale > 0.5) {
        topScale -= 0.1;
        document.getElementById('top-img').style.transform = `scale(${topScale}) translateY(${topOffset}px)`;
    } else if (type === 'bottom' && bottomScale > 0.5) {
        bottomScale -= 0.1;
        document.getElementById('bottom-img').style.transform = `scale(${bottomScale}) translateY(${bottomOffset}px)`;
    }
}

// Move up and down functions for top and bottom
function moveUp(type) {
    if (type === 'top') {
        topOffset -= 10;
        document.getElementById('top-img').style.transform = `scale(${topScale}) translateY(${topOffset}px)`;
    } else if (type === 'bottom') {
        bottomOffset -= 10;
        document.getElementById('bottom-img').style.transform = `scale(${bottomScale}) translateY(${bottomOffset}px)`;
    }
}

function moveDown(type) {
    if (type === 'top') {
        topOffset += 10;
        document.getElementById('top-img').style.transform = `scale(${topScale}) translateY(${topOffset}px)`;
    } else if (type === 'bottom') {
        bottomOffset += 10;
        document.getElementById('bottom-img').style.transform = `scale(${bottomScale}) translateY(${bottomOffset}px)`;
    }
}

// Show page based on the selected page name
function showPage(page) {
    const pages = ["home", "mixmatch", "wardrobe"];
    pages.forEach(p => {
        document.getElementById(p).style.display = p === page ? "block" : "none";
    });
}

// Function to toggle visibility of the wardrobe sections (Tops, Bottoms)
function toggleSection(section) {
    const topsItems = document.getElementById('tops-items');
    const bottomsItems = document.getElementById('bottoms-items');

    topsItems.style.display = 'none';
    bottomsItems.style.display = 'none';

    if (section === 'tops') {
        topsItems.style.display = 'block';
    } else if (section === 'bottoms') {
        bottomsItems.style.display = 'block';
    }
}
// Initialize the page on load
window.onload = () => {
    showPage('home');
};

function openCategoryPage(category) {
    const categoryPageMap = {
        tops: "tops.html",
        bottoms: "bottoms.html",
        onepieces: "onepieces.html",
        shoes: "shoes.html"
    };

    if (categoryPageMap[category]) {
        window.location.href = categoryPageMap[category]; // Navigate to the corresponding page
    } else {
        console.error("Category not found: " + category);
    }
}

// Event listener for wardrobe buttons to open corresponding pages
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for the buttons dynamically
    document.querySelectorAll('.wardrobe-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.trim().toLowerCase(); // Get category from button text
            openCategoryPage(category); // Call function to open the respective category page
        });
    });
});
function showWardrobe(category) {
    const gallery = document.getElementById("wardrobe-gallery");
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = "";

    const images = category === "tops" ? tops : bottoms;
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = category;
        galleryContainer.appendChild(img);
    });

    gallery.style.display = "block";
}

function closeGallery() {
    document.getElementById("wardrobe-gallery").style.display = "none";
    showPage("wardrobe");
}

window.onload = () => showPage("home");


