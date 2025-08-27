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
        toggleThemeBtn.textContent = 'Switch to 🌚 mode';
        document.getElementById("bg-gif").style.display = "none";
        document.getElementById("myVideo_light").style.display = "block";
    } else{
        toggleThemeBtn.textContent = 'Switch to 🔆 mode';
        document.getElementById("bg-gif").style.display = "block";
        document.getElementById("myVideo_light").style.display = "none";
    }
}
    toggleThemeBtn.addEventListener('click', toggleLightMode);

    // Typewriter effect for phone number
    function typeWriter() {
      const phoneNumber = "(437) 261-1264";
      const phoneNumberElement = document.getElementById("phone-number");
      let i = -1;

      function type() {

        if (i < phoneNumber.length) {
          phoneNumberElement.innerHTML += phoneNumber.charAt(i);
          i++;
          setTimeout(type, 100);
        }
      }     

      type();
      // clear the phone number after typing
      phoneNumberElement.innerHTML = "";
    }