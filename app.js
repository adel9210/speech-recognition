var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var content = document.getElementById('content');

document.getElementById('speak').onclick = () => {
    recognition.start();
    content.textContent = '';
}

const greatings = ["Nice, thank you", "Good and you?", "i am good, Long time no see you. is everything is good?"];

recognition.onresult = (event) => {
    var text = event.results[0][0].transcript;
    content.textContent = text;

    var msg = new SpeechSynthesisUtterance();
    if (text.includes('are you')) {
        text += '<br />' + greatings[Math.floor(Math.random() * greatings.length)];
        content.innerHTML = text;
    }

    msg.text = text;
    window.speechSynthesis.speak(msg);
}