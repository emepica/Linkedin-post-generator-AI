function displayPost(response) {
    new Typewriter('#post-result', {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor: '|',
});
}
function generatePost(event) {
    event.preventDefault();
 
    let instructionInput = document.querySelector("#instructionInput");
    let apiKey = "ad5fae049bc56od6110tf383014598c5";
    let context = "You are a helpful assistant that generates LinkedIn posts based on user instructions. Your task is to create a LinkedIn post that is inspiring, authentic, and grounded — not cheesy, not overly motivational, and not cliché. The post should be very light and vague, and be well-structured, concise, and tailored to a professional audience. Use a friendly and approachable tone while maintaining professionalism. Start with a strong, real (not clickbait) hook in 1 or 2 short sentences, share a personal insight or story, include a meaningful takeaway, avoid clichés and exaggeration, keep it relatable and grounded, use short readable paragraphs, and end with either a reflective question or a calm concluding thought; keep the post between 100 to 200 words, use no emojis (or max one subtle one), no hashtags (or max three relevant ones), avoid a guru-like tone, and optionally add a small specific detail or a moment of doubt, learning, or contradiction. Generate it in basic HTML format, add emojis if relevant. Add with a lot of line breaks <br> to ease the reading.Do not include '''html''' in the post.";
    let prompt = `Generate a linkedin post based on this user instruction: ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let postResultElement = document.querySelector("#post-result");
    postResultElement.innerHTML = `Generating a post about "${instructionInput.value}" <br><br> This may take a few seconds, go grab a coffee ☕`;
    postResultElement.classList.remove("hidden");
axios.get(apiUrl).then(displayPost);
}
let postFormElement = document.querySelector("#post-generator-form");
postFormElement.addEventListener("submit", generatePost);
