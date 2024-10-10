// Array to hold quote objects
let quotes = [];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    
    // Check if quotes are available
    if (quotes.length === 0) {
        quoteDisplay.textContent = "No quotes available. Please add some.";
        return;
    }

    // Generate a random index to select a quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Display the quote and its category
    quoteDisplay.textContent = `"${selectedQuote.text}" - ${selectedQuote.category}`;
}

// Function to add a new quote
function addQuote() {
    const quoteText = document.getElementById('newQuoteText').value.trim();
    const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

    // Validate input
    if (quoteText === "" || quoteCategory === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Create new quote object
    const newQuote = {
        text: quoteText,
        category: quoteCategory
    };

    // Add new quote to the array
    quotes.push(newQuote);

    // Clear input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    // Optionally, display the newly added quote
    showRandomQuote();
}

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Show a random quote when the "Show New Quote" button is clicked
    document.getElementById('newQuote').addEventListener('click', showRandomQuote);
});

