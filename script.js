  // Contact form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // check if message is empty
    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }
    // show success message
    alert("Thank you! Your message has been sent.");
  });

  // Light Mode Toggle
  const toggleThemeBtn = document.getElementById('toggle-theme');
  function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        toggleThemeBtn.textContent = 'Switch to dark mode'
    } else{
                toggleThemeBtn.textContent = 'Switch to light mode'

    }
}
    toggleThemeBtn.addEventListener('click', toggleLightMode);
