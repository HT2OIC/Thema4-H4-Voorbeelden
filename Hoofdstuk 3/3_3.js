const wwVeld = document.querySelector("#wachtwoord");
const toonKnop = document.querySelector("#toon-ww");
 
toonKnop.addEventListener("change", function () {
    if (toonKnop.checked) {
        wwVeld.type = "text";      // toon de tekens
    } else {
        wwVeld.type = "password";  // verberg ze weer
    }
});
