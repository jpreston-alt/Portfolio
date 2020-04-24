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

$(".overlay").on("click", "mouseover", function(event) { 
    $(".overlay").css("opacity", "0");
    $(this).css("opacity", ".95");
});


