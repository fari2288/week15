function changeBackground() {

    if(document.getElementById('color').value == "white")
    document.body.style.background = "#FFFFFF";

    if(document.getElementById('color').value == "violet")
    document.body.style.background = "rgb(170, 116, 197)";

    if(document.getElementById('color').value == "blue")
    document.body.style.background = "rgb(93, 88, 158)";

    if(document.getElementById('color').value == "dark")
    document.body.style.background = "rgb(87, 75, 83)";
    
    if(document.getElementById('color').value == "pink")
    document.body.style.background = "rgb(255, 192, 203)";

    if(document.getElementById('color').value == "yellow")
    document.body.style.background = "rgb(244, 246, 106)";
}