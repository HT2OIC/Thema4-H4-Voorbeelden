// ── 1. Constanten en variabelen (H1.4) ───────────────────────
// const voor waardes die niet veranderen, let voor waardes die wel veranderen.

const jaar = new Date().getFullYear();            // H1.10: ingebouwde klasse Date


// ── 2. Selectors (H2.2) ─────────────────────────────────────
// Met querySelector zoek je een element op basis van een CSS-selector.

const voettekst = document.querySelector("footer p");
const wwVeld = document.querySelector("#wachtwoord");
const toonKnop = document.querySelector("#toon-ww");
const sterkteTekst = document.querySelector("#ww-sterkte");
const feedback = document.querySelector("#feedback");


// ── 3. Functies en events (H1.9 + H2.4) ─────────────────────

// --- Footer: jaar automatisch aanpassen (H2.3: DOM-manipulatie) ---
voettekst.textContent = "© " + jaar + " CyberSafe";

// --- Wachtwoord tonen/verbergen (H2.4: change event) ---
toonKnop.addEventListener("change", function () {
    if (toonKnop.checked) {
        wwVeld.type = "text";
    } else {
        wwVeld.type = "password";
    }
});

// --- Wachtwoordsterkte controleren (H1.7: selectie + H2.4: input event) ---
function controleerSterkte() {
    const lengte = wwVeld.value.length;

    if (lengte === 0) {
        sterkteTekst.textContent = "";
    } else if (lengte < 8) {
        sterkteTekst.textContent = "Zwak wachtwoord";
        sterkteTekst.style.color = "red";
    } else {
        sterkteTekst.textContent = "Sterk wachtwoord";
        sterkteTekst.style.color = "lightgreen";
    }
}

wwVeld.addEventListener("input", controleerSterkte);

// --- Phishing-quiz (H1.9: functies + H2.4: click event) ---
function controleerAntwoord(antwoord) {
    if (antwoord === "phishing") {
        feedback.textContent = "Juist! Dit is phishing.";
        feedback.style.color = "lightgreen";
    } else {
        feedback.textContent = "Fout. Let op verdachte links!";
        feedback.style.color = "red";
    }
}

document.querySelector("#phishing").addEventListener("click", function () {
    controleerAntwoord("phishing");
});

document.querySelector("#echt").addEventListener("click", function () {
    controleerAntwoord("echt");
});


// ── 4. Overige code (H1.3) ──────────────────────────────────
// console.log() toont berichten in de console (F12).

console.log("CyberSafe is geladen!");