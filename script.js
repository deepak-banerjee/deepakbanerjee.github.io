// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with your actual endpoint)
      setTimeout(function() {
        // Show success message
        showFormMessage('Thank you! Your message has been sent successfully.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  function showFormMessage(message, type) {
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
      formMessage.classList.remove('hidden');
      
      // Hide message after 5 seconds
      setTimeout(function() {
        formMessage.classList.add('hidden');
      }, 5000);
    }
  }

  // Mobile menu toggle (if you want to add mobile menu functionality)
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      // Add your mobile menu toggle logic here
      console.log('Mobile menu clicked');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
