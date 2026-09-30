let btn = document.createElement("button");

btn.innerText = "Change Background";

document.body.appendChild(btn);

btn.addEventListener("click", function() {

    if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "white";
    } 
    else {
        document.body.style.backgroundColor = "red";
    }

});