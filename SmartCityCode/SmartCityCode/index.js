function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function log_in() {
	window.location.href = "log_in.html";
}

function hide_menu() {
    $("#menu").hide("slow");
}

function init() {
    $("#menu_icon").on("click", function (e) {
        e.stopPropagation();
        $("#menu").show("fast", "swing");
    });
    $("#menu_close_icon").on("click", function (e) {
        e.stopPropagation();
        $("#menu").hide("slow");
    });
}

function show_menu() {
    $("#menu").show("fast", "swing");
}