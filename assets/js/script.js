$(document).ready(function () {

    // event listener for hamburger drop down menu
    $(".navbar-burger").each(function () {
        $(this).on("click", function () {
            // targets data-target attribute which is equal to regular nav bar menu's ID
            var targetAttribute = $(this).attr("data-target");
            var $navbarMenuID = $("#" + targetAttribute);

            // toggles active class between regular navbar menu and hamburger menu
            $(this).toggleClass("is-active");
            $navbarMenuID.toggleClass("is-active");
        });
    });

    // event listener when user clicks on project card - displays info
    $(document).on("click", ".overlay", function() {
        $(".overlay").css("opacity", "0");
        $(this).css("opacity", ".95");
    });

    // event listener when user hovers over project card - displays info
    $(document).on("mouseover", ".overlay", function () {
        $(".overlay").css("opacity", "0");
        $(this).css("opacity", ".95");
    });

    // event listener when mouse leaves project card - hides info
    $(document).on("mouseleave", ".overlay", function () {
        $(".overlay").css("opacity", "0");
    });

    // event listener for resume modal
    $(".resume-link").on("click", function(event) {
        event.preventDefault();
        $(".resume-modal").addClass("is-active");
    })

    // event listener closing resume modal
    $(".resume-modal-close").on("click", function(event) {
        event.preventDefault();
        $(".resume-modal").removeClass("is-active");
    });

    // event listener for contact
    $(".contact-link").on("click", function (event) {
        event.preventDefault();
        $(".contact-modal").addClass("is-active");
    })

    // event listener closing contact modal
    $(".contact-modal-close").on("click", function (event) {
        event.preventDefault();
        $(".contact-modal").removeClass("is-active");
    });

    // function consturctor Project Card
    function ProjectCard(title, about, imgURL, siteURL, repoURL) {
        this.title = title;
        this.about = about;
        this.imgURL = imgURL;
        this.siteURL = siteURL;
        this.repoURL = repoURL;
    };

    // new Project Card instances
    const quarCard = new ProjectCard(
        "Quarentainment",
        "Browse for trending movies, tv shows, and books to keep you entertained during your involuntary time at home. Save content to your personal list to remember for later.",
        "assets/images/quar.png",
        "https://jpreston-alt.github.io/Quarentainment/",
        "https://github.com/jpreston-alt/Quarentainment"
    );

    const weatherCard = new ProjectCard(
        "Weather Dashboard",
        "View current and future weather conditions for any city. Past viewed cities are saved to search history for easier viewing in the future.",
        "assets/images/weather.png",
        "https://jpreston-alt.github.io/Weather-Dashboard/",
        "https://github.com/jpreston-alt/Weather-Dashboard"
    );

    const plannerCard = new ProjectCard(
        "Work Day Planner",
        "A simple calendar app for scheduling your work day. Color coded time blocks update depending on what time of day it is, allowing the user to see where they are in their day at a glance.",
        "assets/images/planner.png",
        "https://jpreston-alt.github.io/Day-Planner/",
        "https://github.com/jpreston-alt/Day-Planner"
    );

    const quizCard = new ProjectCard(
        "Code Quiz",
        "A quiz built using JavaScript, to test your coding knowledge. Race against the clock to answer all the questions correctly. Save your high scores to track your improvement.",
        "assets/images/quiz.png",
        "https://jpreston-alt.github.io/Code-Quiz/",
        "https://github.com/jpreston-alt/Code-Quiz"
    );

    const profileGenCard = new ProjectCard(
        "Team Profile Generator",
        "A command-line-interface application, built with Node.js, that allows the user to easily generate a team profile webpage, featuring summaries of their team members.",
        "assets/images/team-profile.png",
        "https://github.com/jpreston-alt/Team-Profile-Generator",
        "https://github.com/jpreston-alt/Team-Profile-Generator"
    );

    const notepadCard = new ProjectCard(
        "Notepad",
        "Organize your thoughts with Notepad, a note-taking application build with Express.js. Notepad helps you keep track of everything you need to remember by allowing you to save, view, and delete important reminders and thoughts.",
        "assets/images/notepad.png",
        "https://jp-express-notepad.herokuapp.com/",
        "https://github.com/jpreston-alt/Express-Note-Taker",
    );

    const burgerCard = new ProjectCard(
        "Eat-Da-Burger",
        "A full-stack, restaurant application that allows the user to input, devour, rate, and delete tasty burgers from a MySQL database. Eat-Da-Burger utilizes the MVC design pattern, and is built using MySQL, Node, Express, Handlebars and a homemade ORM.",
        "assets/images/burger2.png",
        "https://jp-burger-logger.herokuapp.com/",
        "https://github.com/jpreston-alt/Burger-Logger"
    );

    let projectCardsArr = [burgerCard, notepadCard, quarCard, profileGenCard, weatherCard, plannerCard, quizCard];

    // function to render project cards to screen
    function renderCard(card) {
        let newCard = 
        `<div class="column is-half">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2 pic-container">
                        <img src=${card.imgURL} alt="Placeholder image" class="portfolio-img">
                        <div class="overlay">
                            <div class="card overlay-card">
                                <div class="card-content project-card-content has-text-centered">
                                    <p class="title has-text-white project-title">
                                        ${card.title}
                                    </p>
                                    <p class="subtitle is-6 has-text-white project-description">
                                        ${card.about}
                                    </p>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <a href=${card.siteURL} target="_blank" class="card-links">View Website</a>
                                    </p>
                                    <p class="card-footer-item">
                                        <a href=${card.repoURL} target="_blank" class="card-links">GitHub Repo</a>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>`

        $("#cards-container").append(newCard);
    };


    function init() {
        // render project cards
        projectCardsArr.forEach(renderCard);
    };

    init();

});
