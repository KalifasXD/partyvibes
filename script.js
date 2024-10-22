$(document).ready(function() {
  const reviews = document.querySelectorAll('.review-item');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');

  let currentReviewIndex = 0;
  let isAnimating = false;

  // Function to show a specific review with animation
  function showReview(newIndex, direction) {
    if (isAnimating || newIndex === currentReviewIndex) return; // Prevent multiple clicks during animation

    isAnimating = true;
    const currentReview = reviews[currentReviewIndex];
    const nextReview = reviews[newIndex];

    // Remove active class from the current review
    currentReview.classList.remove('active');

    // Add sliding classes based on direction
    if (direction === 'next') {
      currentReview.classList.add('slide-out-left');
      nextReview.classList.add('slide-in-right');
    } else {
      currentReview.classList.add('slide-out-right');
      nextReview.classList.add('slide-in-left');
    }

    // Make the new review active
    nextReview.classList.add('active');

    // Remove classes after the animation completes
    setTimeout(() => {
      currentReview.classList.remove('slide-out-left', 'slide-out-right');
      nextReview.classList.remove('slide-in-left', 'slide-in-right');
      currentReviewIndex = newIndex;
      isAnimating = false;
    }, 500); // Matches the CSS transition duration
  }

  // Initialize by showing the first review
  reviews[currentReviewIndex].classList.add('active');

  // Event listener for next button
  nextButton.addEventListener('click', () => {
    const nextIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(nextIndex, 'next');
  });

  // Event listener for previous button
  prevButton.addEventListener('click', () => {
    const prevIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(prevIndex, 'prev');
  });
});

$(document).ready(function() {
   // Detect if the user is on a mobile device
   const isMobile = window.matchMedia("(max-width: 768px)").matches;

   $('.dropdown-toggle').on('click', function(event) {
    const $dropdown = $(this).parent();
        
        if (isMobile) {
            event.preventDefault(); // Prevent navigation
            
            $dropdown.toggleClass('show'); // Toggle the 'show' class

            // Animate the dropdown menu
            if ($dropdown.hasClass('show')) {
                $dropdown.find('.dropdown-menu').slideDown(); // Open the dropdown
            } else {
                $dropdown.find('.dropdown-menu').slideUp(); // Close the dropdown
            }
    } else {
           // Navigate to ServicesPackages.html directly on desktop
           window.location.href = $(this).attr('href'); // Navigate to the specified page
       }
   });
});
