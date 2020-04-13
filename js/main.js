const newInput = document.getElementById("newInput");
const entries = document.getElementById("entries");

newInput.focus(); // Bring focus to new input as soon as page loads

// Listen for enter key to press and add new item
newInput.addEventListener("keypress", (event => {
    if (event.key == "Enter") {

        console.log(newInput.value);

        const currentEntries = entries.childElementCount;
        newEntry(currentEntries, newInput.value);

        newInput.value = null; // Reset input
    }

}));

// Delete item
function registerDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(elmnt => {
        elmnt.addEventListener("click", () => {
            console.log(elmnt.parentNode.remove());
        });
    });
}

// Add item
function newEntry(postID, postContent) {
    const newEntry = document.createElement('li');

    newEntry.innerHTML = `
        <input type="checkbox" name="${postID}" id="${postID}">
        <label for="${postID}">${postContent}</label>
        <button class="delete">X</button>`;

    entries.appendChild(newEntry);

    registerDeleteButtons();
};
