import "./style.css";

function CardGame(icon = "proa", alt = "Logo do PROA") {
  return /*html*/ `
        <article class="img">
            <img src="./images/${icon}.png" alt="${alt} "class="card-game">
        </article>
    `;
}

export default CardGame;
