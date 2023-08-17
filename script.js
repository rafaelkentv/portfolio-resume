function showModal(title, description) {
    var modal = document.getElementById("projectModal");
    var titleElement = document.getElementById("projectTitle");
    var descriptionElement = document.getElementById("projectDescription");

    titleElement.innerText = title;
    descriptionElement.innerText = description;

    modal.style.display = "block";
}

function hideModal() {
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
}