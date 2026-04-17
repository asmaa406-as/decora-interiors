document.addEventListener('DOMContentLoaded', () => {
    // Initialize Map
    var map = L.map('map').setView([30.0444, 31.2357], 6); // مصر كمركز افتراضي

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Sample Projects on Map
    const projectsData = [
        { name: "Living Room", coords: [30.0444, 31.2357], desc: "Cairo Project" },
        { name: "Cafe", coords: [29.9782, 31.1342], desc: "Giza Cafe" },
        { name: "Bedroom", coords: [31.2001, 29.9187], desc: "Alexandria Bedroom" }
    ];

    projectsData.forEach(project => {
        L.marker(project.coords).addTo(map)
            .bindPopup(`<b>${project.name}</b><br>${project.desc}`);
    });

    // Form Submission
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert("✅ Message Sent Successfully! We will contact you soon.");
                form.reset();
                submitBtn.textContent = "Send Message";
                submitBtn.disabled = false;
            }, 1800);
        });
    }
});