/*Login screen*/
function checkPassword() {
  const password = "05-03-2007/08-23-2006";
  const input = document.getElementById("passwordInput").value;

  if (input === password) {
    document.getElementById("login").style.display = "none";
    alert("Correct password! Welcome, Love. ❤️");
    document.getElementById("content").style.display = "block";
  } else {
    alert("Wrong password, love💔");
  }
}

function hint() {
  alert(
    "Hint: it's our birthdays 🎂 — yours comes first :) \n\nFormat: BM-BD-BY/BM-BD-BY \nExample: 00-00-0000/00-00-0000"
  );
}

/*Introduction*/
function nextBox() {
  document.getElementById("content1").classList.remove("active");
  document.getElementById("content2").classList.add("active");
}

function prevBox() {
  document.getElementById("content2").classList.remove("active");
  document.getElementById("content1").classList.add("active");
}

const btn = document.getElementById("showBtn");
const element = document.getElementById("pop");

// Show pop-up when 'showBtn' is clicked
function showPopUp() {
  const pop = document.getElementById("pop");
  pop.style.display = "block"; // make it visible
}

// Hide pop-up when clicking Back
function hidePopUp() {
  const pop = document.getElementById("pop");
  pop.style.display = "none"; // hide it
}

/*Main Content*/

/*Main*/
function main() {
  document.getElementById("content").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  document.body.classList.remove("no-scroll");
  document.body.classList.add("allow-scroll");
}

function slide() {
  const images = ["images/bgmain.jpg", "images/home2.jpg", "images/home3.jpg"];

  let index = 0;

  let current = document.getElementById("slide1");
  let next = document.getElementById("slide2");

  current.src = images[index];
  current.style.left = "0";

  next.src = images[(index + 1) % images.length];
  next.style.left = "940px";

  setInterval(() => {
    // Animate slide
    current.style.left = "-940px";
    next.style.left = "0";

    setTimeout(() => {
      index = (index + 1) % images.length;

      // 🚫 disable transition BEFORE teleporting
      current.style.transition = "none";

      // Move instantly to right & update image
      current.src = images[(index + 1) % images.length];
      current.style.left = "940px";

      // ✅ force reflow so browser applies position immediately
      current.offsetHeight;

      // ✅ re-enable transition
      current.style.transition = "left 1s ease";

      // Swap roles
      [current, next] = [next, current];
    }, 800);
  }, 5000);
}

slide();
