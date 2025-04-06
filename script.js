function showPage(page) {
  const content = document.getElementById("main-content");
  if (page === "home") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>🔥 Welcome to my personal site! 🔥</h2>
        <p>This is where I tell you how cool I am.</p>
      </div>

      <div class="placeholder">
        <h2>📸 Photos (coming soon?)</h2>
        <p>[Imagine a bunch of badly cropped JPEGs here]</p>
      </div>

      <div class="placeholder">
        <h2>✨ Guestbook</h2>
        <p>
          Leave your mark in my 1337 guestbook! (not really, it's just
          placeholder text)
        </p>
      </div>
    `;
  } else if (page === "about") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>About Me</h2>
        <p>Hi, I'm a digital relic from the year 2001. I love skateboarding, Mountain Dew, and dial-up tones.</p>
      </div>
    `;
  } else if (page === "blog") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>My Blog</h2>
        <p>April 5th, 2025 - Just built this site. Web 1.0 will never die!!!</p>
      </div>
    `;
  }
}

function goToGame() {
  // Replace this URL with your actual game link
  window.location.href = "https://example.com/my-awesome-game";
}
