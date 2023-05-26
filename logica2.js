var imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(function (container) {
    container.addEventListener('click', function () {
        this.classList.toggle('clicked');
    });
});



// const elemento = document.getElementById(".image-container");
// elemento.classList.toggle("clicked");


// var element = document.getElementById(".image-container");

// if (!element.classList.contains("clicked")) {
//   element.classList.add("clicked");
// }