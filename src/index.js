function generatePost(event) {
    event.preventDefault();

    new Typewriter('#post-result', {
    strings: ['The post will be there soon!'],
    autoStart: true,
    delay:1,
    cursor: '|',
});
}
let postFormElement = document.querySelector("#post-generator-form");
postFormElement.addEventListener("submit", generatePost);
