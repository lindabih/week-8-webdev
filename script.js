// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}


// Registration form
const regForm = document.getElementById('registrationForm');
if (regForm) {
  regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmationMessage').textContent =
      "✅ Registration submitted successfully! Your Student ID is GCE12345.";
  });
}

// Results form
const resultsForm = document.getElementById('resultsForm');
if (resultsForm) {
  resultsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('studentID').value;
    const output = document.getElementById('resultsOutput');

    // Fake result lookup
    if (id === "GCE12345") {
      output.innerHTML = `
        <h3>Results for ${id}</h3>
        <table border="1" cellpadding="5">
          <tr><th>Subject</th><th>Grade</th></tr>
          <tr><td>Mathematics</td><td>A</td></tr>
          <tr><td>English</td><td>B</td></tr>
          <tr><td>Biology</td><td>C</td></tr>
        </table>
      `;
    } else {
      output.textContent = "❌ No results found for this Student ID.";
    }
  });
}
