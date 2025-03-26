document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function enlargeImage(img) {
    const modal = document.getElementById("imageModal");
    const enlargedImg = document.getElementById("enlargedImg");
    
    // Set the source of the enlarged image to the clicked image
    enlargedImg.src = img.src;
    // Show the modal
    modal.style.display = "flex";
}

function closeImage() {
    const modal = document.getElementById("imageModal");
    // Hide the modal
    modal.style.display = "none";
}