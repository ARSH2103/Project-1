
function showSection(sectionId) {
    document.querySelectorAll('.card').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
