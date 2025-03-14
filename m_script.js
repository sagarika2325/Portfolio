var typed = new Typed(".text", {
    strings: ["Data Analysis" , "Build and Learn New-Tech"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });
  
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.getElementById('Resume_Button').addEventListener('click', function() 
  {
  gtag('event', 'button_click', 
    {
    'event_category': 'engagement','event_label': 'Resume_Button'});
  });
          
  
  