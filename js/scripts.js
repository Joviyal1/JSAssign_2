// constants for query selector
const myStudentId = "200536540"; // Replace with your student ID
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
// function to change bg color from user input and add student id
function changeCustomColor() {
    const customNumber = parseInt(customNumberInput.value);
    if (customNumber < 0 || customNumber > 100) {
        document.body.style.backgroundColor = "red";
    } else if (customNumber >= 0 && customNumber <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (customNumber > 20 && customNumber <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (customNumber > 40 && customNumber <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (customNumber > 60 && customNumber <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
    document.getElementById("myStudentId").textContent = myStudentId;
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomValue; ]
    changeCustomColor(); 
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imgNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; // Replace with your image names
    for (let i = 0; i < imgNames.length; i++) {
        const option = document.createElement("option");
        option.value = imgNames[i];
        option.text = imgNames[i];

        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// event listeners for on change event of select
addList();
