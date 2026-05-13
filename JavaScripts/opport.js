/* ---------------- FILTER PANEL ---------------- */

const filterBtn = document.getElementById("filterBtn");
const filterPanel = document.getElementById("filterPanel");
const filterOverlay = document.getElementById("filterOverlay");
const dropdownTitles = document.querySelectorAll(".filter-title");
const dropdownOptions = document.querySelectorAll(".filter-options");
const optionButtons = document.querySelectorAll(".option-btn");
const clearFiltersBtn = document.querySelector(".clear-filters");
const applyFiltersBtn = document.querySelector(".apply-filters");

/* ------ Open Filter Panel ------ */
filterBtn.addEventListener("click", () => {
    filterPanel.classList.add("active");
    filterOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

/* ------ Close Panel ------ */
function closeFilterPanel() {
    filterPanel.classList.remove("active");
    filterOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

filterOverlay.addEventListener("click", closeFilterPanel);

/* ------ Apply Filters ------ */
applyFiltersBtn.addEventListener("click", () => {
    closeFilterPanel();
});

/* ------ Clear Filters ------ */
clearFiltersBtn.addEventListener("click", () => {
    optionButtons.forEach(btn => btn.classList.remove("active"));
});

/* ---------------- DROPDOWNS (Type – Fields – Experience) ---------------- */
dropdownTitles.forEach((title, index) => {
    title.addEventListener("click", () => {

        // Close all others
        dropdownOptions.forEach((opt, i) => {
            if (i !== index) opt.style.display = "none";
        });

        // Toggle clicked one
        const current = dropdownOptions[index];
        current.style.display = current.style.display === "block" ? "none" : "block";
    });
});

/* ---------------- SELECT OPTIONS RADIO STYLE ---------------- */
optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const group = btn.dataset.group;

        // Remove active from same group
        optionButtons.forEach(other => {
            if (other.dataset.group === group) {
                other.classList.remove("active");
            }
        });

        // Activate clicked
        btn.classList.add("active");
    });
});

/* ---------------- CAROUSEL SCROLL WITH ARROWS ---------------- */

function scrollCarousel(id, direction) {
    const carousel = document.getElementById(id);

    // Scroll amount = width of one card + gap
    const amount = 320;

    carousel.scrollBy({
        left: amount * direction,
        behavior: "smooth"
    });
}

/* Enable dragging with mouse (optional but nice) */
document.querySelectorAll(".carousel").forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseup", () => {
        isDown = false;
    });

    carousel.addEventListener("mouseleave", () => {
        isDown = false;
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

/* ---------------- OPPORTUNITY MODAL ---------------- */

const opportunityModal = document.getElementById("opportunityModal");

// Sample data for each opportunity
const opportunitiesData = {
    "Web Development Internship": {
        logo: "orange",
        title: "Web Development Internship",
        deadline: "Apply before Mar 15, 2025",
        location: "Amman (on-site)",
        type: "Internship",
        duration: "3 Months",
        level: "Beginner",
        about: "Build cutting-edge web applications using modern technologies. You will work with senior developers, gain hands-on experience, and collaborate on real client projects.",
        skills: "HTML, CSS, JavaScript, Git, Communication Skills",
        responsibilities: [
            "Assist in building responsive web pages",
            "Fix bugs and improve user experience",
            "Collaborate in daily stand-up meetings",
            "Write clean and maintainable code"
        ],
        companyName: "Orange Jordan",
        companyDesc: "Orange Jordan is a leading telecom company focused on providing innovative digital solutions and excellent customer service."
    },
    "AI Residency Program": {
        logo: "microsoft",
        title: "AI Residency Program",
        deadline: "Apply before Dec 31, 2025",
        location: "Remote",
        type: "Training Program",
        duration: "1 Year",
        level: "Intermediate",
        about: "A one-year training program in AI, research for students passionate about technology. Gain deep expertise in machine learning, deep learning, and AI applications.",
        skills: "Python, Machine Learning, Mathematics, Research Skills",
        responsibilities: [
            "Conduct AI research projects",
            "Collaborate with research teams",
            "Publish research papers",
            "Develop AI models and applications"
        ],
        companyName: "Microsoft",
        companyDesc: "Microsoft is a global technology leader empowering every person and organization on the planet to achieve more."
    },
    "UX Design Challenge": {
        logo: "orange-ux",
        title: "UX Design Challenge",
        deadline: "Apply before Feb 20, 2025",
        location: "Remote",
        type: "Competition",
        duration: "2 Weeks",
        level: "All Levels",
        about: "Create innovative user experiences and compete with designers worldwide. Show your creativity and problem-solving skills.",
        skills: "Figma, UI/UX Design, User Research, Prototyping",
        responsibilities: [
            "Design user-friendly interfaces",
            "Conduct user research",
            "Create prototypes",
            "Present your design solutions"
        ],
        companyName: "Orange Jordan",
        companyDesc: "Orange Jordan is a leading telecom company focused on providing innovative digital solutions and excellent customer service."
    },
    "Python Bootcamp": {
        logo: "python",
        title: "Python Bootcamp",
        deadline: "Apply before Mar 1, 2025",
        location: "Online",
        type: "Workshop",
        duration: "6 Weeks",
        level: "Beginner",
        about: "Learn Python from the ground up through hands-on coding projects and challenges. Perfect for beginners looking to start their programming journey.",
        skills: "Basic Computer Skills, Problem Solving",
        responsibilities: [
            "Complete coding exercises",
            "Build Python projects",
            "Participate in live coding sessions",
            "Work on real-world applications"
        ],
        companyName: "Python Institute",
        companyDesc: "The Python Institute is dedicated to promoting Python programming language and providing quality education to developers worldwide."
    },
    "Software Engineering Internship": {
        logo: "google",
        title: "Software Engineering Internship",
        deadline: "Apply before Mar 1, 2025",
        location: "Mountain View, CA",
        type: "Internship",
        duration: "3 Months",
        level: "Intermediate",
        about: "Gain practical experience in software development and testing at Google. Work on innovative projects that impact millions of users worldwide.",
        skills: "Java, Python, Data Structures, Algorithms, System Design",
        responsibilities: [
            "Develop software solutions",
            "Write unit and integration tests",
            "Participate in code reviews",
            "Collaborate with engineering teams"
        ],
        companyName: "Google",
        companyDesc: "Google is a global technology leader that specializes in Internet-related services and products, helping organize the world's information."
    }
};

function openOpportunityModal(title) {
    const data = opportunitiesData[title];
    
    if (!data) {
        console.log("[v0] Opportunity data not found for:", title);
        return;
    }

    // Populate modal with data
    document.getElementById("modalJobTitle").textContent = data.title;
    document.getElementById("modalDeadline").textContent = data.deadline;
    document.getElementById("modalLocation").textContent = data.location;
    document.getElementById("modalType").textContent = data.type;
    document.getElementById("modalDuration").textContent = data.duration;
    document.getElementById("modalLevel").textContent = data.level;
    document.getElementById("modalAbout").textContent = data.about;
    document.getElementById("modalSkills").textContent = data.skills;
    document.getElementById("modalCompanyTitle").textContent = `About ${data.companyName}`;
    document.getElementById("modalCompanyDesc").textContent = data.companyDesc;

    // Set logo
    const logoElement = document.getElementById("modalLogo");
    logoElement.className = `modal-company-logo ${data.logo}`;
    
    if (data.logo === "orange" || data.logo === "orange-ux") {
        logoElement.textContent = data.logo === "orange" ? "orange" : "UX";
    } else if (data.logo === "google") {
        logoElement.textContent = "G";
    } else if (data.logo === "microsoft") {
        logoElement.innerHTML = `
            <div class="ms-square red"></div>
            <div class="ms-square green"></div>
            <div class="ms-square blue"></div>
            <div class="ms-square yellow"></div>
        `;
    } else if (data.logo === "python") {
        logoElement.innerHTML = '<div class="py-icon"></div>';
    }

    // Set responsibilities
    const responsibilitiesList = document.getElementById("modalResponsibilities");
    responsibilitiesList.innerHTML = "";
    data.responsibilities.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        responsibilitiesList.appendChild(li);
    });

    // Show modal
    opportunityModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeOpportunityModal() {
    opportunityModal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Add click handlers to all "View Details" buttons
document.querySelectorAll(".btn-details").forEach(button => {
    button.addEventListener("click", function() {
        const card = this.closest(".card");
        const title = card.querySelector("h3").textContent;
        openOpportunityModal(title);
    });
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && opportunityModal.classList.contains("active")) {
        closeOpportunityModal();
    }
});
