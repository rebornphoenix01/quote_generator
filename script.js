document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote');
    const tweetQuoteBtn = document.getElementById('tweet-quote');
    const facebookQuoteBtn = document.getElementById('facebook-quote');

    // Function to fetch a new quote
    const getQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `- ${data.author}`;
        } catch (error) {
            quoteText.textContent = "Sorry, an error occurred while fetching the quote.";
            authorText.textContent = "";
        }
    };

    // Function to share the quote on Twitter
    const shareOnTwitter = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${authorText.textContent}`;
        window.open(tweetUrl, '_blank');
    };

    // Function to share the quote on Facebook
    const shareOnFacebook = () => {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${quoteText.textContent} ${authorText.textContent}`;
        window.open(fbUrl, '_blank');
    };

    // Event listeners
    newQuoteBtn.addEventListener('click', getQuote);
    tweetQuoteBtn.addEventListener('click', shareOnTwitter);
    facebookQuoteBtn.addEventListener('click', shareOnFacebook);

    // Load initial quote
    getQuote();
});