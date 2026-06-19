/**
 * TaskFlow Landing Page JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Menu ---
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      
      // Prevent body scrolling when menu is open
      if (isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Contact Form Validation ---
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formStatus = document.getElementById('form-status');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateName() {
    if (!nameInput.value.trim()) {
      nameInput.classList.add('invalid');
      nameInput.setAttribute('aria-invalid', 'true');
      nameError.textContent = 'Name is required.';
      return false;
    } else {
      nameInput.classList.remove('invalid');
      nameInput.setAttribute('aria-invalid', 'false');
      nameError.textContent = '';
      return true;
    }
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    if (!val) {
      emailInput.classList.add('invalid');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Email is required.';
      return false;
    } else if (!emailRegex.test(val)) {
      emailInput.classList.add('invalid');
      emailInput.setAttribute('aria-invalid', 'true');
      emailError.textContent = 'Please enter a valid email address.';
      return false;
    } else {
      emailInput.classList.remove('invalid');
      emailInput.setAttribute('aria-invalid', 'false');
      emailError.textContent = '';
      return true;
    }
  }

  function validateMessage() {
    if (!messageInput.value.trim()) {
      messageInput.classList.add('invalid');
      messageInput.setAttribute('aria-invalid', 'true');
      messageError.textContent = 'Message is required.';
      return false;
    } else {
      messageInput.classList.remove('invalid');
      messageInput.setAttribute('aria-invalid', 'false');
      messageError.textContent = '';
      return true;
    }
  }

  // Real-time validation on blur
  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        // Success response
        formStatus.className = 'form-status-alert success';
        formStatus.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Message sent successfully! We will get back to you shortly.
        `;
        
        // Reset form fields
        contactForm.reset();
        
        // Clear success notification after 5 seconds
        setTimeout(() => {
          formStatus.className = 'form-status-alert';
          formStatus.innerHTML = '';
        }, 5000);
      } else {
        // Error response
        formStatus.className = 'form-status-alert error';
        formStatus.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          Please fix the errors in the form before submitting.
        `;
      }
    });
  }
});


