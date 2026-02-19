// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    // Support form handling
    const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real implementation, you'd send this to a server
            // For now, we'll show a success message
            alert(`Thank you for your message, ${data.name}! I'll get back to you soon at ${data.email}.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Download button animation
    const downloadButtons = document.querySelectorAll('.btn-success');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
            this.disabled = true;
            
            // Simulate download preparation
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-download"></i> Download Ready!';
                this.disabled = false;
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            }, 1500);
        });
    });
});
