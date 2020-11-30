/*document.index.html

let btn = document.getElementsByClassName('main-button');
//let textSplash = document.createTextNode("Splash! We're all in!);



btn.addEventListener('click', buttonClicked);
 function buttonClicked() {
    var splashPopup = document.getElementsByClassName('main-button'); //JS looks through the document and finds the className called main button
    splashPopup.classList.toggle("Splash! We're all in!); //the popup text
     //document.getElementsByClassName('main-button').innerHTML = "Splash! We're all in!!";
    var learnMore = document.getElementsByClassName('big-button').style.visibility = "hidden"//JS looks for the element class name big button and hides

 };

} 
*/
document.addEventListener("DOMContentLoaded", function() {
    function hide(element) {
        element.style.display = "none";
    }
    function show(element) {
        element.style.display = "block";
    }
    var jumpIn = document.getElementByClassName("main-button")
    jumpIn.addEventListener("click", function() {
        hide(jumpIn);
        alert("Splash! We're all in!!");
        show(jumpIn);
    })
})






