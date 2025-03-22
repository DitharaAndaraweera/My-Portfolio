document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle")
    const navLinks = document.getElementById("nav-links")
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
  
      // Animate hamburger to X
      const bars = document.querySelectorAll(".bar")
      bars.forEach((bar) => bar.classList.toggle("change"))
    })
  
    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
  
          // Reset hamburger
          const bars = document.querySelectorAll(".bar")
          bars.forEach((bar) => bar.classList.remove("change"))
        }
      })
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  
    // Sticky Navigation
    const navbar = document.getElementById("navbar")
    const scrollThreshold = 100
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollThreshold) {
        navbar.style.padding = "10px 0"
        navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
      } else {
        navbar.style.padding = "15px 0"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    })
  
    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTopButton.style.display = "flex"
      } else {
        backToTopButton.style.display = "none"
      }
    })
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Animate skill bars on scroll
    const skillLevels = document.querySelectorAll(".skill-level")
  
    // Set initial width to 0
    skillLevels.forEach((level) => {
      level.style.width = "0"
    })
  
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Function to animate skill bars
    function animateSkillBars() {
      skillLevels.forEach((level) => {
        if (isInViewport(level)) {
          const width = level.style.width
          if (width === "0px" || width === "0%" || width === "") {
            // Get the width from the style attribute
            const targetWidth = level.getAttribute("style").split("width:")[1].split(";")[0].trim()
            level.style.width = targetWidth
          }
        }
      })
    }
  
    // Initial check and add scroll event listener
    animateSkillBars()
  
    // Add percentage labels to skill bars
    function addSkillPercentages() {
      const skillLevels = document.querySelectorAll('.skill-level');
      
      skillLevels.forEach(level => {
          const style = level.getAttribute('style');
          if (style) {
              const widthMatch = style.match(/width:\s*(\d+)%/);
              if (widthMatch && widthMatch[1]) {
                  const percentage = widthMatch[1];
                  level.setAttribute('data-percent', percentage + '%');
              }
          }
      });
    }
  
    // Call the function
    addSkillPercentages();
  
    window.addEventListener("scroll", animateSkillBars)
    addSkillPercentages();
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it and show an alert
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  })