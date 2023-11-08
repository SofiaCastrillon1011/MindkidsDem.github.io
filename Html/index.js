document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

function toggleContent(id) {
    let content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}