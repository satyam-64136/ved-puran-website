// JavaScript code for scrolling cards
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cardsWrapper = document.querySelector('.cards-wrapper');
const scrollAmount = 300; // Adjust as needed

leftBtn.addEventListener('click', function() {
    cardsWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', function() {
    cardsWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

let availableKeyWords = [
    'Agni puran',
    'Bhagvat puran',
    'Bhavishya puran',
    'Matsya puran',
    'Skand puran',
    'Vishnu puran',
    'padma puran'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

// Event listener for input box keyup event
inputBox.onkeyup = function() {
    let input = inputBox.value.trim().toLowerCase();
    let filteredResults = availableKeyWords.filter(keyword => keyword.toLowerCase().includes(input));
    showResults(filteredResults);
}

function showResults(results) {
    resultBox.innerHTML = "";
    let input = inputBox.value.trim().toLowerCase();
    if (input === "") {
        return; // Exit the function if input is empty
    }
    if (results.length > 0) {
        const ul = document.createElement("ul");
        results.forEach((result) => {
            const li = document.createElement("li");
            li.textContent = result;
            li.addEventListener("click", function() {
                inputBox.value = result;
                resultBox.innerHTML = ""; // Clear result box
            });
            ul.appendChild(li);
        });
        resultBox.appendChild(ul);
    } else {
        resultBox.innerHTML = "<p>No results found</p>";
    }
}
