/*Intro*/
function hiddenText() {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    const next = document.getElementById("hiddenText");
    const main = document.getElementById("secondmain");

    setTimeout(() => {
      intro.classList.add("fade-out");

      setTimeout(() => {
        intro.style.display = "none";
        next.style.display = "block";

        setTimeout(() => {
          main.style.display = "block";
        }, 3000);
      }, 1500);
    }, 3000);
  });
}
