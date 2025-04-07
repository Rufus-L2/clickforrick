function showPage(page) {
  const content = document.getElementById("main-content");
  if (page === "home") {
    content.innerHTML = `
<div class="placeholder">
  <h2>What's changed?</h2>
  <p>If you came here to play the game, click the button at the top right. The rest of this page is just random stuff which I though looked cool.</p>
</div>

<div class="placeholder">
  <h2>Click For Rick archives</h2>
  <p>Due to excellent record keeping, some versions may be missing and the rest non-responsive so best if you use a tablet or computer to view them.</p>
  <p><a href="archive.clickforrick.com" target="_blank">Click Here</a></p>

</div>

<div class="placeholder">
  <h2>Upcoming projects </h2>
  <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click here to watch the trailer</a></p>
</div>
    `;
  } else if (page === "about") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>About Me</h2>
        <ul>
        <li>Great taste in web design</li>
        <li>Certified tech bro</li>
        <li>Supreme overlord of robotics</li>
        <li>Knows HTML and how to spell it</li>
        <li>DIY tech support hotline (for parents only)</li>
        <li>Fluent in sarcasm and semi-colons</li>
        <li>Accidentally started a robot uprising (it's fine now)</li>
        <li>Can turn any problem into a “feature”</li>
      </ul>
      </div>
    `;
  } else if (page === "blog") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>Entry 1</h2>
        <p>This new site took a surprisingly short ammount of time to make.</p>
      </div>
    `;
  } else if (page === "contact") {
    content.innerHTML = `
      <div class="placeholder">
        <h2>Contact Me</h2>
        <p>Want to reach out? Drop me an email at <a href="mailto:rufus_l@aol.com" style="text-decoration: none;"><b> rufus_l@aol.com</b> </a> or <a href="mailto:rufus@clickforrick.com" style="text-decoration: none;" ><b>rufus@clickforrick.com</b>
</a>or find me yelling into the void on IRC.</p>
        <p>Or just send me an actual letter. I respect tradition.</p>
      </div>
    `;
  }
}

function goToGame() {
  window.location.href = "game.html";
}
function openInstagram() {
  window.open(
    "https://www.instagram.com/clickfor_rick?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "instaPopup",
    "width=500,height=600,resizable=yes"
  );
}
