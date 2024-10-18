$(document).ready(function() {
  let currentReviewIndex = 0;
  const reviews = document.querySelectorAll('.review-item');

  document.querySelector('.next-button').addEventListener('click', () => {
      reviews[currentReviewIndex].style.display = 'none'; // Hide current review
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Move to next review
      reviews[currentReviewIndex].style.display = 'block'; // Show next review
  });

  document.querySelector('.prev-button').addEventListener('click', () => {
      reviews[currentReviewIndex].style.display = 'none'; // Hide current review
      currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length; // Move to previous review
      reviews[currentReviewIndex].style.display = 'block'; // Show previous review
  });

  // Display the first review initially
  reviews[currentReviewIndex].style.display = 'block';
});


document.addEventListener("DOMContentLoaded", function() {
  // Get all tab elements
  var tabs = document.querySelectorAll(".tab");
  
  // Get all content elements
  var contents = document.querySelectorAll(".Tab-Packets");
  
  // Variable to track animation state
  var isAnimating = false;
  

  // Function to reset isAnimating after a longer duration
  function resetIsAnimating() {
    setTimeout(function() {
      isAnimating = false;
    }, 1000); // Adjust the duration as needed (1 second in this case)
  }
  
  // Add click event listener to each tab
  tabs.forEach(function(tab, index) {
    tab.addEventListener("click", function() {
      // If the animation is currently playing, return

      if (isAnimating) return;
      
      // Set the isAnimating variable to true
      isAnimating = true;  

      // If the clicked tab is already active, return
      if (this.classList.contains("active")) return;

      // Get the currently active content
      var currentContent = document.querySelector(".Tab-Packets.active");
      
      // Remove active class from all tabs and contents
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });
      
      // Add fade-out class to the currently active content
      currentContent.classList.add("fade-out");

      // Wait for a short time to allow the fade-out animation to start
      setTimeout(function() {
        // Hide the currently active content
        currentContent.classList.remove("active");

        // Add active class to the clicked tab
        tab.classList.add("active");

        // Get the target content
        var targetContent = contents[index];

        // Show the target content with the sweeping animation
        targetContent.classList.add("active");
        targetContent.classList.add("swipe-in");

        
        // Remove the fade-out class and reset opacity from the currently active content after the animation is complete
        currentContent.classList.remove("fade-out");
        var oldCards = currentContent.querySelectorAll(".card");
        oldCards.forEach(function(card) {
        });
        
        // Hide the old cards by setting their opacity to 0 after the animation is done
        targetContent.addEventListener("animationend", function() {
          var oldCards = currentContent.querySelectorAll(".card");
          oldCards.forEach(function(card) {
          });

          // Remove the swipe-in class after the animation is completed
          targetContent.classList.remove("swipe-in");

          // Reset the isAnimating variable after a longer duration
          resetIsAnimating();
        });
      }, 500); // Wait for the fade-out animation to complete (adjust the time as needed)
    });
  });
});

