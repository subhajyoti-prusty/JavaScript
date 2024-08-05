let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    alert("Hello World");
    console.log("LOL");
}

btn.onmouseenter = function(){
    console.log("Mouse Enter");
}
    
