document.addEventListener('DOMContentLoaded', function() {
  var projects = document.getElementsByClassName('row');
  
  // Adding a click listener to each category element
  for (var i = 0; i < projects.length; i++) {
      projects[i].addEventListener('click', function() {
          // Retrieve the data-href attribute and redirect to the URL
          var url = this.getAttribute('data-href');
          window.location.href = url;
      });
  }
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



