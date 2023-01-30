// constants for calling modal window after appointment
const modal = document.querySelector("#modal");
const openModal = document.querySelector("#openButton");
const closeModal = document.querySelector("#closeButton");

const width = window.innerWidth;
if (width <= 1201) {
  resizeFunction();
}

window.onresize = function () {
  resizeFunction();
};

function resizeFunction() {
  const width = window.innerWidth;

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  if (width <= 1201) {
    document.getElementById("hiddenMenu").style.top = "0";
    // document.getElementById("header").style.display = "none"; - position "sticky" works just fine!
    document.getElementById("index").style.display = "none";
  } else {
    document.getElementById("hiddenMenu").style.top = "-150px";
    // document.getElementById("header").style.display = "block";
    document.getElementById("index").style.display = "block";
  }
}

window.onscroll = function () {
  scrollFunction();
};

// When the user scrolls down 450px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (150px out of the top view)
// Alsco, if screen size is less than 1200px, main menu is removed.
function scrollFunction() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450 ||
    window.innerWidth <= 1201
  ) {
    document.getElementById("hiddenMenu").style.top = "0";
  } else {
    document.getElementById("hiddenMenu").style.top = "-150px";
  }
}

// a function to verify data from user and open modal window
function appointed() {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeButton");
  var x = document.getElementById("appointmentForm");
  var name = [];
  var i;
  for (i = 0; i < x.length; i++) {
    name[i] = x.elements[i].value;
  }
  // name[4] and so on - values passed to innerHTML and are required in the form.
  if (
    name[4] === "" ||
    name[5] === "" ||
    name[6] === "" ||
    name[7] === "" ||
    name[8] === ""
  ) {
    alert("You haven`t filled the appointment form!");
    return false;
  } else {
    document.getElementById("modalText").innerHTML =
      "Thank you, " +
      name[4] +
      "! Your appointment is at " +
      name[7] +
      " on " +
      name[6] +
      "!";
    modal.showModal();
  }
}

// close modal window function
closeModal.addEventListener("click", () => {
  modal.close();
});
