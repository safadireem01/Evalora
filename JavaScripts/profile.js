// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Like button functionality
const postLikes = document.querySelectorAll('.post-likes');
postLikes.forEach(like => {
    like.addEventListener('click', function() {
        const currentLikes = parseInt(this.textContent.match(/\d+/)[0]);
        const newLikes = this.classList.contains('liked') ? currentLikes - 1 : currentLikes + 1;
        this.textContent = `❤️ ${newLikes}`;
        this.classList.toggle('liked');
    });
});

// Create post button
const createPostBtn = document.querySelector('.create-post-btn');
createPostBtn.addEventListener('click', () => {
    alert('Create post functionality would open a modal here!');
});

// Add project button
const addProjectBtn = document.querySelector('.add-btn');
addProjectBtn.addEventListener('click', () => {
    alert('Add project functionality would open a form here!');
});

// Add skill button
const addSkillBtn = document.querySelector('.add-skill-btn');
addSkillBtn.addEventListener('click', () => {
    alert('Add skill functionality would open a modal here!');
});

// Add achievement button
const addAchievementBtn = document.querySelector('.add-achievement-btn');
addAchievementBtn.addEventListener('click', () => {
    alert('Add achievement functionality would open a form here!');
});

// View project buttons
const viewProjectBtns = document.querySelectorAll('.view-btn');
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('View project functionality would navigate to project details!');
    });
});

// Edit profile button
const editProfileBtn = document.querySelector('.edit-profile-btn');
editProfileBtn.addEventListener('click', () => {
    alert('Edit profile functionality would open an edit form!');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Score circle animation on page load
window.addEventListener('load', () => {
    const scoreCircle = document.querySelector('.score-circle circle:last-child');
    if (scoreCircle) {
        scoreCircle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    }
});

// OPEN & CLOSE POPUPS
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Close popup when clicking outside
document.querySelectorAll('.popup-overlay').forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});

// OPEN & CLOSE POPUPS
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Close popup when clicking outside
document.querySelectorAll('.popup-overlay').forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});

// ===============================
// ADD PROJECT TO PROFILE
// ===============================
function submitProject() {
    const name = document.getElementById("projectName").value.trim();
    const desc = document.getElementById("projectDesc").value.trim();
    const file = document.getElementById("projectFile").value;
    const link = document.getElementById("projectLink").value.trim();

    if (!name) {
        alert("Please enter a project name.");
        return;
    }

    if (!file && !link) {
        alert("Upload a file OR provide a link.");
        return;
    }

    // Add project to UI
    addProjectToProfile(name, desc);

    // Close both popups
    closePopup("popup-upload");
    closePopup("popup-eval");

    // Clear fields
    document.getElementById("projectName").value = "";
    document.getElementById("projectDesc").value = "";
    document.getElementById("projectFile").value = "";
    document.getElementById("projectLink").value = "";

    alert("Project submitted successfully!");
}

// ===============================
// FUNCTION: APPEND PROJECT TO PROFILE LIST
// ===============================
function addProjectToProfile(name, desc) {
    const projectsContainer = document.getElementById("projectsList");

    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${name}</h3>
            <span class="project-progress">0%</span>
        </div>

        <p class="project-description">${desc}</p>

        <div class="project-tags">
            <span class="tag" style="background:#006D77;">New</span>
        </div>

        <button class="view-btn">View Project</button>
    `;

    projectsContainer.prepend(card);
}

// ===============================
// BUTTON: OPEN POPUP 1
// ===============================
document.querySelector('.add-btn').addEventListener('click', () => {
    openPopup('popup-eval');
});

