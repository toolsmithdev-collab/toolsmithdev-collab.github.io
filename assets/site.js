// Builds the contact address only when a visitor asks for it, so the plain
// address never appears in the page source for scrapers to collect.
document.querySelectorAll("[data-reveal-email]").forEach(function (button) {
  button.addEventListener("click", function () {
    var parts = button.getAttribute("data-reveal-email").split("|");
    var address = parts[0] + "@" + parts[1];
    var link = document.createElement("a");
    link.href = "mailto:" + address + "?subject=" + encodeURIComponent(parts[2] || "");
    link.textContent = address;
    link.className = "contact-email";
    button.replaceWith(link);
    link.focus();
  });
});
