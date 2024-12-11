const monthNameElement = document.getElementById("month-name");

const dayElement = document.getElementById("day-name");

const dayNumberElement = document.getElementById("day-number");

const yearElement = document.getElementById("year");

const date = new Date();

const month = date.getMonth();

monthNameElement.innerHTML = date.toLocaleString("en", { month: "long" });

dayElement.innerText = date.toLocaleString("en", { weekday: "long" });


dayNumberElement.innerText = date.getDate();  

yearElement.innerText = date.getFullYear();
