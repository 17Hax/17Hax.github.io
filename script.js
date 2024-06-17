function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('shifted');
}

function listItemClicked() {
    // Currently, this function does nothing when a list item is clicked.
    console.log("List item clicked");
}
