let name = document.getElementById("name");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let person = document.getElementById("person");
let age = document.getElementById("age");
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
  let birthDate = new Date(year, month, day);
  let crntAge = today - birthDate;
  crntAge = Math.floor(Math.ceil(crntAge / (1000 * 60 * 60 * 24)) / 365);
  if (nextBD < today) {
    nextBD.setFullYear(today.getFullYear() + 1);
  }

  person.innerText = `🎂 Hi ${name.value} 🎂`;
  if (crntAge === 0) {
    crntAge = today - birthDate;
    crntAge = Math.floor(Math.ceil(crntAge / (1000 * 60 * 60 * 24)) / 30);
    age.innerText = `Your are now only ${crntAge} month's old!`;
  } 
  else {
    age.innerText = `Your are now ${crntAge} year's old!`;
  }
  if (today.getDate() === day && today.getMonth() === month) {
    result.innerText = `🎉 Happy Birthday 🎉`;
  } 
  else {
    const diffTime = nextBD - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    result.innerHTML = `Your next birthday is in ${diffDays} days on <br>${nextBD.toDateString()}.`;
  }
}

btn.addEventListener("click", myFunc);
