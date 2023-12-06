// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Variabel 1: Checkboxen
    const checkbox = document.getElementById('divStyle');

    // Variabel 2: Alla textfält
    const textFields = document.querySelectorAll('.textfield');

    // Variabel 3: Knappen
    const myButton = document.getElementById('myButton');

    // Variabel 4: Div-elementet
    const myDiv = document.getElementById('myDiv');

    // Uppgift 5 - Skapa en fördefinierad funktion för textfälten
    function handleInputChange(event) {
        console.log(event.target); // Skriv ut avsändaren till konsolen

        const name = event.target.getAttribute('name'); // Hämta namnet på avsändaren
        if (name === 'content') {
            const value = event.target.value; // Hämta värdet från avsändaren
            myDiv.innerHTML = value; // Skriv värdet till div-elementet
        }
    }

    // Lägg till eventlyssnare till textfälten
    textFields.forEach(function (textField) {
        textField.addEventListener('input', handleInputChange);
        textField.addEventListener('blur', handleInputChange); // Kör när fokus lämnar fältet
    });

    // Uppgift 6 - Eventlyssnare till checkboxen
    checkbox.addEventListener('change', function (event) {
        const colorInput = document.getElementById('color'); // Hämta färg-input
        myDiv.style.backgroundColor = colorInput.value; // Sätt bakgrundsfärg på div-elementet
    });

    // Uppgift 6 - Eventlyssnare till knappen
    myButton.addEventListener('click', function () {
        myDiv.remove(); // Göm div-elementet vid knappklick
    });
});
