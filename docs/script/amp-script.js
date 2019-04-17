const button = document.getElementById("time");
button.addEventListener("click", () => {
  const el = document.createElement("p");
  el.textContent = new Date().toISOString();
  document.body.appendChild(el);
});
