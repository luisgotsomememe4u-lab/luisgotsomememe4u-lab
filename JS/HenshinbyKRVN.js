// Array of random messages to be typed
const randomMessages = [
    "Chỉ Dàng Cho Kẻ Xứng Đáng",
    "một tuyệt tác của thế kỉ 21",
    "khám phá sức mạnh thật sự của bạn trong thế giới gương",
    "đứng trước cửa ngõ thiên đường",
    "Aesthetic",
    "người mà sẽ thống trị tất cả",
    "Advent",
    "Survive",
    "Nếu anh ta là Stronger, thì tôi sẽ là Strongest",
    "Trái Đất, Thiên Đàng",
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

//SLIDING ANIMATION WHEN CLICKING

// Call the function to start typing when the page loads
window.addEventListener("load", typeText);

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth / 2; // Scroll half of the container width
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth / 2; // Scroll back by half of the container width
    })
})

//Footer stuff goes here
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="../img/HenshinWhite-removebg.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">áo thun</a></li>
                    <li><a href="#" class="footer-link">áo nỉ</a></li>
                    <li><a href="#" class="footer-link">áo sơ mi</a></li>
                    <li><a href="#" class="footer-link">quần bò</a></li>
                    <li><a href="#" class="footer-link">quần</a></li>
                    <li><a href="#" class="footer-link">giày</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">áo thun</a></li>
                    <li><a href="#" class="footer-link">áo nỉ</a></li>
                    <li><a href="#" class="footer-link">áo sơ mi</a></li>
                    <li><a href="#" class="footer-link">quần bò</a></li>
                    <li><a href="#" class="footer-link">quần</a></li>
                    <li><a href="#" class="footer-link">giày</a></li>
            </ul>
        </div>
    </div>
           <p class="footer-title">about company</p>
        <p class="info">Tại HENSHIN by KAMEN RIDER, chúng tôi là những người hâm mộ đam mê của thương hiệu huyền thoại Kamen Rider, và sứ mệnh của chúng tôi là mang đến sự hứng thú và phiêu lưu của Kamen Rider vào cuộc sống hàng ngày của bạn. Cho dù bạn là một người hâm mộ đích thực hoặc chỉ mới bắt đầu cuộc hành trình vào vũ trụ tuyệt vời này, cửa hàng của chúng tôi là nơi hoàn hảo để tìm thấy một loạt sản phẩm Kamen Rider đa dạng, từ quần áo đến phụ kiện và đồ sưu tập.</p>
            <p class="info">e-mail hỗ trợ khách hàng - henshinbykamenriderapac@gmail.com</p>
        <p class="info">đường dây nóng - +94(848)39629320</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Điều khoản và Dịch vụ</a>
            </div>
            <div>
                <a href="https://www.instagram.com/henshin_by_kamenrider/?hl=en" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">HENSHIN by KAMEN RIDER™ ASIAN-PACIFIC 2023 | MỌI QUYỀN ĐƯỢC BẢO LƯU </p>
    `;
}

createFooter();


