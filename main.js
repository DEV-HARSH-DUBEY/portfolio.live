const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Typewriter lines
const lines = [
    "Angular enthusiast building pixel-perfect UIs.",
    "I craft components, optimize performance, and write tests.",
    "I also build Spring Boot services that power the frontend."
];
const el = document.getElementById('typewriter');
let li = 0, ci = 0, forward = true;
function typeTick() {
    const text = lines[li];
    if (forward) {
        ci++;
        el.textContent = text.slice(0, ci);
        if (ci === text.length) { forward = false; setTimeout(typeTick, 1200); return; }
    } else {
        ci--;
        el.textContent = text.slice(0, ci);
        if (ci === 0) { forward = true; li = (li + 1) % lines.length; }
    }
    setTimeout(typeTick, forward ? 40 : 20);
}
// Start after small delay
setTimeout(typeTick, 600);


// Reveal on scroll for story chapters
const reveals = document.querySelectorAll('[data-reveal]');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('revealed');
    });
}, { threshold: 0.18 });
reveals.forEach(r => obs.observe(r));


function isMaliciousInput(input) {
    // Simple checks for script tags or suspicious characters
    const pattern = /<script|<\/script|on\w+=|javascript:|data:text\/html/i;
    return pattern.test(input);
}

// Contact form submission
const toEmail = 'mailto:mailformharshdubey@gmail.com';
function onContactSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('ContactForm');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    if (isMaliciousInput(name) || isMaliciousInput(email) || isMaliciousInput(message)) {
        alert('Invalid input detected. Please avoid using special characters or scripts.');
        return;
    }

    let mailtoLink = `${toEmail}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
    window.location.href = mailtoLink;
    window.open(mailtoLink, '_blank');
    // Simulate form submission
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();

}


function openLink(linkId) {
    if (!linkId) { return; }
    switch (linkId) {
        case 1:
            window.open('https://github.com/DEV-HARSH-DUBEY', '_blank');
            break;
        case 2:
            window.open('https://www.linkedin.com/in/harsh-dubey-7154b2251', '_blank');
            break;
        case 3:
            window.open('https://www.instagram.com/harsh._.dubey/', '_blank');
            break;
        default:
            alert('Link not found !');
            break;
    }
}

// Download resume
function downloadResume() {
    alert('Resume download is temporarily unavailable. If you would like a copy of my resume, please feel free to contact me via email. Thank you for your understanding!');
}

