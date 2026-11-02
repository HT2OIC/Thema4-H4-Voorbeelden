function begroet(naam) {
    if (naam === "admin") {
        return "Welkom, beheerder!";
    } else {
        return "Hallo " + naam;
    }
}
 
console.log(begroet("Sara"));   // Hallo Sara