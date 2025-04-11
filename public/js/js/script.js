// Trainingsfilter
document.addEventListener("DOMContentLoaded", () => {
    const workoutCards = document.querySelectorAll(".workout-card");

    //Klick-Event für Trainingskarten
    workoutCards.forEach(card => {
        card.addEventListener("click", () => {
            alert('Trainingsplan wird geladen...');
        });
    })

    //Kontaktformular
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert('Nachricht gesendet!');
    })
})