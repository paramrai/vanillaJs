function updateTime() {
  const clock = document.querySelector("#clock");
  const hours = clock.querySelector(".hours");
  const minutes = clock.querySelector(".minutes");
  const seconds = clock.querySelector(".seconds");
  const date = clock.querySelector(".date");

  const now = new Date();
  let twelveHourClock = now.getHours();
  if (now.getHours() > 12);
  {
    twelveHourClock -= 12;
  }

  hours.textContent = String(twelveHourClock).padStart(2, "0");
  minutes.textContent = String(now.getMinutes()).padStart(2, "0");
  seconds.textContent = String(now.getSeconds()).padStart(2, "0");

  date.textContent = `
  ${String(now.getDate()).padStart(2, "0")} 
  ${String(now.getMonth() + 1).padStart(2, "0")} 
  ${String(now.getFullYear())}
  `;
}

setInterval(updateTime, 1000);
updateTime();
