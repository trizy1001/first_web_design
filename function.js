// Get the main image element
const mainImg = document.getElementById('mainimg');

// Get all thumbnail images
const thumbnails = document.querySelectorAll('.smallmg');

// Loop through each thumbnail and add a click event listener
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // Change the source of the main image to the clicked thumbnail's source
    mainImg.src = thumbnail.src;
  });
});
