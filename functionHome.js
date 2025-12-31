function showGallery(id) {
  const galleries = document.querySelectorAll(".gallery");

  galleries.forEach((gallery) => {
    gallery.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// Button functions
function us() {
  showGallery("gallery1");
}

function you() {
  showGallery("gallery2");
}

function me() {
  showGallery("gallery3");
}

function favPics() {
  showGallery("gallery4");
}
