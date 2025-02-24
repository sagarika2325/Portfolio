<script>
    // Get all the accordion buttons
    var acc = document.getElementsByClassName("accordion");

    // Loop through all accordion buttons and add event listener
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggle the active class to show the panel
            this.classList.toggle("active");

            // Get the next panel (the div element that holds the skills)
            var panel = this.nextElementSibling;

            // If the panel is open, close it; if it's closed, open it
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
</script>
