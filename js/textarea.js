$(document).ready(function () {
    $('.text-area').hover(
        function () {
            $(this).children("textarea").addClass("textarea_hover"); //Add an active class to the anchor
        },
        function () {
            $(this).children("textarea").removeClass("textarea_hover"); //Remove an active class to the anchor
        }
    );

});
