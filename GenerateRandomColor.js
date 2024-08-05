let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log('Your random color is: ' + randomColor());

    let h1 = document.querySelector('h1');
    let color = randomColor();
    h1.innerText = color;

    let div = document.querySelector('div');
    div.style.backgroundColor = color;

    let p = document.querySelector('p');
    p.style.color = randomColor();
});

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}