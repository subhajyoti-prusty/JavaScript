let inp = document.querySelector('input');

inp.addEventListener("keydown", function(event) {
    console.log(event.key);
    console.log(event.code);
    console.log("Keydown event");
});

inp.addEventListener('keyup', function() {
    console.log("keyup event");
});

inp.addEventListener('keypress', function() {
    console.log("keypress event");
});