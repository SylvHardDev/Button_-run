const button = document.getElementById("magicButton");
const container = document.querySelector(".container");


container.addEventListener("mousemove", (event) => {
  const buttonRect = button.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const buttonX = buttonRect.left + buttonRect.width / 2;
  const buttonY = buttonRect.top + buttonRect.height / 2;

  const distanceX = Math.abs(mouseX - buttonX);
  const distanceY = Math.abs(mouseY - buttonY);

  const threshold = 100; // Distance à partir de laquelle le bouton commence à fuir.

  if (distanceX < threshold && distanceY < threshold) {
    const offsetX = mouseX - buttonX > 0 ? -50 : 50;
    const offsetY = mouseY - buttonY > 0 ? -50 : 50;

    let newLeft = button.offsetLeft + offsetX;
    let newTop = button.offsetTop + offsetY;

    // Gérer les limites de la fenêtre
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;

    if (newLeft < 0) newLeft = 0;
    if (newLeft + buttonWidth > containerWidth)
      newLeft = containerWidth - buttonWidth;
    if (newTop < 0) newTop = 0;
    if (newTop + buttonHeight > containerHeight)
      newTop = containerHeight - buttonHeight;

    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  }
});

// Ajoute une alerte "Bravo !" lorsqu'on clique sur le bouton
button.addEventListener("click", () => {
  alert("🖕🏿🖕🏿🖕🏿");
});
