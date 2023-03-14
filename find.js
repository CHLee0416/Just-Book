const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const date = document.getElementById("date");
const time = document.getElementById("appt");
const number = document.getElementById("number");


date.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
}

/*one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
}*/

time.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
}

/*two.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
}*/

number.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
}

/*three.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
}*/

date.addEventListener("change", (e) => {
  const a = e.currentTarget.a;
  time.disabled = false;

  if (a === "") {
    time.disabled = true;
  }
});

date.addEventListener("click", function () {
  time.disabled = true;
  number.disabled = true;
  time.value = "";
  number.value = "";
});

time.addEventListener("change", (e) => {
  const a = e.currentTarget.a;
  number.disabled = false;

  if (a === "") {
    number.disabled = true;
  }
});

time.addEventListener("click", function () {
  number.disabled = true;
  number.value = "";
});

one.addEventListener("change", (e) => {
  const a = e.currentTarget.a;
  time.disabled = false;

  if (one.onclick) {
    time.disabled = true;
  }
});
