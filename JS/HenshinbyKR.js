// Array of random messages to be typed
const randomMessages = [
    "Designed for the best",
    "By the Rider, for the rider",
    "Unleash your inner hero",
    "Join the Henshin adventure",
    "Discover the power within",
    "Walking on the path of heaven",
    "Aesthetic",
    "the man who will ruled everything",
    "Advent",
    "Survive",
    "If he's Stronger, then I am the strongest",
    "Earth, Heaven",
];

const typingSpeed = 54; // Typing speed in milliseconds

// Get the element where the text will be typed
const typingTextElement = document.getElementById("typing-text");

// Function to get a random message from the array
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    return randomMessages[randomIndex];
}

// Function to simulate typing effect
function typeText() {
    const textToType = getRandomMessage();
    let i = 0;
    function type() {
        if (i < textToType.length) {
            typingTextElement.textContent += textToType[i];
            i++;
            setTimeout(type, typingSpeed);
        }
    }
    type();
}

//Footer stuff goes here
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/Sexfight/Logofaewfw.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title"></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
            </ul>
            <ul class="category">
                <li class="category-title"></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
                    <li><a href="#" class="footer-link"></a></li>
            </ul>
        </div>
    </div>
           <p class="footer-title">about company</p>
        <p class="info">Evolved Fight Lez is an erotic professional wrestling reality series created by the erotic film production company Kink. Although US features mostly erotic film actresses and models, its tag line describes the promotion as "100% Competitve, Non-Scripted Erotic Wrestling". US features a unique set of rules which can be briefly summarized as being based around actual competitive erotic wrestling that determines winners and losers by a scoring system. This scoring system refers to "Control Points", "Shame Points" and "Style Points". Matches are scheduled for 3 wrestling rounds and one "sex" round. </p>
            <p class="info"></p>
        <p class="info"></p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link"></a>
            </div>
            <div>
                <a href="" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">EVOLVED FIGHT LEZ™ MODELS 2024 | ALL RIGHT RESERVED </p>
    `;
}

createFooter();

