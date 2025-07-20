let name = document.getElementById("name");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let person = document.getElementById("person");
function myFunc() {
  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value);
  const day = parseInt(document.getElementById("day").value);
  const today = new Date();

  if (!name.value || isNaN(year) || isNaN(month) || isNaN(day)) {
    result.innerText = "⚠️ Please fill all fields correctly.";
    return;
  }

  let nextBD = new Date(today.getFullYear(), month, day);

  if (nextBD < today) {
    nextBD.setFullYear(today.getFullYear() + 1);
  }

  if (today.getDate() === day && today.getMonth() === month) {
    person.innerText = `Hi ${name.value}`;
    result.innerText = `🎉 Happy Birthday 🎉`;
  } 
  else {
    const diffTime = nextBD - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    person.innerText = `🎂 Hi ${name.value} 🎂`;
    result.innerHTML = `Your next birthday is in ${diffDays} days on <br>${nextBD.toDateString()}.`;
  }
}

btn.addEventListener("click", myFunc);
