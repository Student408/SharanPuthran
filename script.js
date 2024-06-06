document.addEventListener('DOMContentLoaded', function() {
    const rotatingText = document.getElementById('rotating-text');
    const texts = [
        "Hello Everyone.",
        "I'm Sharan Puthran.",
        "Master of Business Administration."
    ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        rotatingText.textContent = currentText;
        rotatingText.style.fontSize = '4vh'; // Change font size here

        if (!isDeleting && charIndex < texts[index].length) {
            currentText += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            currentText = currentText.substring(0, currentText.length - 1);
            charIndex--;
            setTimeout(type, 50);
        } else if (!isDeleting && charIndex === texts[index].length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            setTimeout(type, 200);
        }
    }

    type();
});
