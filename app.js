function getRandomPrompt() {
    var prompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById('prompt').innerHTML = prompt;
}
getRandomPrompt();
