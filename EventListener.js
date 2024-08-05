let btns = document.querySelectorAll("button");

for (btn of btns){
    btn.addEventListener("click", function(){
        console.log("Button clicked");
    });
    btn.addEventListener("mouseover", function(){
        console.log("Mouse over");
    });
    btn.addEventListener("dbclick", function(){
        console.log("Mouse out");
    });
}