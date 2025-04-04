function updateCountdown() {
  const targetDate = new Date("2026-04-11T13:00:00+02:00");
  const now = new Date();
  const diff = targetDate - now;

  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  if (diff <= 0) {
    countdownElement.innerHTML = "<div class='time-block'><div class='time-number'>0</div><div class='time-label'>To już dziś!</div></div>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerHTML = `
    <div class="time-block"><div class="time-number">${String(days).padStart(2, '0')}</div><div class="time-label">dni</div></div>
    <div class="time-block"><div class="time-number">${String(hours).padStart(2, '0')}</div><div class="time-label">godz</div></div>
    <div class="time-block"><div class="time-number">${String(minutes).padStart(2, '0')}</div><div class="time-label">min</div></div>
    <div class="time-block"><div class="time-number">${String(seconds).padStart(2, '0')}</div><div class="time-label">sek</div></div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  const toggleNavbar = () => {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollY > headerHeight - 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", toggleNavbar);
  window.addEventListener("resize", toggleNavbar);
  toggleNavbar();
});
