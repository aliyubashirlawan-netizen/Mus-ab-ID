// Get the parts of the page we need
const form = document.getElementById("id-form");
const nameInput = document.getElementById("name");
const schoolInput = document.getElementById("school");
const courseInput = document.getElementById("course");
const errorBox = document.getElementById("error");

const card = document.getElementById("card");
const cardName = document.getElementById("card-name");
const cardSchool = document.getElementById("card-school");
const cardCourse = document.getElementById("card-course");

form.addEventListener("submit", function (event) {
  // stop the page from reloading
  event.preventDefault();

  // trim() removes spaces, so "   " counts as empty
  const name = nameInput.value.trim();
  const school = schoolInput.value.trim();
  const course = courseInput.value.trim();

  // work out which fields are missing
  const missing = [];
  if (name === "") missing.push("name");
  if (school === "") missing.push("school");
  if (course === "") missing.push("course");

  if (missing.length > 0) {
    // show the error and keep the card hidden
    errorBox.textContent = "Please enter your " + missing.join(", ") + ".";
    card.classList.add("hidden");
    return;
  }

  // everything is filled in: clear the error and show the card
  errorBox.textContent = "";
  cardName.textContent = name;
  cardSchool.textContent = school;
  cardCourse.textContent = course;
  card.classList.remove("hidden");
});
