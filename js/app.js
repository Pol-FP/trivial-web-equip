(() => {
  const gameBody = document.querySelector(".game-body");
  const home = document.getElementById("home");
  const categories = document.getElementById("categories");
  const categoryButtons = categories.querySelectorAll("[data-category]");
  const nameInput = document.getElementById("player-name");
  const startButton = document.getElementById("start-game");
  const menu = document.getElementById("screen-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const categoryMessage = document.createElement("p");
  categoryMessage.setAttribute("role", "status");
  categories.append(categoryMessage);

  let playerName = "";

  function setMenuOpen(open) {
    menu.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
  }

  function showScreen(screen) {
    home.hidden = screen !== home;
    categories.hidden = screen !== categories;
    gameBody.dataset.view = screen.id;
    setMenuOpen(false);

    const heading = document.getElementById(screen.getAttribute("aria-labelledby"));
    heading.tabIndex = -1;
    heading.focus();
  }

  function enterGame() {
    const result = validaNom(nameInput.value, nameInput.maxLength);
    nameInput.setCustomValidity(result.error || "");

    if (result.error) {
      nameInput.reportValidity();
      return;
    }

    playerName = result.nom;
    nameInput.value = playerName;
    showScreen(categories);
  }

  startButton.addEventListener("click", enterGame);
  nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));
  nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      enterGame();
    }
  });

  document.querySelectorAll("[data-screen]").forEach((button) => {
    if (button === startButton) return;

    button.addEventListener("click", () => {
      if (button.dataset.screen === "home") {
        showScreen(home);
      } else if (button.dataset.screen === "categories") {
        if (playerName) showScreen(categories);
        else enterGame();
      }
    });
  });

  document.querySelector(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(home);
  });

  menuToggle.addEventListener("click", () => setMenuOpen(menu.hidden));

  categoryButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      if (!playerName || categories.hidden) return;

      const categoria = button.dataset.category;
      const partida = preparaPartida(preguntes, categoria);
      if (!partida) {
        categoryMessage.textContent = "Aquesta categoria encara no té preguntes disponibles.";
        return;
      }

      categoryButtons.forEach((option) => {
        option.setAttribute("aria-pressed", String(option === button));
      });
      const label = button.querySelector("strong").innerText.replace(/\s+/g, " ").trim();
      categoryMessage.textContent = `${label}: ${partida.preguntes.length} preguntes preparades.`;
      categories.dispatchEvent(new CustomEvent("partida:preparada", {
        bubbles: true,
        detail: { nom: playerName, categoria, partida }
      }));
    });
  });
})();
