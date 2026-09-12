/* ============================================================
   PORTFOLIO CONTENT
   ============================================================

   PUT YOUR FILES INSIDE:

   assets/
       cv/
       research/
       data/
       presentations/
       reports/
       more-work/
       images/

   Then change the filenames below.

============================================================ */


/* ============================================================
   WORK CATEGORIES
============================================================ */

const workCategories = [

    {
        id: "research",

        title: "Research Work",

        description:
            "Research summaries, literature reviews, research gaps, and analytical articles.",

        type: "research"
    },

    {
        id: "analysis",

        title: "Data & Analysis",

        description:
            "Statistical models, data analysis, comparative studies, and visualizations.",

        type: "analysis"
    },

    {
        id: "presentations",

        title: "Presentations & Communication",

        description:
            "Recorded presentations, slide decks, and structured explanations.",

        type: "presentations"
    },

    {
        id: "reports",

        title: "Brand & Industry Reports",

        description:
            "Market reports, brand analysis, and case studies.",

        type: "reports"
    },

    {
        id: "more",

        title: "More Work",

        description:
            "Additional projects, tools, and resources I've put together.",

        type: "more"
    }

];


/* ============================================================
   RESEARCH WORK
============================================================ */

const researchWork = [

    {
        title: "Research Paper / Literature Review",

        description:
            "Add a short description of what this research work demonstrates.",

        pdf: "assets/research/research-paper.pdf"
    },

    {
        title: "Research Summary",

        description:
            "A concise summary of a research paper, report, or study.",

        pdf: "assets/research/research-summary.pdf"
    }

];


/* ============================================================
   DATA & ANALYSIS
============================================================

   You can create as many models as you want.

   Example:

   Linear Regression
   Logistic Regression
   Polynomial Regression
   Ridge Regression
   Lasso Regression
   Elastic Net
   Ordinal Regression
   Tobit Model
   Time Series
   etc.

============================================================ */

const analysisModels = [

    {
        number: "01",

        title: "Linear Regression",

        description:
            "A demonstration of linear regression and how the model can be used to examine relationships between variables.",

        pdf: "assets/data/linear-regression.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },


    {
        number: "02",

        title: "Logistic Regression",

        description:
            "A demonstration of logistic regression for modelling binary outcomes.",

        pdf: "assets/data/logistic-regression.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },


    {
        number: "03",

        title: "Polynomial Regression",

        description:
            "A demonstration of polynomial regression for modelling nonlinear relationships.",

        pdf: "assets/data/polynomial-regression.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },


    {
        number: "04",

        title: "Ridge Regression",

        description:
            "A demonstration of regularized regression using Ridge.",

        pdf: "assets/data/ridge-regression.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    }

];


/* ============================================================
   PRESENTATIONS
============================================================ */

const presentations = [

    {
        title: "Presentation 01",

        description:
            "A structured presentation demonstrating research, analysis, and communication.",

        ppt: "assets/presentations/presentation-01.pptx",

        pdf: "assets/presentations/presentation-01.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },


    {
        title: "Presentation 02",

        description:
            "Another presentation or academic communication piece.",

        ppt: "assets/presentations/presentation-02.pptx",

        pdf: "assets/presentations/presentation-02.pdf",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    }

];


/* ============================================================
   BRAND & INDUSTRY REPORTS
============================================================ */

const brandReports = [

    {
        title: "Brand Analysis",

        description:
            "A visual and written analysis of a brand, market, or industry.",

        images: [
            "assets/reports/brand-poster-01.jpg",
            "assets/reports/brand-poster-02.jpg"
        ],

        pdf: "assets/reports/brand-analysis.pdf"
    },


    {
        title: "Industry Report",

        description:
            "A structured report examining an industry, market, or business environment.",

        images: [
            "assets/reports/industry-poster.jpg"
        ],

        pdf: "assets/reports/industry-report.pdf"
    }

];


/* ============================================================
   MORE WORK
============================================================ */

const moreWork = [

    {
        title: "Additional Project",

        description:
            "An additional project, resource, or piece of work.",

        pdf: "assets/more-work/project.pdf",

        ppt: "assets/more-work/project.pptx",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    },


    {
        title: "Another Project",

        description:
            "Additional work that does not belong to the main categories.",

        pdf: "assets/more-work/project-02.pdf",

        ppt: "assets/more-work/project-02.pptx",

        youtube:
            "https://www.youtube.com/embed/YOUR_VIDEO_ID"
    }

];


/* ============================================================
   DOM
============================================================ */

const homePage = document.getElementById("home-page");
const workPage = document.getElementById("work-page");
const detailPage = document.getElementById("detail-page");

const workGrid = document.getElementById("work-grid");

const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");
const detailEyebrow = document.getElementById("detail-eyebrow");
const detailContent = document.getElementById("detail-content");


/* ============================================================
   ICONS
============================================================ */

const icons = {

    research: `
        <svg viewBox="0 0 24 24">
            <rect x="5" y="4" width="14" height="16"></rect>
            <line x1="8" y1="8" x2="16" y2="8"></line>
            <line x1="8" y1="11" x2="16" y2="11"></line>
            <line x1="8" y1="14" x2="14" y2="14"></line>
        </svg>
    `,

    analysis: `
        <svg viewBox="0 0 24 24">
            <rect x="5" y="5" width="3" height="14"></rect>
            <rect x="10.5" y="8" width="3" height="11"></rect>
            <rect x="16" y="3" width="3" height="16"></rect>
        </svg>
    `,

    presentations: `
        <svg viewBox="0 0 24 24">
            <rect x="4" y="6" width="16" height="12"></rect>
            <line x1="8" y1="9" x2="16" y2="9"></line>
            <line x1="8" y1="12" x2="14" y2="12"></line>
        </svg>
    `,

    reports: `
        <svg viewBox="0 0 24 24">
            <path d="M6 7h13l-2 10H4L6 7z"></path>
        </svg>
    `,

    more: `
        <svg viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    `
};


/* ============================================================
   RENDER WORK CARDS
============================================================ */

function renderWorkCards() {

    workGrid.innerHTML = "";

    workCategories.forEach(category => {

        const card = document.createElement("article");

        card.className = "work-card";

        card.onclick = () => {
            openDetail(category.id);
        };

        card.innerHTML = `

            <div class="work-card-icon">
                ${icons[category.type]}
            </div>

            <h3>
                ${category.title}
            </h3>

            <p>
                ${category.description}
            </p>

            <span class="card-arrow">
                →
            </span>

        `;

        workGrid.appendChild(card);
    });
}


/* ============================================================
   SHOW HOME
============================================================ */

function showHome() {

    homePage.classList.remove("hidden");
    workPage.classList.add("hidden");
    detailPage.classList.add("hidden");

    updateNavigation("home");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.replaceState(null, "", "#home");
}


/* ============================================================
   SHOW WORK
============================================================ */

function showWork() {

    homePage.classList.add("hidden");
    workPage.classList.remove("hidden");
    detailPage.classList.add("hidden");

    updateNavigation("work");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.replaceState(null, "", "#work");
}


/* ============================================================
   OPEN DETAIL
============================================================ */

function openDetail(id) {

    const category =
        workCategories.find(item => item.id === id);

    if (!category) return;

    homePage.classList.add("hidden");
    workPage.classList.add("hidden");
    detailPage.classList.remove("hidden");

    detailEyebrow.textContent =
        "SKILL PORTFOLIO / " +
        category.title.toUpperCase();

    detailTitle.textContent =
        category.title;

    detailDescription.textContent =
        category.description;

    detailContent.innerHTML = "";

    if (category.type === "research") {

        renderResearch();

    } else if (category.type === "analysis") {

        renderAnalysis();

    } else if (category.type === "presentations") {

        renderPresentations();

    } else if (category.type === "reports") {

        renderReports();

    } else if (category.type === "more") {

        renderMoreWork();

    }

    updateNavigation("work");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    history.replaceState(null, "", "#" + id);
}


/* ============================================================
   RESEARCH PAGE
============================================================ */

function renderResearch() {

    if (researchWork.length === 0) {

        detailContent.innerHTML = `
            <div class="empty-state">
                Your research PDFs will appear here.
            </div>
        `;

        return;
    }


    const grid = document.createElement("div");

    grid.className = "items-grid";


    researchWork.forEach(item => {

        const element =
            document.createElement("article");

        element.className =
            "work-item full-width";


        element.innerHTML = `

            <h3 class="work-item-title">
                ${item.title}
            </h3>

            <p class="work-item-description">
                ${item.description}
            </p>

            ${createPDF(item.pdf)}

        `;


        grid.appendChild(element);

    });


    detailContent.appendChild(grid);
}


/* ============================================================
   DATA & ANALYSIS
============================================================ */

function renderAnalysis() {

    if (analysisModels.length === 0) {

        detailContent.innerHTML = `
            <div class="empty-state">
                Your statistical models will appear here.
            </div>
        `;

        return;
    }


    analysisModels.forEach(model => {

        const section =
            document.createElement("section");

        section.className =
            "model-section";


        section.innerHTML = `

            <div class="model-heading">

                <span class="model-number">
                    ${model.number}
                </span>

                <h3>
                    ${model.title}
                </h3>

            </div>

            <div class="items-grid">

                <article class="work-item">

                    <h4 class="work-item-title">
                        PDF
                    </h4>

                    <p class="work-item-description">
                        ${model.description}
                    </p>

                    ${createPDF(model.pdf)}

                </article>


                <article class="work-item">

                    <h4 class="work-item-title">
                        Video Explanation
                    </h4>

                    ${createYouTube(model.youtube)}

                </article>

            </div>

        `;


        detailContent.appendChild(section);

    });
}


/* ============================================================
   PRESENTATIONS
============================================================ */

function renderPresentations() {

    if (presentations.length === 0) {

        detailContent.innerHTML = `
            <div class="empty-state">
                Your presentations will appear here.
            </div>
        `;

        return;
    }


    const grid =
        document.createElement("div");

    grid.className =
        "items-grid";


    presentations.forEach(item => {

        const element =
            document.createElement("article");

        element.className =
            "work-item";


        element.innerHTML = `

            <h3 class="work-item-title">
                ${item.title}
            </h3>

            <p class="work-item-description">
                ${item.description}
            </p>


            <div class="ppt-file">

                <div class="file-icon">
                    PPT
                </div>

                <div>

                    <strong>
                        Presentation Slides
                    </strong>

                    <div style="margin-top:8px;">
                        <a
                            href="${item.ppt}"
                            download
                            class="file-button"
                        >
                            Download PPT
                        </a>
                    </div>

                </div>

            </div>


            <div style="margin-top:25px;">

                <strong>
                    PDF Version
                </strong>

                <div style="margin-top:12px;">
                    ${createPDF(item.pdf)}
                </div>

            </div>


            <div style="margin-top:25px;">

                <strong>
                    Recorded Presentation
                </strong>

                <div style="margin-top:12px;">
                    ${createYouTube(item.youtube)}
                </div>

            </div>

        `;


        grid.appendChild(element);

    });


    detailContent.appendChild(grid);
}


/* ============================================================
   BRAND & INDUSTRY REPORTS
============================================================ */

function renderReports() {

    if (brandReports.length === 0) {

        detailContent.innerHTML = `
            <div class="empty-state">
                Your brand and industry reports will appear here.
            </div>
        `;

        return;
    }


    const grid =
        document.createElement("div");

    grid.className =
        "items-grid";


    brandReports.forEach(item => {

        const element =
            document.createElement("article");

        element.className =
            "work-item";


        let imagesHTML = "";

        if (item.images && item.images.length > 0) {

            imagesHTML = `

                <div class="image-gallery">

                    ${item.images.map(image => `

                        <a
                            href="${image}"
                            target="_blank"
                        >
                            <img
                                src="${image}"
                                class="gallery-image"
                                alt="${item.title}"
                            >
                        </a>

                    `).join("")}

                </div>

            `;

        }


        element.innerHTML = `

            <h3 class="work-item-title">
                ${item.title}
            </h3>

            <p class="work-item-description">
                ${item.description}
            </p>

            ${imagesHTML}


            <div style="margin-top:25px;">

                <strong>
                    Full Report
                </strong>

                <div style="margin-top:12px;">
                    ${createPDF(item.pdf)}
                </div>

            </div>

        `;


        grid.appendChild(element);

    });


    detailContent.appendChild(grid);
}


/* ============================================================
   MORE WORK
============================================================ */

function renderMoreWork() {

    if (moreWork.length === 0) {

        detailContent.innerHTML = `
            <div class="empty-state">
                Your additional work will appear here.
            </div>
        `;

        return;
    }


    const grid =
        document.createElement("div");

    grid.className =
        "items-grid";


    moreWork.forEach(item => {

        const element =
            document.createElement("article");

        element.className =
            "work-item";


        element.innerHTML = `

            <h3 class="work-item-title">
                ${item.title}
            </h3>

            <p class="work-item-description">
                ${item.description}
            </p>


            ${item.pdf ? `

                <div style="margin-bottom:25px;">

                    <strong>
                        PDF
                    </strong>

                    <div style="margin-top:12px;">
                        ${createPDF(item.pdf)}
                    </div>

                </div>

            ` : ""}


            ${item.ppt ? `

                <div style="margin-bottom:25px;">

                    <strong>
                        PowerPoint
                    </strong>

                    <div style="margin-top:12px;">

                        <div class="ppt-file">

                            <div class="file-icon">
                                PPT
                            </div>

                            <a
                                href="${item.ppt}"
                                download
                                class="file-button"
                            >
                                Download PPT
                            </a>

                        </div>

                    </div>

                </div>

            ` : ""}


            ${item.youtube ? `

                <div>

                    <strong>
                        Video
                    </strong>

                    <div style="margin-top:12px;">
                        ${createYouTube(item.youtube)}
                    </div>

                </div>

            ` : ""}

        `;


        grid.appendChild(element);

    });


    detailContent.appendChild(grid);
}


/* ============================================================
   PDF COMPONENT
============================================================ */

function createPDF(path) {

    if (!path) {

        return `
            <div class="empty-state">
                PDF not added yet.
            </div>
        `;

    }


    return `

        <iframe
            src="${path}"
            class="pdf-preview"
            title="PDF preview"
        ></iframe>

        <div class="pdf-actions">

            <a
                href="${path}"
                target="_blank"
                class="file-button"
            >
                Open PDF
            </a>

            <a
                href="${path}"
                download
                class="file-button secondary"
            >
                Download PDF
            </a>

        </div>

    `;
}


/* ============================================================
   YOUTUBE COMPONENT
============================================================ */

function createYouTube(url) {

    if (!url || url.includes("YOUR_VIDEO_ID")) {

        return `
            <div class="empty-state">
                YouTube video not added yet.
            </div>
        `;

    }


    return `

        <div class="video-wrapper">

            <iframe
                src="${url}"
                title="YouTube video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture;
                web-share"
                allowfullscreen>
            </iframe>

        </div>

    `;
}


/* ============================================================
   NAVIGATION
============================================================ */

function updateNavigation(page) {

    document.querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.remove("active");

        });


    const active =
        document.querySelector(
            `.nav-link[href="#${page}"]`
        );


    if (active) {

        active.classList.add("active");

    }
}


/* ============================================================
   BROWSER BACK/FORWARD
============================================================ */

window.addEventListener("popstate", handleURL);

window.addEventListener("load", handleURL);


function handleURL() {

    const hash =
        window.location.hash.replace("#", "");

    if (hash === "work") {

        showWork();

    } else if (
        workCategories.some(
            category => category.id === hash
        )
    ) {

        openDetail(hash);

    } else {

        showHome();

    }
}


/* ============================================================
   INITIALIZE
============================================================ */

renderWorkCards();
