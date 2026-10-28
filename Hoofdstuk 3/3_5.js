const feedback = document.querySelector("#feedback");
 
function controleer(antwoord) {
    if (antwoord === "phishing") {
        feedback.textContent = "Juist! Dit is phishing.";
        feedback.style.color = "lightgreen";
    } else {
        feedback.textContent = "Fout. Let op verdachte links!";
        feedback.style.color = "red";
    }
}
 
document.querySelector("#phishing").addEventListener("click", function () {
    controleer("phishing");
});
document.querySelector("#echt").addEventListener("click", function () {
    controleer("echt");
});
