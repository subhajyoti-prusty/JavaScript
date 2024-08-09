let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted");
});