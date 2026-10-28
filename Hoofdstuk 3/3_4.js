const wwVeld = document.querySelector("#wachtwoord");
const sterkteTekst = document.querySelector("#ww-sterkte");
 
wwVeld.addEventListener("input", function () {
    const lengte = wwVeld.value.length;
    if (lengte < 8) {
        sterkteTekst.textContent = "Zwak wachtwoord";
        sterkteTekst.style.color = "red";
    } else {
        sterkteTekst.textContent = "Sterk wachtwoord";
        sterkteTekst.style.color = "lightgreen";
    }
});