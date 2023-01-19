const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceContainer = document.getElementById("advice-container");

nextAdvice();

function nextAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            adviceContainer.classList.add("fade-in");
            adviceId.innerText = data.slip.id;
            adviceText.innerText = data.slip.advice;
        });

        adviceContainer.classList.remove("fade-in");
}